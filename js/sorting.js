//randomizes the heights of the arrays
let randomize_array = document.getElementById("randomize-array-button");
let sort_button = document.getElementById("sort-button");
let bars_container = document.getElementById("bars-container");
const select_algo = document.getElementById("menu");
const output = document.getElementById('output');
var slider = document.getElementById("array_size");
let numOfBars = 75;
let speed = (5000);
var active = false;
let min = 1;
let max = 25;
let heightFactor = 20;
let unsorted_array = new Array(numOfBars);

//function that takes a number in milliseconds and uses that to delay animations
function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

//creates random array using the slider value as number of elements
slider.addEventListener("input", function() {
    numOfBars = slider.value;
    bars_container.innerHTML = "";
    unsorted_array = createRandomArray();
    renderBars(unsorted_array);
})

//sets value to whatever the dropdown menu is set to
select_algo.addEventListener("change", function() {
    //get selected value
    const value = this.value;
    //update output element based on selected value
    output.innerHTML = value;
})

//creates a random number between the minimum and maximum
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//creates a random array
function createRandomArray() {
    let array = new Array(numOfBars);
    for(let i = 0; i < numOfBars; i++){
        array[i] = randomNumber(1, max);
    }
    return array;
}

//renders bars so that when page is opened, bars are already set
document.addEventListener("DOMContentLoaded", function () {
    unsorted_array = createRandomArray();
    renderBars(unsorted_array);
});

//renders bars by clearing bars container and adding bar divs depending on how many elements are in the array
function renderBars(array) {
    bars_container.innerHTML = "";
    for (let i = 0; i < array.length; i++) {
        let bar = document.createElement("div");
        bar.classList.add("bar");
        bar.style.height = array[i] * heightFactor + "px";
        bar.style.width = ( 90 / Math.sqrt(numOfBars)) + "px";
        bars_container.appendChild(bar);
    }
}

//when randomize array button is clicked, creates random array and renders bars
randomize_array.addEventListener("click", function() {
    //if sorting algorithm is active, button is disabled
    if (active == true) {
        document.querySelector('#button').disabled = true;
    }
    unsorted_array = createRandomArray();
    console.log(unsorted_array);
    bars_container.innerHTML = "";
    renderBars(unsorted_array);
})

//calls sorting algorithm depending on what dropdown is when sort button is pressed
sort_button.addEventListener("click", async function() {
    let bars = document.getElementsByClassName("bar");
    var test = document.getElementById("menu");
    var value = test.value;
    //can only press sort button if not already sorting something
    if (active == false) {
        //disables randomize button and slider
        active = true;
        slider.disabled = true;
        //calls correct sorting algorithm
        switch(value) {
            case "isort":
                await insertionSort(unsorted_array)
                active = false;
                slider.disabled = false;
                break;
            case "ssort":
                await selectionSort(unsorted_array)
                active = false;
                slider.disabled = false;
                break;
            case "msort":
                await mergeSort(unsorted_array, 0, unsorted_array.length - 1);
                for (let i = 0; i < unsorted_array.length; i++) {
                    bars[i].style.backgroundColor = "darkseagreen";
                    await sleep(30);
                }
                active = false;
                slider.disabled = false;
                break;
            case "qsort":
                await quickSort(unsorted_array, 0, numOfBars - 1); //works, animate
                active = false;
                slider.disabled = false;
                break;
            case "bsort":
                await bubbleSort(unsorted_array)
                active = false;
                slider.disabled = false;
                break;
            case "none":
                console.log("no sort selected");
                active = false;
                slider.disabled = false;
                break;
            case "output":
                console.log("no sort selected");
                active = false;
                slider.disabled = false;
                break;       
        }
    }
})