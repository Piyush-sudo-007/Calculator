import styles from "./App.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Display from "./components/display";
import Buttons from "./components/buttons";
import { useState } from "react";
function App() {
  const [calval, setcalval] = useState("");

  const onButtonClick = (text) => {
    if (text === "<-") {
      let a = calval.slice(0, calval.length - 1);
      setcalval(a);
    } else if (text === "=" && calval.includes("sqrt")) {
      let sqrtval = calval.slice(4, calval.length);
      let sqrt = Math.sqrt(sqrtval);
      setcalval(sqrt);
    } else if (text === "=") {
      let result = eval(calval);
      setcalval(result);
    } else if (text === "C") {
      setcalval("");
    } else {
      let newItem = calval + text;
      setcalval(newItem);
    }
  };

  return (
    <div className={styles.calculator}>
      <Display displayValue={calval}></Display>
      <Buttons buttonClick={onButtonClick}></Buttons>
    </div>
  );
}

export default App;
