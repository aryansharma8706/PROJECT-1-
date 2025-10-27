import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate(-1);
  };
  return (
    <div>
      Product details {id}
      <button
        className="m-3 px-10 py-3 bg-emerald-500 text-white font-medium rounded-lg"
        onClick={handleBackClick}
      >
        Back
      </button>
    </div>
  );
}

export default ProductDetails;
