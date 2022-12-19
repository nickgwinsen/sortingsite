
export function swap(items, leftIndex, rightIndex) {
    let temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
}

export function partition( items, left, right) {

    let pivot = items[Math.floor((right + left)/ 2)],
        i = left,
        j = right;

    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }

        while (items[j] > pivot) {
            j--;
        }

        if (i <= j) {
            swap(items, i, j);
            i++;
            j--;
        }
    }

    return i;
}

export function quickSort(items, left, right) {
    let index;

    if (items.length > 1) {
        index = partition(items, left, right);

        if (left < index - 1) {
            quickSort(items, left, index - 1);
        }

        if (index < right) {
            quickSort(items, index, right);
        }
    }

    return items;
}


