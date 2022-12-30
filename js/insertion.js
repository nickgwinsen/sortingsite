
async function insertionSort(array) {
    let i, key, j;
    let bars = document.getElementsByClassName("bar");
    for (i = 1; i < array.length; i++) {
        key = array[i];
        j = i - 1;

        while (j >= 0 && array[j] > key) {
            // bars[j].style.height = array[j] * heightFactor + "px";
            // bars[j].style.backgroundColor = "lightgreen";
            // bars[j + 1].style.height = array[j + 1] * heightFactor + "px";
            // bars[j + 1].style.backgroundColor = "firebrick";
            array[j + 1] = array[j];
            j--;
            // await sleep(400);
        }
        // await sleep(400);
        array[j + 1] = key;
    }
    return array;
}