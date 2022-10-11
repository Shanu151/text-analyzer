import React from 'react'
import { useState } from 'react';


export default function States(props) {
  const [text,setText]=useState('');
    const handleUpClick = ()=>{
      if(text===" "){
        alert("Please Enter Some Text--- Convert To UpperCase");
      }
      else{
        let newText= text.toUpperCase();
        setText(newText);
      }
    }
    const handleLoClick = ()=>{
      if(text===" "){
        alert("Please Enter Some Text--- Convert To LowerCase");
      }
      else{
      let newText= text.toLowerCase();
      setText(newText);
      }
  }
  const handleClearClick = ()=>{
    let newText= (" ")
    setText(newText);
  }
  const handleCopyText = ()=>{
    if(text===" "){
      alert("Please Enter Some Text To Copy Text");
    } 
    else{
    var newtext= document.getElementById("mybox");
    newtext.select();
    navigator.clipboard.writeText(newtext.value);
    }
  }
  const handleExtraSpaces =() =>{
    if(text===" "){
      alert("Please Enter Some Text To Remove Extra Spaces");
    }
    else{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
    }
  }
  
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    

  return (
    <>
    <div className='container'>
      <h2 className={`text-${props.mode==='light'?'black':'white'}`}>{props.heading}</h2>
    <div className="container mb-3" >
      <textarea className="form-control mb-3" value={text} style={{backgroundColor:props.mode==='dark'?'rgba(50, 55, 60, 0.10)':'white',color:props.mode==='dark'?'white':'black'}}   onChange={handleOnChange} id="mybox" rows="8"></textarea>
    </div>
      <button className="btn btn-primary mx-1 ml-3" onClick={handleUpClick}>Convert to UPPERCASE</button>
      <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to lowercase</button>
      <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
      <button className="btn btn-primary mx-1" onClick={handleCopyText}>Copy Text</button>
      <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
      </div>
      <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>Your Text summary</h2>
        <p>{text.split(" ").filter((element)=>{return element.length!=0}).length} Words and {text.length} Characters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!=0}).length} Minutes to Read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  )
}
