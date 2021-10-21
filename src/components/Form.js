// create style here
const style = {
  form: {
    margin: "16px 20% 0",
  },
  formGroup: { marginBottom: "16px" },
  formLabel: { marginBottom: "8px", display: "inline-block" },
  formInput: {
    display: "block",
    width: "100%",
    padding: ".375rem .75rem",
    fontSize: "1rem",
    lineHeight: 1.5,
    color: "#212529",
    border: "1px solid #ced4da",
    borderRadius: "5px",
  },
};
// create Form component
function Form() {
  return (
    // code inside div
    <div>
      <form style={style.form}>
        <div style={style.formGroup}>
          <label htmlFor="username" style={style.formLabel}>
            Username
          </label>
          <input id="username" placeholder="input your name" style={style.formInput} />
        </div>
      </form>
    </div>
  );
}

export default Form;
