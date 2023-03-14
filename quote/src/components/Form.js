import formJSON from "./formElement.json";
import { useState, useEffect } from "react";
import Element from "./components/Element";
import { FormContext } from "./FormContext";
console.log("formJSON", formJSON);
function App() {
  const [elements, setElements] = useState(null);
  const handleSubmit = () => {
    console.log("submit");
  };
  const handleChangeInput = () => {
    console.log("handle change input");
  };
  const handleChange = (id, event) => {
    const newElements = { ...elements };
    newElements.fields.forEach((field) => {
      const { field_type, field_id, field_value } = field;
      if (id === field_id) {
        switch (field_type) {
          case "checkbox":
            field["field_value"] = event.target.checked;
            break;
          default:
            field["field_value"] = event.target.value;
            break;
        }
      }
      setElements(newElements);
    });
  };
  useEffect(() => {
    setElements(formJSON[0]);
  }, []);
  const { fields, page_label } = elements ?? {};
  return (
    <FormContext.Provider value={{ handleChangeInput }}>
      <div className="container">
        <h3>{page_label}</h3>
        <form>
          {fields
            ? fields.map((field, i) => (
                <>
                  <Element key={i} field={field} />
                  <p></p>
                </>
              ))
            : null}
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </FormContext.Provider>
  );
}
export default Form;
