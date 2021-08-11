import React from "react";
import "./style.scss";

export default function App() {

  
  
  function handler(e){
  const raqamlar = e.target.innerText;
  const maydon =  document.querySelector("#maydon");
  
if(raqamlar == "C"){
  maydon.value = "";
}else if(raqamlar == "="){
   maydon.value = eval(maydon.value);
   
}else{
  maydon.value+=raqamlar ;
  
}



  
 

}



function inputChange(e){
console.log(e)
}

  return (
    <div className="calculator-app">
        <input type="text"  id="maydon" disabled="disabled"/>
        <table onClick={handler}>
          
        <tr>
            <th colspan="2" >C</th>
            <th>/</th>
            <th>*</th>
        </tr>
        

          <tr>
            <th>7</th>
            <th>8</th>
            <th>9</th>
            <th>-</th>
          </tr>

          <tr>
            <th>4</th>
            <th>5</th>
            <th>6</th>
            <th >+</th>
          </tr>
        
          <tr>
            <th>1</th>
            <th>2</th>
            <th>3</th>
            <th rowspan="2">=</th>
          </tr>

          <tr>
            <th>0</th>
            <th>00</th>
            <th>.</th>
           
          </tr>
        
        

        </table>
    </div>
  );
}
