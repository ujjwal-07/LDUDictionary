import React, {useState} from 'react'
import axios, * as others from 'axios';
import { Display } from 'react-bootstrap-icons';
import { FaSearch } from "react-icons/fa";
import "./dictionary.css"

export default function Dictionary(props) {
    const [word,Setword] = useState("hello")
    const [def,Setdef] = useState(" ")
    const[incorrect, Setincorrect] = useState("")
    const [partofspeech,Setpartofspeech] = useState(" ")

    const [partofspeech2,Setpartofspeech2] = useState(" ")
    const [moremeaning,Setmoremeaning] = useState(" ")

    const [partofspeech3,Setpartofspeech3] = useState(" ")
    const [moremeaning2,Setmoremeaning2] = useState(" ")
//     let datanew = axios.get("https://api.dictionaryapi.dev/api/v2/entries/en/hello").then(thisdata=>{

//     for(let i=0;i<thisdata.data[0].meanings.length;i++){
//         document.getElementById('pid').innerHTML += thisdata.data[0].meanings[i].definitions[0].definition
//     }

// })
function getinfo(){
let newword = document.getElementById('input').value 
console.log("newword", newword)
let datanew = axios.get("https://api.dictionaryapi.dev/api/v2/entries/en/"+newword).then(thisdata=>{
    Setdef(" ")
    Setpartofspeech(" ")
    Setpartofspeech2(" ")
    Setpartofspeech3(" ")
    Setmoremeaning(" ")
    Setmoremeaning2(" ")
    document.getElementById('pid').innerHTML = " "
    // for(let i=0;i<thisdata.data[0].meanings.length;i++){
    //     document.getElementById('pid').innerHTML += thisdata.data[0].meanings[i].definitions[0].definition +"</br>"
    // }
   
     
    if(thisdata.data[0].meanings.length  < 2){
        document.getElementById("thisid").style.display = "none";
        Setdef(thisdata.data[0].meanings[0].definitions[0].definition)
        Setpartofspeech(thisdata.data[0].meanings[0].partOfSpeech)
    
        Setpartofspeech2(thisdata.data[0].meanings[1].partOfSpeech)
        Setmoremeaning(thisdata.data[0].meanings[0].definitions[1].definition)
    
        Setpartofspeech3(thisdata.data[0].meanings[2].partOfSpeech)
        Setmoremeaning2(thisdata.data[0].meanings[0].definitions[2].definition)
        Setincorrect(" ")    

    }


    if(thisdata.data[0].meanings.length  > 2){
        Setincorrect(" ")
    document.getElementById("thisid").style.display = "none";
    console.log("data this is in",thisdata.data)
    Setdef(thisdata.data[0].meanings[0].definitions[0].definition)
    Setpartofspeech(thisdata.data[0].meanings[0].partOfSpeech)

    // Setpartofspeech2(thisdata.data[0].meanings[1].partOfSpeech)
    Setmoremeaning(thisdata.data[0].meanings[1].definitions[0].definition)

    // Setpartofspeech3(thisdata.data[0].meanings[2].partOfSpeech)
    Setmoremeaning2(thisdata.data[0].meanings[2].definitions[0].definition)
    Setincorrect(" ")
    

    }

    // return data.data[0].meanings[0].definitions[1].definition
}).catch(err=>{
    console.error(err)
    Setincorrect("Incorrect Word")
     Setdef(" ")
    Setpartofspeech(" ")

    Setmoremeaning(" ")
    Setmoremeaning2(" ")
})
}

  return (
    <div className='container'>
        <nav>
            
<div class="input-group">
  
  <div class="form-outline">
   
    <input type="search"  class="form-control" id="input" value={word} onInput={(e)=>Setword(e.target.value)} placeholder='search word' />
  </div>
  <button   onClick={getinfo} class="btn btn-primary">
< FaSearch/>
  </button>
  
</div>
        </nav>
    <center><h1 id='h1'>{incorrect}</h1></center>
  



      
        <center>
        <div className="">
            <p id='pid'></p>
        <h1>Word : {word}</h1>
        
        <h5>Part of Speech : {partofspeech}</h5>
        <h5>Defination : {def}</h5>

<hr />
<div id="thisid" style={{display: "none"}}>
        {/* <h5>Part of Speech : {partofspeech2}</h5> */}
        <h5>Defination : {moremeaning}</h5>
        <hr />

        {/* <h5>Part of Speech : {partofspeech3}</h5> */}
        <h5>Defination : {moremeaning2}</h5>
        
        </div>
        </div>
        </center>
        <button id='btn' className='btn btn-primary ' onClick={()=>{document.getElementById("thisid").style.display = "block"; document.getElementById("btn").style.display = "none"; document.getElementById("btn2").style.display = "block"    }}>Show More Meaning</button>

        <button id='btn2' style={{display:"none"}}  className='btn btn-primary ' onClick={()=>{document.getElementById("thisid").style.display = "none"; document.getElementById("btn2").style.display = "none"; document.getElementById("btn").style.display = "block"     }}>Show Less</button>



    </div>

  )
}
