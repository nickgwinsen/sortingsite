async function bubbleSort(array){
  let bars = document.getElementsByClassName("bar");
  for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length - i - 1; j++) {
        console.log(array);
        bars[j].style.backgroundColor = "aqua";
        bars[j + 1].style.backgroundColor = "aqua";

        await sleep(300);
        
        if (array[j] > array[j + 1]) {
          let temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
          // bars[j].innerText = array[j];
          // bars[j+1].innerText = array[j+1];
          bars[j].style.height = array[j] * heightFactor + "px";
          bars[j + 1].style.height = array[j + 1] * heightFactor + "px";
        }
        await sleep(300);
        bars[j].style.backgroundColor = "firebrick";
        bars[j+1].style.backgroundColor = "firebrick";
      }
      bars[bars.length - 1 - i].style.backgroundColor = "lightgreen";
      await sleep(300);
  }
  return Promise;
}

//compares in weird way not really accurate the algo 


//solution: 
//bubble sort applies to all no matter what sort is chosen FIXED
