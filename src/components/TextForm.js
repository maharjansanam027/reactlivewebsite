import React, {useState} from 'react'

export default function TextForm(props) {

  const handleOnChange=(event)=>{
    console.log("On change");
    setText(event.target.value)
  }

  const handleOnClick=()=>{
    console.log("Uppercase clicked");
    let letter=text.toUpperCase();
    setText(letter);
    props.alert("uppercase clicked","success");
  }
  const handleLowClick=()=>{
    // console.log("Uppercase clicked");
    let letter=text.toLowerCase();
    setText(letter);
    props.alert("lowercase clicked","success");
  }
  const clearText=()=>{
    let letter='';
    setText(letter);
    props.alert("Text Clered","success");
  }
  const capitalize = () => {    
    var element = document.getElementById("myBox");
        element.style.textDecoration = "underline";
  }
  const removeSpaces=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
    props.alert("Extra space Removed","success");
  }

  const [text, setText] = useState("Enter text here");
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} style={{backgroundColor:props.mode==='dark'?'#002345':'white',color:props.mode==='dark'?'white':'black'}} id="myBox" onChange={handleOnChange} rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-2" onClick={handleOnClick}>Click for uppercase</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleLowClick}>Click for Lowercase</button>
        <button className="btn btn-primary mx-2 my-2" onClick={clearText}>Clear text</button>
        <button className="btn btn-primary mx-2 my-2" onClick={capitalize}>underline text</button>
        <button className="btn btn-primary mx-2 my-2" onClick={removeSpaces}>Remove extraspaces</button>
    </div>
    <div className="container my-4" style={{color:props.mode==='dark'?'white':'black'}}>
      <h2>Your text summury</h2>
      <p>{text.split(' ').length} words and {text.length} characters</p>
      <p>{0.008 * text.split(' ').length} minuts read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:'enter some text to preview'}</p>
    </div>
    </>
  )
}
