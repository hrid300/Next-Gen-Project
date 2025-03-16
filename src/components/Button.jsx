import { Link } from "react-router";

const Button = ({ text, link = "/", className = "", bgshow = true }) => {
  return (
    <Link
      to={link}
      className={`${bgshow ? "btnlinear" : "borderelement"}  py-4 px-11   font-primary text-xl seconde-text font-medium ${className} `}
    >
      {text}
    </Link>
  );
};

export default Button;
