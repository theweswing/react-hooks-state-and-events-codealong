import React, { useState } from "react";

function Toggle() {
  const [buttonStatus,toggleStatus] = useState(false)
  const buttonColor = buttonStatus ? "blue" : "orange"
  function clickButton(){
    toggleStatus((currentStatus) => !currentStatus)
  }
  return <button style = {{background: buttonColor}} onClick={clickButton}>{buttonStatus ? "ON" : "OFF"}</button>;
}

export default Toggle;
