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
        <div className="row vh-100 d-flex justify-content-center mt-4">
          <div
            className="col-lg-12 col-md-6 col-sm-4 w-50 h-75  rounded-4 d-flex "
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
              <p className="">${product.description.slice(0, 100)}</p>
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
                <Link className="me-4" to={`/store`}>
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
