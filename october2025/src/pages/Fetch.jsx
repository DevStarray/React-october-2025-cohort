import axios from "axios";
import React, { useEffect, useState } from "react";

const Fetch = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const FetchProducts = async () => {
      setLoading(true);
      let response = await axios.get("https://fakestoreapi.com/products");
      console.log(response.data);
      setProducts(response.data);
      setLoading(false);
    };
    FetchProducts();
  }, []);

  return (
    <div className="d-flex gap-2 flex-wrap">
      {loading ? (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        products.map((product) => (
          <div className="card" style={{ width: "18rem" }} key={product.id}>
            <img
              src={product.image}
              className="card-img-top"
              alt={product.title}
            />
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">{product.description}</p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Fetch;
