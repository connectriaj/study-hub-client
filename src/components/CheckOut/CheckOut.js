import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

const CheckOut = () => {
  return (
    <div>
      <h1 className="text-center text-danger my-5 fw-bold">
        Congratulations Your Order is Successfully!
      </h1>
      <h3 className="text-center text-success my-3">
        Click on below button to download PDF file free
      </h3>

      <div className="d-flex flex-column justify-content-center align-items-center">
        <div className="my-2">
          <Button
            href="../../../public/js.pdf"
            download={"JavaScript.pdf"}
            variant="primary"
            size="lg"
          >
            Download Book
          </Button>
        </div>

        <div className="mt-3">
          <Link to="/">
            <Button variant="primary" size="lg">
              Go to home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
