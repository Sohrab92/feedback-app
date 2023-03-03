import { Link } from "react-router-dom";
import Card from "./Card";

function About() {
  return (
    <Card>
      <div className="about">
        <h3>About this project</h3>
        <p>
          This is a React app for leaving feedback about a project or services.
        </p>
        <p>Version: 1.0.0</p>
        <p>
          <Link to="/" className="back-link">
            Back to homepage
          </Link>
        </p>
      </div>
    </Card>
  );
}

export default About;
