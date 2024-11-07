import React from "react";
import "./Form.css"
import Submit from "./Submit";
import { useState } from "react";

const Form = () => {
    const [code,setCode]= useState("");
    const [originalURL,setOriginalURL]= useState("");
    const [result,setResult]=useState("")
    return (
        <div id="form">
            <h1>Link Shirnker</h1>
            <label htmlFor="inputURL">Long URL:</label>
            <input type="text" id="inputURL" onChange={(e)=>{setOriginalURL(e.target.value)}}/>

            <label htmlFor="codeURL">Enter Short Code:</label>
            <input type="text" id="codeURL" onChange={(e)=>{setCode(e.target.value)}}/>

            <Submit code={code} originalURL={originalURL} setResult={setResult} />
            <label htmlFor="result" className="results">Result:</label>
            <input type="text" id="result" className="results"  disabled={true} value={result}/>


        </div>
    )
}


export default Form