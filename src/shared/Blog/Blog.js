import React from "react";

const Blog = () => {
  return (
    <div className="container w-75 mx-auto">
      <div className="border border-1  my-3 p-5 rounded-3">
        <h1 className="text-3xl my-5">what is cors?</h1>
        <p className="text-left my-2 font-bold fs-5 fw-semibold">
          Author name: David Bomb | Publish Date: 25-2-2022
        </p>
        <p className="text-left">
          Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism
          that allows a server to indicate any origins (domain, scheme, or port)
          other than its own from which a browser should permit loading
          resources. CORS also relies on a mechanism by which browsers make a
          "preflight" request to the server hosting the cross-origin resource,
          in order to check that the server will permit the actual request. In
          that preflight, the browser sends headers that indicate the HTTP
          method and headers that will be used in the actual request.
        </p>
      </div>
      <div className="border border-1  my-3 p-5 rounded-3">
        <h1 className="text-3xl my-5">
          Why are you using firebase? What other options do you have to
          implement authentication?
        </h1>
        <p className="text-left my-2 font-bold fs-5 fw-semibold">
          Author name: Ariyan Khan | Publish Date: 15-12-2021
        </p>
        <p className="text-left">
          Most apps need to know the identity of a user. Knowing a user's
          identity allows an app to securely save user data in the cloud and
          provide the same personalized experience across all of the user's
          devices. Firebase Authentication provides backend services,
          easy-to-use SDKs, and ready-made UI libraries to authenticate users to
          your app. It supports authentication using passwords, phone numbers,
          popular federated identity providers like Google, Facebook and
          Twitter, and more.
        </p>
      </div>
      <div className="border border-1  my-3 p-5 rounded-3">
        <h1 className="text-3xl my-5">How does the private route work?</h1>
        <p className="text-left my-2 font-bold fs-5 fw-semibold">
          Author name: Sabbir Khan | Publish Date: 12-6-2022
        </p>
        <p className="text-left">
          Private Routes vary based on the Apps, For example, Dashboard, User
          Profile, App Settings, Home etc. In simple words, These routes can be
          accessed only after login. The constraints for Public and Private
          routes are that Public routes should not be accessed after login and
          Private routes should not be accessible before login. In this article,
          we can see. How to create public and private routes using react-router
          for your react apps.
        </p>
      </div>
      <div className="border border-1  my-3 p-5 rounded-3">
        <h1 className="text-3xl my-5">What is Node? How does Node work?</h1>
        <p className="text-left my-2 font-bold fs-5 fw-semibold">
          Author name: Akib akash | Publish Date: 1-9-2022
        </p>
        <p className="text-left">
          Scalability, latency, and throughput are key performance indicators
          for web servers. Keeping the latency low and the throughput high while
          scaling up and out is not easy. Node.js is a JavaScript runtime
          environment that achieves low latency and high throughput by taking a
          “non-blocking” approach to serving requests. In other words, Node.js
          wastes no time or resources on waiting for I/O requests to return. In
          the traditional approach to creating web servers, for each incoming
          request or connection the server spawns a new thread of execution or
          even forks a new process to handle the request and send a response.
          Conceptually, this makes perfect sense, but in practice it incurs a
          great deal of overhead.
        </p>
      </div>
    </div>
  );
};

export default Blog;
