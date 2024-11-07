import React from "react";
import "./Submit.css"
import { useState } from "react";
const dataBase={
    codes:["sad","happy","mad"],
    URLs:["google.com","github.com","cpit405.github.io"],
    shortURLs:["http://hamzazain.me/google","http://hamzazain.me/github","http://hamzazain.me/cpit405"]
}
const Submit = ({code,originalURL,setResult})=>{
    
const handleSubmit= function(){
    console.log(code)
    console.log(originalURL)
    let shortURL=""
    if(!dataBase.codes.includes(code)){
         shortURL="http://hamzazain.me/"+code
    }
    else{
        let codeValue=""
        while(true){
            codeValue=Math.random().toString(36).substring(2,7)
            if(!dataBase.codes.includes(codeValue)){
                break;
            }
        }
        shortURL="http://hamzazain.me/" + codeValue
    }
    dataBase.URLs.push(originalURL)
    dataBase.shortURLs.push(shortURL)
    setResult(shortURL)

}

    return(
        <div id="buttonDIV">
        <button onClick={handleSubmit}>Shorten</button >
        </div>
    )
}

export default Submit