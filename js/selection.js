async function selectionSort(arr) {
    let bars = document.getElementsByClassName("bar");
    for (var i = 0; i < arr.length; i++) {
        let min = i;
        for (var j = i + 1; j < arr.length; j++) {
            bars[j].style.backgroundColor = "aqua";
            bars[j+1].style.backgroundColor = "aqua";
            await sleep(300);
            if (arr[min] > arr[j]) {
                min = j;
                //display min under j th element
            }
        }
        if (i != min) {
            bars[min].style.backgroundColor = "aqua";
            bars[i].style.backgroundColor= "aqua";
            [arr[ i ],arr[min]]= [arr[min],arr[ i ]];
            bars[min].style.height = array[i] * heightFactor +  "px";
            bars[i].style.height = array[min] * heightFactpr + "px";
            //animate these two elements swapping in the list
            bars[j].style.backgroundColor = "firebrick";
            bars[j+1].style.backgroundColor = "firebrick";
        }
        bars[min].style.backgroundColor = "lightgreen"
        await sleep(300);
    }
    return Promise;
}


//keep track of min
//move min to arr[0]

