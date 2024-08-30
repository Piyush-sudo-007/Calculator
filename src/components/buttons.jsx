import styles from "./buttons.module.css";
const Buttons = ({ buttonClick }) => {
  const Buttonsname = [
    "C",
    "1",
    "2",
    "<-",
    "3",
    "4",
    "+",
    "5",
    "6",
    "-",
    "7",
    "8",
    "*",
    "9",
    "0",
    "/",
    ".",
    "sqrt",
    "(",
    "=",
    ")",
  ];

  return (
    <div className={styles["btn-container"]}>
      {Buttonsname.map((items) => (
        <button
          key={items}
          className={styles["btn"]}
          onClick={() => buttonClick(items)}
        >
          {items}
        </button>
      ))}
    </div>
  );
};

export default Buttons;
