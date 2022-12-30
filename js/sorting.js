//randomizes the heights of the arrays
let randomize_array = document.getElementById("randomize-array-button");
let sort_button = document.getElementById("sort-button");
let bars_container = document.getElementById("bars-container");
const select_algo = document.getElementById("menu");
const output = document.getElementById('output');
var slider = document.getElementById("array_size");
let numOfBars = 50;
var active = false;
let min = 1;
let max = 25;
let heightFactor = 20;
let unsorted_array = new Array(numOfBars);

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

slider.addEventListener("input", function() {
    numOfBars = slider.value;
    // max = 25;
    bars_container.innerHTML = "";
    unsorted_array = createRandomArray();
    renderBars(unsorted_array);
})

select_algo.addEventListener("change", function() {
    //get selected value
    const value = this.value;
    //update output element based on selected value
    output.innerHTML = value;
})

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function createRandomArray() {
    let array = new Array(numOfBars);
    for(let i = 0; i < numOfBars; i++){
        array[i] = randomNumber(1, max);
    }
    return array;
}

document.addEventListener("DOMContentLoaded", function () {
    unsorted_array = createRandomArray();
    renderBars(unsorted_array);
});

function renderBars(array) { //bars face the correct direction if bubble sort is performed first. If a different sort is performed first, they are backwards.
    bars_container.innerHTML = "";
    for (let i = 0; i < array.length; i++) {
        let bar = document.createElement("div");
        bar.classList.add("bar");
        bar.style.height = array[i] * heightFactor + "px";
        bar.style.width = ( 90 / Math.sqrt(numOfBars)) + "px";
        bars_container.appendChild(bar);
    }
}

randomize_array.addEventListener("click", function() { //figure out a way to end sorts are clicked.
    if (active == true) {
        document.querySelector('#button').disabled = true;
    }
    unsorted_array = createRandomArray();
    console.log(unsorted_array);
    bars_container.innerHTML = "";
    renderBars(unsorted_array);
})

sort_button.addEventListener("click", function() {
    var test = document.getElementById("menu");
    console.log(test);
    var value = test.value;
    if (active == false) {
        //unlikely issue: if the array GETS sorted but is not displayed as so, the animation will break.
        switch(value) {
            case "isort":
                renderBars(insertionSort(unsorted_array)); //working, animate
                break;
            case "ssort":
                active = true;
                slider.disabled = true;
                selectionSort(unsorted_array).then(response => {
                    active = false;
                    slider.disabled = false;
                }) //working, animate
                break;
            case "msort":
                renderBars(mergeSort(unsorted_array)); //works, animate
                break;
            case "qsort":
                renderBars(quickSort(unsorted_array, 0, numOfBars - 1)); //works, animate
                break;
            case "bsort":
                active = true;
                slider.disabled = true;
                //document.getElementById('bars-container').style.transform = 'scaleY(-1)';
                bubbleSort(unsorted_array).then(response => { //breaks when you perform other sorts, namely insertion
                    active = false;
                    slider.disabled = false;
                }); //finished
                break;
            case "none":
                console.log("no sort selected");
                break;
            case "output":
                console.log("no sort selected");
                break;       
        }
    }
})