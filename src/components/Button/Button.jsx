import styles from "./Button.module.css";

const Button = ({ children, classname }) => {
  return <div className={`${classname} ${styles.button}`}>{children}</div>;
};

export default Button;
