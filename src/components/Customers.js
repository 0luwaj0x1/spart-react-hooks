import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import CustomerItem from "./CustomerItem";
import api from "../apis/api";
import AppContext from '../contexts/search'



function Customer(props) {
  const [customers, setCustomers] = useState([]);
  const {state} = useContext(AppContext)

  useEffect(() => {
    fetchData(props.id).then((response) =>
      setCustomers(response.data.customers)
    );
  }, [props.id]);

  useEffect(() => {
    const timer = setInterval(
      () =>
        fetchData(props.id).then((response) =>
          setCustomers(response.data.customers)
        ),
      30000
    );

    return () => clearInterval(timer);
  });


  return (
    <div>
      <ul className="customers">
        {customers
          .filter((customer) => customer.name.toLowerCase().includes(state.searchTerm))
          .map((customer) => (
            <CustomerItem key={customer.id} customer={customer} />
          ))}
      </ul>
    </div>
  );
}

function fetchData(id) {
  return api.get(`/products/${id}?offset=0&limit=5`);
}

Customer.propTypes = {
  id: PropTypes.string.isRequired
};

export default Customer;
