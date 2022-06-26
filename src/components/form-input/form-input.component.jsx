import "./form-input.style.scss";

const FormInput = ({ label, ...otherprop }) => {
  return (
    <div className="group">
      <input className="form-input" {...otherprop} />
      {label && (
        <label
          className={`${
            otherprop.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
