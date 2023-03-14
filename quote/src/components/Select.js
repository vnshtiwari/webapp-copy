import React, { useContext } from "react";
import { FormContext } from "../../FormContext";
const Select = ({ field_id, field_label, field_options }) => {
  const { handleChange } = useContext(FormContext);
  return (
    <div className="form-group">
      <label htmlFor="exampleInputPassword1">{field_label}ss</label>
      <select
        className="form-control"
        onChange={(event) => handleChange(field_id, event)}
      >
        <option>Default select</option>
        {field_options.length > 0 &&
          field_options.map((option, i) => (
            <option key={i} value={option.option_label}>
              {option.option_label}{" "}
            </option>
          ))}
      </select>
    </div>
  );
};
export default Select;
