import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="text-center mt-lg-5">
      <u>
        <h1 className="text-info">About Us</h1>
      </u>
      <p className="w-50 mx-auto">
        Every business has a story to tell. We believe an “About” page should
        always include a piece of the story about you or your company. This is
        especially true for bloggers and smaller companies. People love brands
        with personalities nowadays. And stories are powerful mediums for you to
        connect with your audience. People tell stories. It’s what we do as
        humans!
      </p>

      <Link to="/">
        <button className="btn btn-primary">Go to home page</button>
      </Link>
    </div>
  );
};

export default About;
