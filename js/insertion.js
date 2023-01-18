async function insertionSort(inputArr) {
    let n = inputArr.length;
    //this allows us to manipulate the bars on the website
    let bars = document.getElementsByClassName("bar");
        for (let i = 1; i < n; i++) {
            // Choosing the first element in our unsorted subarray
            let current = inputArr[i];
            // The last element of our sorted subarray
            let j = i-1; 
            bars[i].style.backgroundColor = "powderblue";
            await sleep(speed / numOfBars);
            //moves the chosen bar and array element left in array until element before it is smaller
            while ((j > -1) && (current < inputArr[j])) {
                let temp = inputArr[j];
                inputArr[j] = inputArr[j+1];
                inputArr[j+1] = temp;
                bars[j].style.height = inputArr[j] * heightFactor + "px";
                bars[j + 1].style.height = inputArr[j + 1] * heightFactor + "px";
                bars[j].style.backgroundColor = "powderblue";
                bars[j + 1].style.backgroundColor = "firebrick";
                j--;
                await sleep(speed / numOfBars);
            }
            //changes all bars colors back to original
            for (let k = 0; k < inputArr.length; k++) {
                bars[k].style.backgroundColor = "firebrick";
            }
            await sleep(speed / numOfBars);
            inputArr[j+1] = current;
        }
        //shows that all elements are in sorted order
        for (let i = 0; i < inputArr.length; i++) {
            bars[i].style.backgroundColor = "darkseagreen";
            await sleep(30);
        }
}