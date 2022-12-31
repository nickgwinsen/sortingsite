async function selectionSort(arr) {
    let bars = document.getElementsByClassName("bar");
    for (var i = 0; i < arr.length; i++) {
        let min = i;
        let prevMin = 0;
        await sleep(speed);
        bars[min].style.backgroundColor = "aqua";
        await sleep(220);
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[min] > arr[j]) {
                prevMin = min;
                min = j;
            }
        }
        if (i != min) {
            bars[min].style.backgroundColor = "aqua";
            await sleep(400);
            [arr[ i ],arr[min]]= [arr[min],arr[ i ]];
            bars[min].style.height = arr[min] * heightFactor + "px";
            bars[i].style.height = arr[i] * heightFactor + "px";
            await sleep(400);
            bars[i].style.backgroundColor = "lightgreen";
            bars[min].style.backgroundColor = "firebrick";
            await sleep(speed);
        }
        bars[i].style.backgroundColor = "lightgreen";
    }
    for(let i = 0; i < arr.length; i++){
        bars[i].style.backgroundColor = "lightgreen";
        await sleep(100);
    }
    return Promise;
}

