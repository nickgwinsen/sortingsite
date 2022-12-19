
export function insertionSort(array) {
    let i, key, j;
    for (i = 1; i < array.length; i++) {
        key = array[i];
        j = i - 1;

        while (j >= 0 && array[j] > key) {
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = key;
    }
}