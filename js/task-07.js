const textInput = document.querySelector("#font-size-control");
const span = document.querySelector("#text");

textInput.addEventListener('input', onInputChange);
function onInputChange(event){
    span.style.fontSize = `${event.currentTarget.value}px`;
}
// done
    

