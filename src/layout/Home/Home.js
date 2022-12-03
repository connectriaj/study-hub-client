import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link, useLoaderData } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const categoryData = useLoaderData();

 

  return (
    <div>
      <h1 className="text-center my-5">
        Welcome to Study <span className="fs-1 text-danger">Hub</span>
      </h1>
      <div className="row w-75 mx-auto">
        {categoryData.map((category) => (
          <div key={category.id} className="col-lg-4 my-3">
            <Card className="text-center">
              <Card.Body>
                <Card.Title>{category.title}</Card.Title>
                <Card.Text>
                  In this project, you will learn something new bigger for your
                  better skill development. Click show Details button and know
                  more about this course.
                </Card.Text>
                <Link to="/courses">
                  <Button variant="danger">Show Details</Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
