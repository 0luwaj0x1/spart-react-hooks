import React from "react";
import PropTypes from "prop-types";

const CustomerItem = (props) => {

  return (
    <li className="customer">
      <div className="customer--info">
        <img
          className="customer--avatar"
          src={props.customer.avatar}
          alt={props.customer.name}
        />
        <h3 className="customer--name">{props.customer.name}</h3>
        <small className="customer--position">{props.customer.job.title}</small>
        <small className="customer--company">
          {props.customer.job.company}
        </small>
      </div>
      <blockquote className="customer--quote">
        {props.customer.quote}
      </blockquote>
    </li>
  );
};

CustomerItem.propTypes = {
  customer: PropTypes.object.isRequired,
};

export default CustomerItem;
