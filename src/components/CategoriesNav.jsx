import { Link } from "react-router-dom";
import "./CategorisNav.css";
import { useRef, useState } from "react";
function CategorisNav() {
  const [activeLink, setActiveLink] = useState("home");
  const [activePrice, setActivePrice] = useState("501");
  const currentCategory = useRef("/categories/all/");
  const handelClick = (link) => {
    setActiveLink(link);
  };
  const handelPrice = (price) => {
    setActivePrice(price);
  };
  return (
    <>
      <div style={{ width: "18%" }}>
        <ul className="list-group mt-4">
          <li>
            <Link
              to={`/categories/electronics/${activePrice}`}
              className={
                activeLink === "electronics" ? "link-item-active" : "link-item"
              }
              onClick={() => {
                handelClick("electronics");
                currentCategory.current = "/categories/electronics/";
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
              to={`/categories/jewelery/${activePrice}`}
              onClick={() => {
                handelClick("jewelery");
                currentCategory.current = "/categories/jewelery/";
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
              to={`/categories/men's%20clothing/${activePrice}`}
              onClick={() => {
                handelClick("men");
                currentCategory.current = "/categories/men's%20clothing/";
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
              to={`/categories/women's%20clothing/${activePrice}`}
              onClick={() => {
                handelClick("women");
                currentCategory.current = "/categories/women's%20clothing/";
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
              to={`/categories/all/${activePrice}`}
              onClick={() => {
                handelClick("home");
                currentCategory.current = "/categories/all/";
              }}
            >
              All Products
            </Link>
          </li>
          <li className="ms-2 mt-2">
            <Link
              className={
                activePrice === "50" ? "price-link-active" : "price-link"
              }
              onClick={() => {
                handelPrice("50");
              }}
              to={`${currentCategory.current}50`}
            >
              Up to 50
            </Link>{" "}
            <br />
            <Link
              className={
                activePrice === "100" ? "price-link-active" : "price-link"
              }
              onClick={() => {
                handelPrice("100");
              }}
              to={`${currentCategory.current}100`}
            >
              Up to 100
            </Link>{" "}
            <br />
            <Link
              className={
                activePrice === "500" ? "price-link-active" : "price-link"
              }
              onClick={() => {
                handelPrice("500");
              }}
              to={`${currentCategory.current}500`}
            >
              Up to 500
            </Link>{" "}
            <br />
            <Link
              className={
                activePrice === "501" ? "price-link-active" : "price-link"
              }
              onClick={() => {
                handelPrice("501");
              }}
              to={`${currentCategory.current}501`}
            >
              500 & above
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default CategorisNav;
