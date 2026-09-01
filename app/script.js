import {hide,show} from "./mandisplay.js";
import {getElement, getElementAll} from "./callit.js";

const generateJsonHome = getElement("#generateJsonHome");
const jsonInputPanel = getElement("#jsonInputPanel");
const jsonOutputPanel = getElement("#jsonOutputPanel");
const enterBtn = getElement("#enterBtn");
const submitJson = getElement("#submitJson");
const jsonInput = getElement("#jsonInput");
const warningText = getElement("#warningText");

hide(jsonInputPanel); 
hide(jsonOutputPanel);

enterBtn.onclick = function(){
    hide(generateJsonHome);
    show(jsonInputPanel); 
}

submitJson.onclick = async function(){

    warningText.innerHTML = "";
    warningText.style.color ="red"; 
    const check = await window.pywebview.api.verify_input(jsonInput.value);
    if(check == "False"){
        warningText.textContent = "invalid JSON";  
    }
    else{
        hide(jsonInputPanel); 
        show(jsonOutputPanel); 
    }

    
}