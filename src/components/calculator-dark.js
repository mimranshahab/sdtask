import React, { useState } from "react";
import "../css/calculator-dark.css";

const CalculatorDark = (props) => {
  const [screenOutput, setScreenOutput] = useState("");
  const [isDecimalPressed, setIsDecimalPressed] = useState(false);
  const [result, setResult] = useState("0");
  const [state, setState] = useState("0");
  const [lastOperation, setLastOperation] = useState("");
  const [lastOperationUI, setLastOperationUI] = useState("");
  const [lastResult, setLastResult] = useState("0");

  const buttonClick = (e) => {
    console.log("clicked", e.target.innerText);
    const value = e.target.innerText;
    if (state == 0 || state == 1) {
      if (isDecimalPressed) {
        setResult((prev) => prev + value);
      } else {
        if (value != 0) {
          setResult((prev) => {
            if (prev == 0) {
              return value;
            } else {
              return prev + value;
            }
          });
        } else {
          setResult((prev) => prev + value);
        }
      }
    } else {
      setResult(value);
      setState(1);
    }
  };

  const clear = () => {
    setScreenOutput("");
    setIsDecimalPressed(false);
    setResult("0");
    setState("0");
    setLastOperation("");
    setLastOperationUI("");
    setLastResult("0");
  };

  const decimal = () => {
    if (isDecimalPressed == false) {
      setIsDecimalPressed(true);
      setResult((prev) => prev + ".");
    }
  };

  const mathOperation = (e) => {
    const operation = e.target.innerText;
    switch (operation) {
      case "+":
        setOperationLogic(operation, operation);
        break;
      case "–":
        setOperationLogic("-", operation);
        break;
      case "x":
        setOperationLogic("*", operation);
        break;
      case "÷":
        setOperationLogic("/", operation);
        break;
    }
  };

  const setOperationLogic = (operand, operation) => {
    let newResult = lastResult;
    let _operand = lastOperation ? lastOperation : operand;
    if (state != 2) {
      newResult = lastResult > 0 ? eval(newResult + _operand + result) : result;
    }
    console.log("newResult", newResult);
    console.log("result", result);
    setScreenOutput(newResult + operation);
    setLastOperation(operand);
    setLastOperationUI(operation);
    setLastResult(newResult);
    setState(2);
  };

  const evaluate = () => {
    let newResult = eval(lastResult + lastOperation + result);
    setScreenOutput(lastResult + lastOperationUI + result + "=");
    setLastOperation("");
    setLastOperationUI("=");
    setLastResult(0);
    setResult(newResult);
    setState(1);
  };

  return (
    <div className="calculator-dark-container">
      <div className="calculator-dark-calculator-dark">
        <img
          src="../playground_assets/backgroundeffect5250-yyb-200h.png"
          alt="Backgroundeffect5250"
          className="calculator-dark-backgroundeffect"
        />
        <div className="calculator-dark-content">
          <span className="calculator-dark-text">
            <span>{screenOutput}</span>
          </span>
          <span className="calculator-dark-text02">
            <span>{result}</span>
          </span>
          <div className="calculator-dark-row">
            <button className="calculator-dark-button" onClick={clear}>
              <span className="calculator-dark-text04">C</span>
            </button>
            <button className="calculator-dark-button01">
              <div className="calculator-dark-frame-icon">
                <img
                  src="../playground_assets/unioni122-4vxd.svg"
                  alt="UnionI122"
                  className="calculator-dark-union"
                />
              </div>
            </button>
            <button className="calculator-dark-button02">
              <span className="calculator-dark-text05">%</span>
            </button>
            <button
              className="calculator-dark-button03"
              onClick={mathOperation}
            >
              <span className="calculator-dark-text06">÷</span>
            </button>
          </div>
          <div className="calculator-dark-row1">
            <button className="calculator-dark-button04" onClick={buttonClick}>
              <span className="calculator-dark-text07">7</span>
            </button>
            <button className="calculator-dark-button05" onClick={buttonClick}>
              <span className="calculator-dark-text08">8</span>
            </button>
            <button className="calculator-dark-button06" onClick={buttonClick}>
              <span className="calculator-dark-text09">9</span>
            </button>
            <button
              className="calculator-dark-button07"
              onClick={mathOperation}
            >
              <span className="calculator-dark-text10">x</span>
            </button>
          </div>
          <div className="calculator-dark-row2">
            <button className="calculator-dark-button08" onClick={buttonClick}>
              <span className="calculator-dark-text11">4</span>
            </button>
            <button className="calculator-dark-button09" onClick={buttonClick}>
              <span className="calculator-dark-text12">5</span>
            </button>
            <button className="calculator-dark-button10" onClick={buttonClick}>
              <span className="calculator-dark-text13">6</span>
            </button>
            <button
              className="calculator-dark-button11"
              onClick={mathOperation}
            >
              <span className="calculator-dark-text14">–</span>
            </button>
          </div>
          <div className="calculator-dark-row3">
            <button className="calculator-dark-button12" onClick={buttonClick}>
              <span className="calculator-dark-text15">1</span>
            </button>
            <button className="calculator-dark-button13" onClick={buttonClick}>
              <span className="calculator-dark-text16">2</span>
            </button>
            <button className="calculator-dark-button14" onClick={buttonClick}>
              <span className="calculator-dark-text17">3</span>
            </button>
            <button
              className="calculator-dark-button15"
              onClick={mathOperation}
            >
              <span className="calculator-dark-text18">+</span>
            </button>
          </div>
          <div className="calculator-dark-row4">
            <button className="calculator-dark-button16" onClick={decimal}>
              <span className="calculator-dark-text19">.</span>
            </button>
            <button className="calculator-dark-button17" onClick={buttonClick}>
              <span className="calculator-dark-text20">0</span>
            </button>
            <button className="calculator-dark-button18">
              <div className="calculator-dark-frame-icon1">
                <img
                  src="../playground_assets/unioni144-xpzp.svg"
                  alt="UnionI144"
                  className="calculator-dark-union1"
                />
              </div>
            </button>
            <button className="calculator-dark-button19" onClick={evaluate}>
              <span className="calculator-dark-text21">=</span>
            </button>
          </div>
        </div>
        <div className="calculator-dark-toggle">
          <div className="calculator-dark-moon">
            <img
              src="../playground_assets/unioni525-q5p5.svg"
              alt="UnionI525"
              className="calculator-dark-union2"
            />
          </div>
          <div className="calculator-dark-sun"></div>
          <img
            src="../playground_assets/oi525-v96-200h.png"
            alt="OI525"
            className="calculator-dark-o"
          />
        </div>
      </div>
    </div>
  );
};

export default CalculatorDark;
