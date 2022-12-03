import React, { useState } from "react";

const ToogleTheme = () => {

  const [buttonText, setButtonText] = useState(true);

  return (
    <div className="mx-lg-5">
      <button className="btn btn-danger px-4" onClick={() => setButtonText(!buttonText)}>
        {buttonText ? "Light" : "Dark"}
      </button>
    </div>
  );
};

export default ToogleTheme;
