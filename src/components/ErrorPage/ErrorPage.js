import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
      <div className="text-center mt-lg-5">
        <h1 className="text-danger">4O4</h1>
        <p>Oops This Page Not Found</p>
        <Link to='/'>
          <button className='btn btn-primary'>Go to home page</button>
        </Link>
      </div>
    );
};

export default ErrorPage;