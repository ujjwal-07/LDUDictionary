import React,{useState} from 'react'

export default function Form(props) {
    function thisfunction(){
        alert(input)
    }
    const [input,setinput] = useState("this is not me")
  return (
    <htmlForm>
        
  <div className="htmlForm-group">
    <h1 >{props.title}</h1>
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="email" className="htmlForm-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
    <small id="emailHelp" className="htmlForm-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="htmlForm-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" className="htmlForm-control" id="exampleInputPassword1" placeholder="Password" />
  </div>
  <div className="htmlForm-check">
    <input type="checkbox" className="htmlForm-check-input" id="exampleCheck1" />
    <label className="htmlForm-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" onClick={thisfunction} className="btn btn-primary">Submit</button>
</htmlForm>
  )
}
