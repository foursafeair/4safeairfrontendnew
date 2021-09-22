import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { createProduct, getCategories } from "./apiAdmin";

const AddProduct = () => {
  const [values, setValues] = useState({
    name: "",
    description: "",
    price: "",
    categories: [],
    category: "",
    quantity: "",
    photo: "",
    loading: false,
    error: "",
    createdProduct: "",
    redirectToProfile: false,
    formData: [],
    color: "",
    dimension: "",
    material: "",
    weight: "",
    powerConsumption:"",
    cadr: "",
    voltage: "",
    area: "",
    noice: "",
    pm25: "",
    filter: "",
    sensor: "",
    controllers: "",
    certification: ""


  });

  const { user, token } = isAuthenticated();
  const {
    name,
    description,
    price,
    categories,
    quantity,
    loading,
    error,
    createdProduct,
    color,
    formData,
    dimension,
    material,
    weight,
    powerConsumption,
    cadr,
    voltage,
    area,
    noice,
    pm25,
    filter,
    sensor,
    controllers,
    certification

  } = values;

  // load categories and set form data
  const init = () => {
    getCategories().then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({
          ...values,
          categories: data,
          formData: new FormData(),
        });
      }
    });
  };

  useEffect(() => {
    init();
  }, [loading]);

  const handleChange = (name) => (event) => {
    const value = name === "photo" ? event.target.files[0] : event.target.value;
    formData.set(name, value);
    setValues({ ...values, [name]: value });
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: "", loading: true });

    createProduct(user._id, token, formData).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({
          ...values,
          name: "",
          description: "",
          photo: "",
          price: "",
          quantity: "",
          loading: false,
          createdProduct: data.name,
          formData: new FormData(),
          redirectToProfile: true,
          color: "",
          dimension: "",
          material: "",
          weight: "",
          powerConsumption: "",
          cadr: "",
          voltage: "",
          area: "",
          noice: "",
          pm25: "",
          filter: "",
          sensor: "",
          controllers: "",
          certification: ""
        });
      }
    });
  };

  const newPostForm = () => (
    <form className="mb-3" onSubmit={clickSubmit}>
      <h4>Välj bilder</h4>
      <div className="form-group">
        <label className="btn btn-secondary">
          <input
            onChange={handleChange("photo")}
            type="file"
            name="photo"
            accept="image/*"
            multiple
          />
        </label>
      </div>

      <div className="form-group">
        <label className="text-muted">Namn</label>
        <input
          onChange={handleChange("name")}
          type="text"
          className="form-control"
          value={name}
        />
      </div>

      <div className="form-group">
        <label className="text-muted">Beskrivning</label>
        <textarea
          onChange={handleChange("description")}
          className="form-control"
          value={description}
        />
      </div>

      <div className="form-group">
        <label className="text-muted">Pris</label>
        <input
          onChange={handleChange("price")}
          type="number"
          className="form-control"
          value={price}
        />
      </div>

      <div className="form-group">
        <label className="text-muted">Kategori</label>
        <select onChange={handleChange("category")} className="form-control">
          <option>Välj kategori</option>
          {categories &&
            categories.map((c, i) => (
              <option key={i} value={c._id}>
                {c.name}
              </option>
            ))}
        </select>
      </div>


      <div className="form-group">
        <label className="text-muted">Antal</label>
        <input
          onChange={handleChange("quantity")}
          type="number"
          className="form-control"
          value={quantity}
        />
      </div>

      <div className="form-group">
        <label className="text-muted">Färg</label>
        <input
          onChange={handleChange("color")}
          type="text"
          className="form-control"
          value={color}
        />
      </div>
      <div className="form-group">
        <label className="text-muted">Produktdimension</label>
        <input
          onChange={handleChange("dimension")}
          type="text"
          className="form-control"
          value={dimension}
        />
      </div>
      <div className="form-group">
        <label className="text-muted">Chassimaterial</label>
        <input
          onChange={handleChange("material")}
          type="text"
          className="form-control"
          value={material}
        />
      </div>
      <div className="form-group">
        <label className="text-muted">Vikt</label>
        <input
          onChange={handleChange("weight")}
          type="text"
          className="form-control"
          value={weight}
        />
      </div>
      <div className="form-group">
        <label className="text-muted">Spänning</label>
        <input
          onChange={handleChange("voltage")}
          type="text"
          className="form-control"
          value={voltage}
        />
      </div>
      <div className="form-group">
        <label className="text-muted">Energiförbrukning</label>
        <input
          onChange={handleChange("powerConsumption")}
          type="text"
          className="form-control"
          value={powerConsumption}
        />
      </div>
      <div className="form-group">
        <label className="text-muted">CADR</label>
        <input
          onChange={handleChange("cadr")}
          type="text"
          className="form-control"
          value={cadr}
        />
      </div>
      <div className="form-group">
        <label className="text-muted">Applikationsområde</label>
        <input
          onChange={handleChange("area")}
          type="text"
          className="form-control"
          value={area}
        />
      </div>
      <div className="form-group">
        <label className="text-muted">Ljud</label>
        <input
          onChange={handleChange("noice")}
          type="text"
          className="form-control"
          value={noice}
        />
      </div>
      <div className="form-group">
        <label className="text-muted">PM2.5</label>
        <input
          onChange={handleChange("pm25")}
          type="text"
          className="form-control"
          value={pm25}
        />
      </div>
      <div className="form-group">
        <label className="text-muted">Tillhörande filter</label>
        <input
          onChange={handleChange("filter")}
          type="text"
          className="form-control"
          value={filter}
        />
      </div>
      <div className="form-group">
        <label className="text-muted">Sensor</label>
        <input
          onChange={handleChange("sensor")}
          type="text"
          className="form-control"
          value={sensor}
        />
      </div>
      <div className="form-group">
        <label className="text-muted">Driftstyrning</label>
        <input
          onChange={handleChange("controllers")}
          type="text"
          className="form-control"
          value={controllers}
        />
      </div>
      <div className="form-group">
        <label className="text-muted">Certifiering</label>
        <input
          onChange={handleChange("certification")}
          type="text"
          className="form-control"
          value={certification}
        />
      </div>



      <button className="btn btn-outline-primary">Skapa Produkt</button>
    </form>
  );

  const showError = () => (
    <div
      className="alert alert-danger"
      style={{ display: error ? "" : "none" }}
    >
      {error}
    </div>
  );

  const showSuccess = () => (
    <div
      className="alert alert-info"
      style={{ display: createdProduct ? "" : "none" }}
    >
      <h2>{`${createdProduct}`} har skapats!</h2>
    </div>
  );

  const showLoading = () =>
    loading && (
      <div className="alert alert-success">
        <h2>Laddar...</h2>
      </div>
    );

  return (
    <Layout
      title="Add a new product"
      description={`Hej ${user.name}! På denna sida så skapar du en ny produkt.`}
    >
      <div className="row">
        <div className="col-md-8 offset-md-2">
          {showLoading()}
          {showSuccess()}
          {showError()}
          {newPostForm()}
        </div>
      </div>
    </Layout>
  );
};

export default AddProduct;
