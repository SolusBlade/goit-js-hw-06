const counter = {
    counterValue: 0,
    increment(){
        this.counterValue += 1;
    },
    decrement(){
        this.counterValue -= 1;
    },
};
const incrementBtn = document.querySelector("[data-action='increment']");
const decrementBtn = document.querySelector("[data-action='decrement']");
const valueRef = document.querySelector("#value");

incrementBtn.addEventListener('click', () => {
    counter.increment();
    valueRef.textContent = counter.counterValue;
});

decrementBtn.addEventListener('click', () => {
    counter.decrement();
    valueRef.textContent = counter.counterValue;
});
// done