import React from "react";
import { Link } from "react-router-dom";

const FAQ = () => {
  return (
    <div className="text-center mt-lg-5">
      <h1 className="text-success">Our FAQ</h1>

      <div className="w-50 mx-auto">
        <p>
          Every business has a story to tell. We believe an “About” page should
          always include a piece of the story about you or your company. This is
          especially true for bloggers and smaller companies. People love brands
          with personalities nowadays. And stories are powerful mediums for you
          to connect with your audience. People tell stories. It’s what we do as
          humans!
        </p>
        <p>
          Your mission statement is an action-based statement that declares the
          purpose of your business and how you serve your customers. This
          sometimes includes a description of the company, what it does, and its
          objectives. A mission statement must answer the big three questions:
          the “what,” the “who,” and the “why,” of your company. Therefore, your
          mission statement is basically a condensed guideline by which your
          company operates. Most mission statements are between one and three
          sentences. It should be easy to understand, and easy to remember.
          After the mission statement, it’s also good to explain how you go
          about achieving such a mission. How do your company operations fit in
          with your mission?
        </p>
      </div>

      <Link to="/">
        <button className="btn btn-primary">Go to home page</button>
      </Link>
    </div>
  );
};

export default FAQ;
