import React from "react";
import PropTypes from "prop-types";
import "./table.css";

const Tables = (props) => {
  let { columns, display_table, className, ID } = props;

  return (
        <table id={ID} cellspacing="0" cellpadding="0" className={`${className}`}>
          <thead>
            {columns &&
                columns?.map((o, i) => {
                  return<th scope="col" className={`${o.alignment}`}>{o.name}</th>
                })}
          </thead>
          <tbody className="text-center">{display_table}</tbody>
        </table>

  );
};

Tables.propTypes = {
  display_table: PropTypes.array,
  columns: PropTypes.array,
  className: PropTypes.string,
  //   buttonText: PropTypes.string,
  //   active: PropTypes.bool,
  //   onClick: PropTypes.func,
};

export default Tables;
