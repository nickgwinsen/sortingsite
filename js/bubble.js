async function bubbleSort(array){
    //this allows us to manipulate the bars on the website
    let bars = document.getElementsByClassName("bar");
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
          //colors the two bars that are being compared
          bars[j].style.backgroundColor = "powderblue";
          bars[j + 1].style.backgroundColor = "powderblue";

          await sleep(speed / numOfBars);
          
          //swaps two elements in the array and bars on the screen if the first one is larger than the second
          if (array[j] > array[j + 1]) {
            let temp = array[j];
            array[j] = array[j + 1];
            array[j + 1] = temp;
            bars[j].style.height = array[j] * heightFactor + "px";
            bars[j + 1].style.height = array[j + 1] * heightFactor + "px";
          }
          await sleep(speed / numOfBars);
          //changes colors back to original
          bars[j].style.backgroundColor = "firebrick";
          bars[j+1].style.backgroundColor = "firebrick";
        }
        //changes color of last element to show that the element is in correct position
        bars[bars.length - 1 - i].style.backgroundColor = "darkseagreen";
        await sleep(speed / numOfBars);
    }
}
