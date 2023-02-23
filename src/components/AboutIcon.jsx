import { Link } from "react-router-dom";

function AboutIcon() {
  return (
    <div className="about-link">
      <Link to="/about">
        <i className="fa-solid fa-circle-question"></i>
      </Link>
    </div>
  );
}

export default AboutIcon;
