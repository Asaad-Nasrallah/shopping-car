import { useEffect, useState } from "react";
import { getProduct } from "../services/shopping.service";
import { Link, useParams } from "react-router-dom";

function ShowDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getProduct(id)
      .then((res) => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err.message));
  }, []);
  return (
    <>
      {loading ? (
        "Loading . . ."
      ) : (
        <div className="row vh-75 d-flex justify-content-center" style={{width:"100%"}}>
          <div
            className="col-lg-12 col-md-6 col-sm-4 w-50 my-5 rounded-4 d-flex flex-column flex-md-row align-items-center justify-content-center text-center text-md-start"
            style={{ backgroundColor: "#EEEDEB" }}
          >
            <div className=" w-50 p-2">
              <img
                className="w-100 h-100 rounded-3"
                src={product.image}
                alt="Card image cap"
              />
            </div>
            <div className="w-50 p-2 d-flex flex-column gap-2 justify-content-center">
              <span className="fw-bold">{product.title}</span> 
              <span className="">${product.description.slice(0, 100)}</span>
              <div className="text-warning">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
              </div>
              <div className="d-flex justify-content-between">
                <p className="fw-bold ms-1">${product.price}</p>{" "}
                <Link
                  onMouseLeave={(e) => {
                    e.target.style.color = "blue";
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = "red";
                  }}
                  className="me-4"
                  to={"/categories/all"}
                  style={{ textDecoration: "none", fontSize: "15px" }}
                >
                  Back
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ShowDetails;
