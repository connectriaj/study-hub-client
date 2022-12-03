import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FaArrowRight } from "react-icons/fa";

const CourseDetails = () => {
  const course = useLoaderData();

  return (
    <div className="w-50 mx-auto my-5 row">
      <div className="col-lg-10">
        <Card>
          <Card.Img
            variant="top"
            style={{ height: "300px" }}
            src={course?.image}
          />
          <Card.Body className="">
            <Card.Title className="fs-2 my-3">{course.title}</Card.Title>
            <Card.Text>{course?.description}</Card.Text>
            <div>
              <p>Rating: {course?.rating}</p>
              <p>Level: {course?.level}</p>
              <p className="fw-semibold">Price: ${course.price}</p>
            </div>
            <Link to="/checkout">
              <Button className="px-5 py-2" variant="primary">
                Buy this course{" "}
                <span>
                  <FaArrowRight></FaArrowRight>
                </span>
              </Button>
            </Link>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default CourseDetails;
