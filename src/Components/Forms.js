// usestate is hook
import React, { useState } from "react";

export default function Forms(props) {
  // we made a hook below if syntax is forget search it on internet😁 it is used to assign values to variable
  const [text, setText] = useState("");
  const handleUpCase = () => {
    // console.log("Upper case button was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    {props.showAlert("changed into uppercase", "success")}
  };
  const handleClCase = () => {
    setText("");
    {props.showAlert("text is cleared", "success")}
  };

  const handleExtraSpaces=()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    {props.showAlert("extra spaces are removed", "success")}
  }
  const handleCopy =()=>{
    var text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value)
    {props.showAlert("text is copied", "success")}
  }
  const handleLowCase = () => {
    let newText2 = text.toLowerCase();
    setText(newText2);
    {props.showAlert("changed into lowercase", "success")}
  };
  const onChangeButton = (event) => {
    // console.log("On change");

    // by doing this we can change values inside of textarea we will surely use it at many places so it is also very important
    setText(event.target.value);
  };
  return (
    <div style={{color:props.mode==='dark'?'white':'black'}}>
      {/* these props.heading are used for object oriented programing if we want to use this file for another project we can change these values outside of this file */}
      <h1>{props.heading}</h1>
      <div className="container mb-3">
        {/* onChangeButton is a function that we assign values to on the upper side in line 8 */}
        {/* value={text} this is usefull because we usee hook upside not simply assign values */}
        <textarea
          className="form-control"
          onChange={onChangeButton}
          value={text}
          id="mybox"
          rows={8}
          style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'black'}}
        ></textarea>
      </div>
      {/* same with handleUpCase sd with onChangeButton  */}
      <button className="btn btn-primary mx-1" onClick={handleUpCase}>
        Convert to Upper case
      </button>
      <button className="btn btn-primary mx-1" onClick={handleLowCase}>
        Convert to Lower case
      </button>
      <button className="btn btn-primary mx-1" onClick={handleClCase}>
        Clear button
      </button>
      <button className="btn btn-primary mx-1" onClick={handleCopy}>
        Copy to Clipboard
      </button>
      <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>
        Remove Extra Spaces
      </button>

      <div className="container mb-5" style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>Your Text Summary</h2>
        <p>
          Words {text.split(" ").length} and Characters {text.length}
        </p>
        <p> {0.008 * text.split(" ").length} minutes to read above text </p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter your text in the above box to preview it here"}</p>
      </div>
    </div>
  );
}
