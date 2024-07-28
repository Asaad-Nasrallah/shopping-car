import "./HomeStyle.css";
function Home() {
  return (
    <>
      <div
        className="home d-flex justify-content-center align-items-center"
        style={{ marginTop: "-22px" }}
      >
        <h1
          className="w-50 text-center text-primary fw-bolder"
          style={{ fontStyle: "italic", fontSize: "4rem" }}
        >
          {" "}
          Welcome to online shopping
        </h1>
      </div>
    </>
  );
}

export default Home;
