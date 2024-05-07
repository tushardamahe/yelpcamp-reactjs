import { useState } from "react";

const New = () => {
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    price: "",
    description: "",
    images: [],
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: name === "images" ? Array.from(files) : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted with values:", formData);
  };

  return (
    <div className="row">
      <h1 className="text-center">New Campground</h1>
      <div className="col-md-6 offset-md-3">
        <form
          onSubmit={handleSubmit}
          className="validated-form"
          encType="multipart/form-data"
          noValidate
        >
          <div className="mb-3">
            <label className="form-label" htmlFor="title">
              Title
            </label>
            <input
              className="form-control"
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
            <div className="valid-feedback">Looks Good!</div>
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="location">
              Location
            </label>
            <input
              className="form-control"
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
            />
            <div className="valid-feedback">Looks Good!</div>
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="price">
              Campground Price
            </label>
            <div className="input-group">
              <span className="input-group-text" id="price-label">
                ₹
              </span>
              <input
                type="text"
                className="form-control"
                id="price"
                placeholder="0.00"
                aria-label="price"
                aria-describedby="price-label"
                name="price"
                value={formData.price}
                onChange={handleChange}
                required
              />
              <div className="valid-feedback">Looks Good!</div>
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="description">
              Description
            </label>
            <textarea
              className="form-control"
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
            />
            <div className="valid-feedback">Looks Good!</div>
          </div>
          <div className="mb-3">
            <label htmlFor="formFileMultiple" className="form-label">
              Upload Images
            </label>
            <input
              type="file"
              className="form-control"
              id="formFileMultiple"
              name="images"
              onChange={handleChange}
              multiple
              required
            />
            <div className="invalid-feedback">
              This campground would look much better with a picture.
            </div>
          </div>
          <div className="mb-3">
            <button type="submit" className="btn btn-success">
              Add Campground
            </button>
          </div>
        </form>
        <a href="/campgrounds">All Campgrounds</a>
      </div>
    </div>
  );
};

export default New;
