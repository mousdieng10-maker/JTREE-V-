import {hide,show} from "./mandisplay.js";
import {getElement, getElementAll} from "./callit.js";
import {createLoader} from "./loading.js";

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

function leaf(){
    const leaf = document.createElement("div");
    leaf.classList.add("leaf"); 
    return leaf; 
}
function column(){
    const side = document.createElement("div");
    side.classList.add("column")
    return side
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
        const betweenLoader = createLoader("10em");
        document.body.appendChild(betweenLoader);

        setTimeout(() =>{
            show(jsonOutputPanel); 
            hide(betweenLoader)
        }, 3000);


    }

    
}