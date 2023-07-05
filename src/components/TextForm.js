import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter text here");
  const [vowelCount, setVowelCount] = useState(0);

  const handleUpClick = () => {
    // console.log("upper case was clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase","success");
  };
  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  };

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase","success");

  };

  const handleVowClick = () => {
    var counter = 0;
    const vowels = ["a", "e", "i", "o", "u"];

    for (let i = 0; i < text.length; i++) {
      if (vowels.includes(text[i].toLowerCase())) {
        counter++;
      }
    }
    console.log("count=", counter);
    setVowelCount(counter);
    props.showAlert("Vowels counted","success");

  };

  const handleClearClick = () => {
    setText("");
    props.showAlert("textbox cleared","success");

  };

  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("text copied to clipboard","success");

  };

  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("extra space handled","success");

  };

  const handleAlternatingCase = () => {
    let newtext = "";
    for (let index = 0; index < text.length; index++) {
      if (index % 2 === 0) {
        newtext += text[index].toLowerCase();
      } else {
        newtext += text[index].toUpperCase();
      }
    }
    setText(newtext);
    props.showAlert("Alternating upper case ","success");

  };

  const handleReverse = () => {
    let str = text;

    if (!str || str.length < 2 || typeof str !== "string") {
      return;
    }

    const revArray = [];
    const length = str.length - 1;

    for (let i = length; i >= 0; i--) {
      revArray.push(str[i]);
    }

    // Joining the array elements
    setText(revArray.join(""));
    props.showAlert("string reversed","success");

  };

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h4>{props.heading}</h4>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            style={{
              backgroundColor: props.mode === "dark" ? "gray" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            value={text}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleLowClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleVowClick}>
          Check Vowels
        </button>
        <button
          className="btn btn-primary mx-2 my-2"
          onClick={handleClearClick}
        >
          Clear text
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleCopy}>
          Copy text
        </button>
        <button
          className="btn btn-primary mx-2 my-2"
          onClick={handleExtraSpace}
        >
          Remove extra spaces
        </button>
        <button
          className="btn btn-primary mx-2 my-2"
          onClick={handleAlternatingCase}
        >
          Alternate letter capslock
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleReverse}>
          Reverse Text
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:'Enter sth in textbox to see preview here'}</p>
        <p>
          Vowels: {vowelCount} Consonants: {text.length - vowelCount}
        </p>
      </div>
    </>
  );
}
