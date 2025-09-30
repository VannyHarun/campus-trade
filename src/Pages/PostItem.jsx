import React, { useState } from "react";

const PostItem = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Item Posted:", formData);
    // Add logic to send data to the backend
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Post an Item</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="border p-2 w-full"
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="border p-2 w-full"
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="border p-2 w-full"
          />
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 mt-4">Post Item</button>
      </form>
    </div>
  );
};

export default PostItem;
