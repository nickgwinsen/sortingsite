async function quickSort(array, left, right){
    let bars = document.getElementsByClassName("bar");
    // console.log(array);
    if(left>right)
        return ;
    let pi = await partition(array, left, right);
    bars[pi].style.backgroundColor='darkseagreen';
    await quickSort(array, left, pi-1); 
    await quickSort(array, pi+1, right);
}

async function partition(array, left, right){
    let bars = document.getElementsByClassName("bar");
    let i=left;
    bars[i].style.backgroundColor='purple';

    // await sleep(speed / numOfBars);
    for(let j=left; j<right; j++){
        bars[j].style.backgroundColor='orange';
        await sleep(speed / numOfBars);
        if(array[j]<array[right]){
            [array[j], array[i]] = [array[i], array[j]];
            swap(bars[j], bars[i]);
            bars[i].style.backgroundColor='firebrick';
            i++;
        }
        bars[j].style.backgroundColor='firebrick';
        bars[i].style.backgroundColor='purple';
    }
    // await sleep(speed / numOfBars);
    [array[i], array[right]] = [array[right], array[i]];
    swap(bars[i], bars[right]);
    return i;
}

function swap(element1, element2){
    let temp = element1.style.height;
    element1.style.height=element2.style.height;
    element2.style.height=temp;
}