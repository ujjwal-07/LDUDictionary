import React, {useState} from 'react'
import axios, * as others from 'axios';
import { Display, EaselFill } from 'react-bootstrap-icons';
import { FaSearch } from "react-icons/fa";
import "./dictionary.css"

export default function Dictionary(props) {
    const [word,Setword] = useState("")
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
document.getElementById("sanda").style.display = "block"
document.getElementById("sanda2").style.display = "none"
document.getElementById('pid').innerHTML = " "
document.getElementById('pid2').innerHTML = " "
document.getElementById('syn').innerHTML = " "
document.getElementById('ant').innerHTML = " "
let newword = document.getElementById('input').value 
document.getElementById("btn2").style.display = "none"
document.getElementById("btn").style.display = "block"
console.log("newword", newword)
let datanew = axios.get("https://api.dictionaryapi.dev/api/v2/entries/en/"+newword).then(thisdata=>{
    Setdef(" ")
    Setpartofspeech(" ")
    Setpartofspeech2(" ")
    Setpartofspeech3(" ")
    Setmoremeaning(" ")
    Setmoremeaning2(" ")
    document.getElementById('pid').innerHTML = " "
    document.getElementById('pid2').innerHTML = " "
    document.getElementById('syn').innerHTML = " "
    document.getElementById('ant').innerHTML = " "
    document.getElementById("thisid").style.display = "none";
    document.getElementById("ans").style.display = "none";


    let count = 0;
    if(newword == " "){
      throw Error("no word entered")
    }
    if(thisdata.data[0].meanings.length  >= 2){
      document.getElementById("boxin").style.display = "block"
      for(let i=1;i<thisdata.data[0].meanings.length;i++){
        
        if( count == 1){
        document.getElementById('pid').innerHTML = "<h5> <strong>Definition</strong> : "+thisdata.data[0].meanings[i].definitions[0].definition +"</h5><hr /></br>"
        count+=1
    } else{
        document.getElementById('pid2').innerHTML += "<h5> <strong>Definition</strong> : "+thisdata.data[0].meanings[i].definitions[0].definition +"</h5><hr/></br>"

    }
}
}
if(thisdata.data[0].meanings.length <  2){
  document.getElementById("boxin").style.display = "block"
  console.log(thisdata.data[0].meanings.length,"im in side")
  for(let i=1;i<thisdata.data[0].meanings[0].definitions.length;i++){
    if( count == 1){
    document.getElementById('pid').innerHTML = "<h5> <strong>Definition</strong> : "+thisdata.data[0].meanings[0].definitions[i].definition +"</h5><hr /></br>"
    count+=1
} else{
    document.getElementById('pid2').innerHTML += "<h5> <strong>Definition</strong> : "+thisdata.data[0].meanings[0].definitions[i].definition +"</h5><hr/></br>"

}
}





}
function isEmpty(value) {
  return (value == null || (typeof value === "string" && value.trim().length === 0));
}

if(thisdata.data[0].meanings.length > 0){
 let s="",a="";
for(let i=0;i<thisdata.data[0].meanings.length;i++){
  for(let j=0;j<thisdata.data[0].meanings[i].synonyms.length;j++){
    if(thisdata.data[0].meanings[i].synonyms[j] == undefined){

    }
    else{
      console.log("syn data", thisdata.data[0].meanings[i].synonyms[j])
    s += thisdata.data[0].meanings[i].synonyms[j] +" ; "
    }
  }
} 

for(let i=0;i<thisdata.data[0].meanings.length;i++){
  for(let j=0;j<thisdata.data[0].meanings[i].antonyms.length;j++){
    if(thisdata.data[0].meanings[i].antonyms[j]== undefined){

    }else{
      console.log("syn data", thisdata.data[0].meanings[i].antonyms[j])
      a += thisdata.data[0].meanings[i].antonyms[j] +" ; "
    }

} 
}

if(a == undefined){
  document.getElementById('ant').innerHTML += "<h5> No Antonyms Found for "+newword+"</h5><hr/></br>"

}
if (s == undefined){
  document.getElementById('syn').innerHTML += "<h5> No Synonyms Found for "+newword+"</h5><hr/></br>"

}

if(a !== undefined){
  document.getElementById('ant').innerHTML = "<h5> <strong>antonyms</strong> : "+a+"</h5><hr/></br>"

}
if (s !== undefined){
  document.getElementById('syn').innerHTML = "<h5> <strong>synonyms</strong> : "+s+"</h5><hr/></br>"

}

}
     console.log(thisdata.data[0].meanings,"data")
    if(thisdata.data[0].meanings.length  <= 2){
        Setincorrect(" ")
        console.log("data this is in",thisdata.data)
        console.log("Im here")
        // document.getElementById("thisid").style.display = "none";
        Setdef(thisdata.data[0].meanings[0].definitions[0].definition)
        // Setpartofspeech(thisdata.data[0].meanings[0].partOfSpeech)
    
        // Setpartofspeech2(thisdata.data[0].meanings[1].partOfSpeech)
        // Setmoremeaning(thisdata.data[0].meanings[1].definitions[0].definition)
    
        // Setpartofspeech3(thisdata.data[0].meanings[2].partOfSpeech)
        // Setmoremeaning2(thisdata.data[0].meanings[2].definitions[0].definition)

    }


    if(thisdata.data[0].meanings.length  > 2){
    Setincorrect(" ")
    console.log("Im here 2")

    document.getElementById("thisid").style.display = "none";
    console.log("data this is in",thisdata.data)
    Setdef(thisdata.data[0].meanings[0].definitions[0].definition)
    // Setpartofspeech(thisdata.data[0].meanings[0].partOfSpeech)

    // Setpartofspeech2(thisdata.data[0].meanings[1].partOfSpeech)
    // Setmoremeaning(thisdata.data[0].meanings[1].definitions[0].definition)

    // Setpartofspeech3(thisdata.data[0].meanings[2].partOfSpeech)
    // Setmoremeaning2(thisdata.data[0].meanings[2].definitions[0].definition)
    

    }

    // return data.data[0].meanings[0].definitions[1].definition
}).catch(err=>{
  function isEmpty(value) {
    return (value == null || (typeof value === "string" && value.trim().length === 0));
  }
    console.error(err)
    if (isEmpty(newword)){
      document.getElementById("boxin").style.display = "none"
      Setincorrect("Please enter a word")
    }
    else{
      document.getElementById("boxin").style.display = "none"
      Setincorrect(`No Defination Found for ${newword}`)

    }
    document.getElementById('pid').innerHTML = " "
    document.getElementById('pid2').innerHTML = " "
    Setdef(" ")
    Setpartofspeech(" ")

    Setmoremeaning(" ")
    Setmoremeaning2(" ")
})
}

  return (
    <>    
    <br /><br /><br />
    <div className='container'>
        <nav>
        <center><h2><strong>LDU Dictionary</strong></h2></center>

            <br />

            <br/>
<div class="input-group">
  
  <div class="form-outline">
   
    <input type="search"  class="form-control" id="input" value={word} onInput={(e)=>Setword(e.target.value)} placeholder='search word' />
  </div>
  <button   onClick={getinfo} class="btn btn-primary">
< FaSearch/>
  </button>
  
</div>
        </nav>
        <br />
        <center><h1 id='h1'>{incorrect}</h1></center>

        <div id="boxin" style={{display:"block"}}>
  


      
        <center>
            <div className="box">
            <br />
            <h1>Word :<spam className='h1'> {word}</spam></h1>
        <br /><br />
        </div>
        <div id="class" className='class' >
        <p id='pid'></p>

        {/* <h5>Part of Speech : {partofspeech}</h5> */}
        <h5><strong>Definition </strong>: {def}</h5>

<hr />
<div id="thisid" style={{display: "none"}}>
  <hr />
  <h5>More Definitions</h5>
        {/* <h5>Part of Speech : {partofspeech2}</h5> */}
        <p id='pid2'></p>

        {/* <h5>Defination : {moremeaning}</h5> */}
        <hr />

        {/* <h5>Part of Speech : {partofspeech3}</h5> */}
        {/* <h5>Defination : {moremeaning2}</h5> */}
        
        </div>

        </div>
        </center>
        <button id='btn' className='btn btn-primary ' style={{display:"block",marginLeft: "137px;"}} onClick={()=>{document.getElementById("thisid").style.display = "block"; document.getElementById("btn").style.display = "none"; document.getElementById("btn2").style.display = "block"   }}>Show More Meaning</button>

        <button id='btn2' style={{display:"none",marginLeft: "137px;"}}  className='btn btn-primary ' onClick={()=>{document.getElementById("thisid").style.display = "none"; document.getElementById("btn2").style.display = "none"; document.getElementById("btn").style.display = "block"    }}>Show Less</button>
        
        <br />
        <button id='sanda' className='btn btn-success' style={{display:"none"}} onClick={()=>{document.getElementById("ans").style.display="block"; document.getElementById("sanda").style.display = "none";document.getElementById("sanda2").style.display = "block";} }>Get Synonyms and Antonyms</button>
        <button id='sanda2' className='btn btn-success' style={{display:"none"}} onClick={()=>{document.getElementById("ans").style.display="none";document.getElementById("sanda").style.display = "block";document.getElementById("sanda2").style.display = "none";} }>Close</button>

        <center>
        <div id='ans' className="ans" style={{display:"none"}}>
<p id='syn'></p>
<p id='ant'></p>
</div>
</center>
        </div>


    </div>
    </>

  )
}
