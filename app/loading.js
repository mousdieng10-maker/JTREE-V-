

function createLoader(width){
    const loader = document.createElement("div");
    loader.className = "loader";
    loader.style.width = width; 
    loader.style.height = width; 
    return loader

}

export {createLoader}