const textInput = document.querySelector("#validation-input");


textInput.addEventListener("blur", () => {
  // if(textInput.value.length < textInput.dataset.length){
    if(textInput.value.length < 6){
      textInput.classList.remove('valid');
      textInput.classList.add('invalid');
    } else {
      textInput.classList.remove('invalid');
      textInput.classList.add('valid');
    }
  });
  // done