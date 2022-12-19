import { bubbleSort } from "./bubble.js";
import { insertionSort } from "./insertion.js";
import { selectionSort } from "./selectionsort.js";
import { quickSort } from "./quick.js";
// import { partition } from "./quick.js";
// import { swap } from "./quick.js";
// import {merge} from "./merge.js";
import {mergeSort} from "./merge.js";

//randomizes the heights of the arrays
let randomize_array = document.getElementById("randomize-array-button");
let sort_button = document.getElementById("sort-button");
let bars_container = document.getElementById("bars-container");
const select_algo = document.getElementById("menu");
const output = document.getElementById('output');
let numOfBars = 20;
let heightFactor = 6.5;
let unsorted_array = new Array(numOfBars);

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
    for(let i = 0; i < array.length; i++){
        array[i] = randomNumber(1, 20);
    }
    return array;
}

document.addEventListener("DOMContentLoaded", function () {
    unsorted_array = createRandomArray();
    renderBars(unsorted_array);
});

function renderBars(array) {
    for (let i = 0; i < array.length; i++) {
        let bar = document.createElement("div");
        bar.classList.add("bar");
        bar.style.height = array[i] * heightFactor + "px";
        bars_container.appendChild(bar);
    }
}

randomize_array.addEventListener("click", function() {
    unsorted_array = createRandomArray();
    bars_container.innerHTML = "";
    renderBars(unsorted_array);
})

sort_button.addEventListener("click", function() {
    switch(output) {
        case "isort":
            insertionSort(unsorted_array);
            console.log("hello");
            break;
        case "ssort":
            selectionSort(unsorted_array);
            break;
        case "msort":
            mergeSort(unsorted_array);
            break;
        case "qsort":
            quickSort(unsorted_array);
            break;
        default:
            bubbleSort(unsorted_array);
            break;
    }
})