// import css modules
import style from "./Form.module.css";
const styles = {
  form: {
    margin: "16px 20% 0",
  },
  formGroup: {
    marginBottom: "16px",
  },
  formLabel: {
    marginBottom: "8px",
    display: "inline-block",
  },
  formInput: {
    display: "block",
    width: "100%",
    padding: ".375rem .75rem",
    fontSize: "1rem",
    lineHeight: 1.5,
    color: "#212529",
    backgroundColor: "#fff",
    border: "1px solid #ced4da",
    borderRadius: ".25rem",
  },
};

function Form() {
  return (
    <div>
      <form style={styles.form}>
        <div style={styles.formGroup}>
          <label htmlFor="username" style={styles.formLabel}>
            Username
          </label>
          <input id="username" placeholder="Input username" style={styles.formInput} />
        </div>
        <div className={style.formGroup}>
          <label htmlFor="email" className={style.formLabel}>
            Email
          </label>
          <input id="email" className={style.formInput} placeholder="Input your email" />
        </div>
      </form>
    </div>
  );
}

export default Form;
