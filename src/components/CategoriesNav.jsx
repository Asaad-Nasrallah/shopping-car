import { Link } from "react-router-dom";
import "./CategorisNav.css";
import { useState } from "react";
function CategorisNav() {
  const [activeLink, setActiveLink] = useState("home");
  const handelClick = (link) => {
    setActiveLink(link);
  };
  return (
    <>
      <div style={{ width: "18%" }}>
        <ul className="list-group mt-4">
          <li>
            <Link
              className={
                activeLink === "electronics" ? "link-item-active" : "link-item"
              }
              to={`/categories/electronics`}
              onClick={() => {
                handelClick("electronics");
              }}
            >
              Electronics
            </Link>
          </li>
          <li>
            <Link
              className={
                activeLink === "jewelery" ? "link-item-active" : "link-item"
              }
              to={`/categories/jewelery`}
              onClick={() => {
                handelClick("jewelery");
              }}
            >
              Jewelery
            </Link>
          </li>
          <li>
            <Link
              className={
                activeLink === "men" ? "link-item-active" : "link-item"
              }
              to={`/categories/men's%20clothing`}
              onClick={() => {
                handelClick("men");
              }}
            >
              Men&apos;s clothing
            </Link>
          </li>
          <li>
            <Link
              className={
                activeLink === "women" ? "link-item-active" : "link-item"
              }
              to={`/categories/women's%20clothing`}
              onClick={() => {
                handelClick("women");
              }}
            >
              Women&apos;s clothing
            </Link>
          </li>
          <li>
            <Link
              className={
                activeLink === "home" ? "link-item-active " : "link-item"
              }
              to={"/categories/all"}
              onClick={() => {
                handelClick("home");
              }}
            >
              All Products
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default CategorisNav;
