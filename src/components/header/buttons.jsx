import React from "react";
import Resume from "../../Extras/Akshar_Dubey_Resume.pdf";
function buttons() {
  return (
    <div className="cvbutton">
      <a href={Resume} download className="btn btn-primary">
        Download Resume
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Connect
      </a>
    </div>
  );
}

export default buttons;
