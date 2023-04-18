import React from "react";

// Component to display select options
const SearchPanel = (props) => {
  return (
    <div className="panel">
      <h6>Countries</h6>
      <select className="form-select " aria-label="Select Country" onChange={(e) => props.getSelectedCountry(e.target.value)}>
        <option defaultValue={null}>Select Country</option>
        {props.countries.map((n, i) => (<option key={i} value={n.name.common}>{n.name.common}</option>))}
      </select>
    </div>
  );
}


export default SearchPanel;