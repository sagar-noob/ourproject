import React, {useState} from 'react'

export default function Textform(props) {
    const handleUpClick = ()=>{
        //console.log("uppercase was click" + text);
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleloClick = ()=>{
      //console.log("uppercase was click" + text);
      let newText = text.toLowerCase();
      setText(newText)
  }
  const handleclearClick = ()=>{
    //console.log("uppercase was click" + text);
    let newText ='';
    setText(newText)
  }

    const handleOnChange = (event)=>{
        //console.log("On change");
        setText(event.target.value);
    }
    const[text, setText] = useState('enter text here');
    
  return (
    <>
    <div className="container"> 
        <h2>{props.heading}</h2>
      
<div className="mb-3">
  
  <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="4"></textarea>
</div>
    
    <button className="btn btn-primary" onClick={handleUpClick}>convert to uppercase</button>
    <button className="btn btn-primary mx-3" onClick={handleloClick}>convert to lowercase</button>
    <button className="btn btn-primary mx-3" onClick={handleclearClick}>clear</button>
    </div>
    <div className='container my-3'>
      <h2>your text summary</h2>
      <p>{text.split (" ").length} words and {text.length} character</p>
      <p>{0.008 * text.split (" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}
