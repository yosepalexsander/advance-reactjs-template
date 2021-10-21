// import package for property types
import PropTypes from "prop-types";

// create component here
const DetailAbout = (props) => {
  return (
    <div>
      <h1>Title: {props.title}</h1>
      <h1>Summary: {props.summary}</h1>
      <h1>Total Guest: {props.total}</h1>
    </div>
  );
};

// define property type for this component here
DetailAbout.propTypes = {
  title: PropTypes.string.isRequired,
  summary: PropTypes.string,
  total: PropTypes.number,
};

export default DetailAbout;
