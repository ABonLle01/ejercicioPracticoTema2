document.querySelector("button#enter").addEventListener('click', ()=>{
    document.querySelector("section#formulario").classList.add("show");
});

document.querySelector("button#close").addEventListener('click', ()=>{
    document.querySelector("section#formulario").classList.remove("show");
});