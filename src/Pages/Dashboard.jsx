import React from "react";

const Dashboard = () => {
  const userListings = [
    { id: 1, title: "Laptop for Sale", price: "$500" },
    { id: 2, title: "Textbooks", price: "$50" },
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <h2 className="text-xl mt-4">Your Listings</h2>
      <ul className="mt-2">
        {userListings.map((listing) => (
          <li key={listing.id} className="border p-2 mb-2">
            <h3 className="font-bold">{listing.title}</h3>
            <p>Price: {listing.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;