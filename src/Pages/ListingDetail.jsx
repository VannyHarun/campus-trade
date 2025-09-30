import React from "react";
import { useParams } from "react-router-dom";

const ListingDetail = () => {
  const { id } = useParams();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Listing Detail</h1>
      <p>Details for listing ID: {id}</p>
    </div>
  );
};

export default ListingDetail;