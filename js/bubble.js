async function bubbleSort(array){
    console.log(array);
    let bars = document.getElementsByClassName("bar");
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
          if (array[j] > array[j + 1]) {
            for (let k = 0; k < bars.length; k++) {
              if (k !== j && k !== j + 1) {
                bars[k].style.backgroundColor = "firebrick";
              }
            }
            let temp = array[j];
            array[j] = array[j + 1];
            array[j + 1] = temp;
            bars[j].style.height = array[j] * heightFactor + "px";
            bars[j].style.backgroundColor = "lightgreen";
            bars[j + 1].style.height = array[j + 1] * heightFactor + "px";
            bars[j + 1].style.backgroundColor = "lightgreen";
            await sleep(200);
          }
        }
        await sleep(200);
    }
    for(let i = 0; i<bars.length; i++){
        bars[i].style.backgroundColor = "lightgreen";
    }
    console.log(array);
    return Promise;
}

//compares in weird way not really accurate the algo 


//solution: 
//bubble sort applies to all no matter what sort is chosen FIXED
