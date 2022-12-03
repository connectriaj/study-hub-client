import { Link, useLoaderData } from "react-router-dom";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import "./Course.css";

const Courses = () => {
  const categoryData = useLoaderData();
  // console.log(categoryData);
  return (
    <div>
      <h2 className="fs-2 fw-bold text-center my-5 pt-3">
        <span className="text-danger">Explore your</span> favorite course!
      </h2>
      <div className="d-flex">
        <div className="d-flex">
          <div className="row w-75 mx-auto">
            {categoryData.map((category) => (
              <div className="col-lg-4 my-3" key={category?.id}>
                <CardGroup>
                  <Card>
                    <Card.Img
                      variant="top"
                      style={{ height: "200px" }}
                      src={category?.image}
                    />
                    <Card.Body>
                      <Card.Title>{category.title}</Card.Title>
                      <Card.Text>
                        {category.description.length > 200 ? (
                          <p>
                            {category.description.slice(0, 250) + "..."}
                            <Link to="/course/id">Read More</Link>
                          </p>
                        ) : (
                          <p>{category.description}</p>
                        )}
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer className="d-flex justify-content-between">
                      <div>
                        <small className="fw-bold">
                          <span>Price: ${category?.price}</span>
                        </small>
                      </div>
                      <div>
                        <Link to={`/course-details/${category.id}`}>
                          <button className="btn btn-info text-white">
                            Show Details
                          </button>
                        </Link>
                      </div>
                    </Card.Footer>
                  </Card>
                </CardGroup>
              </div>
            ))}
          </div>
        </div>
        <div className=" d-lg-block d-none text-center pe-5">
          <u>
            <h3>
              <span className="text-info">Explore</span> Us
            </h3>
          </u>
          <Link to="/">
            <button className="px-5 my-2 w-100 py-2 btn btn-outline-danger">
              Home
            </button>
          </Link>
          <Link to="/courses">
            <button className="px-5 my-2 w-100 py-2 btn btn-outline-danger">
              Courses
            </button>
          </Link>
          <Link to="/blog">
            <button className="px-5 my-2 w-100 py-2 btn btn-outline-danger">
              Blog
            </button>
          </Link>
          <Link to="/faq">
            <button className="px-5 my-2 w-100 py-2 btn btn-outline-danger">
              FAQ
            </button>
          </Link>
          <Link to="/about">
            <button className="px-5 my-2 w-100 py-2 btn btn-outline-danger">
              About
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Courses;
