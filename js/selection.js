async function selectionSort(arr) {
    //this allows us to manipulate the bars on the website
    let bars = document.getElementsByClassName("bar");
    for (var i = 0; i < arr.length; i++) {
        //setting minimums
        let min = i;
        let prevMin = 0;
        await sleep(speed / numOfBars);
        //sets color of bar being compared
        bars[min].style.backgroundColor = "powderblue";
        await sleep(speed / numOfBars);
        //searches through array to find absolute minimum
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[min] > arr[j]) {
                prevMin = min;
                min = j;
            }
        }
        //swaps bars and array elements if bar being compared is not also the absolute minimum
        if (i != min) {
            bars[min].style.backgroundColor = "powderblue";
            await sleep(speed / numOfBars);
            [arr[ i ],arr[min]]= [arr[min],arr[ i ]];
            bars[min].style.height = arr[min] * heightFactor + "px";
            bars[i].style.height = arr[i] * heightFactor + "px";
            await sleep(speed / numOfBars);
            bars[i].style.backgroundColor = "darkseagreen";
            bars[min].style.backgroundColor = "firebrick";
            await sleep(speed / numOfBars);
        }
        //sets color if there is no swap to show correct placement
        bars[i].style.backgroundColor = "darkseagreen";
    }
}

