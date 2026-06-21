 const countElement = document.getElementById('count');
 const incrementButton = document.getElementById('increment');
 const decrementButton = document.getElementById('decrement');
 const resetButton = document.getElementById('reset');


function counter() {
    let count = 0;
    return {
        increment() {
            count++;
            countElement.textContent = count;
        },
        decrement() {
            count--;
            countElement.textContent = count;
        },
    };
}

const counterInstance = counter();
incrementButton.addEventListener('click', counterInstance.increment);
decrementButton.addEventListener('click', counterInstance.decrement);
resetButton.addEventListener('click', () => {
    countElement.textContent = 0;
}
)




