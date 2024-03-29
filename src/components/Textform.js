import React, { useState } from "react";

export default function Textform(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase!", "success")
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase!", "success")

  };

  const handleCopy = ()=> {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Copied to clipvoard!", "success")

  }

  const handleExtraSpace = ()=> {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra space removed!", "success")

  }

  const handleMatch = () => {
    const names = ['Ansar', 'Anwar'];
    if (names.includes(text)) {
    props.showAlert("Match found!", "success")
    } else {
    props.showAlert("Match not found!", "success")

    }
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");

  return (
    <>
      <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <div className="mb-3">
          <h1>{props.heading}</h1>
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'black'}}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <div className="container1 d-grid">
  <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
    Convert to uppercase
  </button>
  <button disabled={text.length===0} className="btn btn-info mx-1 my-1" onClick={handleLoClick}>
    Convert to lowercase
  </button>
  <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>
    Copy text
  </button>
  <button disabled={text.length===0} className="btn btn-info mx-1 my-1" onClick={handleExtraSpace}>
    Remove extra space
  </button>
  <button disabled={text.length===0} className="btn btn-info mx-1 my-1" onClick={handleMatch}>
    Match with data
  </button>
</div>

      </div>
      <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>Your text summary</h1>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters.</p>

        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes Read.</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
      </div>
    </>
  );
}
