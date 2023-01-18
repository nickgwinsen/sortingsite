async function merge(array, left, mid, right) {
    //this allows us to manipulate the bars on the website
    let bars = document.getElementsByClassName("bar");
    //creates additional arrays to store subarrays
    let size1 = mid - left + 1;
    let size2 = right - mid;
    let leftArray = new Array(size1);
    let rightArray = new Array(size2);
    await sleep(speed / numOfBars);

    //colors all selected bars and copies elements of array into leftArray
    for (let i = 0; i < size1; i++) {
        bars[i + left].style.background = "powderblue";
        leftArray[i] = array[i + left];
    }
    //colors all selected bars and copies elements of array into rightArray
    for (let i = 0; i < size2; i++) {
        bars[i + mid + 1].style.backgroundColor = "powderblue";
        rightArray[i] = array[i + mid + 1];
    }

    await sleep(speed / numOfBars);

    //copies elements from two additional arrays depending on which is smaller
    let i = 0, j = 0, k = left;
    while (i < size1 && j < size2) {
        await sleep(speed / numOfBars);
        if (parseInt(leftArray[i]) < parseInt(rightArray[j])) {
            //sets height of bars to correct height
            bars[k].style.height = leftArray[i] * heightFactor + "px";
            array[k] = leftArray[i++];
        } else {
            bars[k].style.height = rightArray[j] * heightFactor + "px";
            array[k] = rightArray[j++];
        }
        //colors bars tan if they have already been dealt with
        bars[k].style.backgroundColor = "tan";
        k++;
    }
    //copies rest of leftArray into array
    while (i < size1) {
        bars[k].style.height = leftArray[i] * heightFactor + "px";
        bars[k].style.background = "tan";
        array[k] = leftArray[i++];
        k++
    }
    //copies rest of rightArray into array
    while (j < size2) {
        bars[k].style.height = rightArray[j] * heightFactor + "px";
        bars[k].style.background = "tan";
        array[k] = rightArray[j++];
        k++
    }
}

async function mergeSort(array, left, right) {
    if (left < right) {
        const mid = left + Math.floor((right-left)/2);
        await mergeSort(array, left, mid);
        await mergeSort(array, mid + 1, right);
        await merge(array, left, mid, right);
    }
}