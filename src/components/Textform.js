import React,{useState} from 'react'

export default function Textform(props) {
    const handleUpClick =()=>{
        //console.log("Uppercase was clicked" +text);
        let newText =text.toUpperCase();
        setText(newText);
        props.showAlert('converted to uppercase','sucess')
    }
    const handleClClick =()=>{
        //console.log("Uppercase was clicked" +text);
        let newText ='';
        setText(newText);
        props.showAlert('text is been clear','sucess')
    }
    
        const handleLoClick =()=>{
            //console.log("Uppercase was clicked" +text);
            let newText =text.toLowerCase();
            setText(newText);
            props.showAlert('converted to lowecase','sucess')
    }
    const handleOnChange =()=>{
        //console.log("On change");
        setText(Event.target.value)
    }
    const [text, setText] = useState('enter something there');
    //setText("new text");
  return (
    <>
    <div className='container'>
        <h1>{props.heading} </h1>
      <div className="mb-3">
         <textarea className="form-control" value={text}  onChange={handleOnChange} id="myBox" rows="8"></textarea>
     </div>
     <button className="btn btn-primary mx-2 my-1"onClick={handleUpClick}>Convert to Upper case</button>
     <button className="btn btn-primary mx-2 my1"onClick={handleLoClick}>Convert to Lower case</button>
     <button className="btn btn-primary mx-2 my1"onClick={handleClClick}>Clear text</button>
    </div>
    <div className="container my-3">
        <h2>
            Your text summery
        </h2>
        <p>
            {text.split(" ").filter((element)=>{return element.lenght!=0}).length} words,{text.length} charecters
        
        </p>
        <p>{0.008*text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
  }
