import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("handleClick Fired");
        let newtext = text.toUpperCase()
        settext(newtext)
        console.log(text)
    }

    const handleLoClick = ()=>{
        console.log("handleClick Fired");
        let newtext = text.toLowerCase()
        settext(newtext)
        console.log(text)
    }
    const handleOnChange = (event)=>{
        console.log("handleClick Fired");
        let storeval = event.target.value
        settext(storeval)
        setchar(storeval.length)
        setnumber(storeval.trim().split(/\s+/).length)
    }

    const handleclearClick = (event)=>{
        console.log("handleClick Fired");
        let storeval = event.target.value
        settext("")
        setchar(0)
        setnumber(0)
    }


    const [text,settext] = useState("Enter text here");
    const [number, setnumber] = useState(0)
    const [char, setchar] = useState(0)

  
    // settext("text updated");

  return (
    <>

<div className="mb-3">
    <center><h1>{props.title}</h1></center>
  <label htmlFor="myBox" className="form-label"></label>
  <textarea className="form-control" id="exampleFormControlTextarea1" value={text} onChange={handleOnChange} rows="8"></textarea>
</div>
<button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>

<button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to LowerCase</button>
<button className="btn btn-primary mx-1" onClick={handleclearClick}>Clear Text</button>


<div className="box">
    <p className='mx-1'>number of words :- {text.split(" ").length}</p>
    <p className='mx-1'>number of charachters :- {text.length}</p>

    <p>Preview :- {text}</p>
</div>

    </>
  )
}
