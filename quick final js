async function quickSort(array, left, right){
    let bars = document.getElementsByClassName("bar");
    console.log(array);
    if(left>right)
        return ;
    let pi = await partition(array, left, right);
    bars[pi].style.backgroundColor='lightgreen';
    await quickSort(array, left, pi-1); 
    await quickSort(array, pi+1, right);
}

async function partition(array, left, right){
    let bars = document.getElementsByClassName("bar");
    let i=left;
    bars[i].style.backgroundColor='purple';

    await sleep(175);
    for(let j=left; j<right; j++){
        bars[j].style.backgroundColor='orange';
        await sleep(175);
        if(array[j]<array[right]){
            await sleep(175);
            [array[j], array[i]] = [array[i], array[j]];
            let temp = bars[j].style.height;
            bars[j].style.height = bars[i].style.height;
            bars[i].style.height = temp;
            bars[i].style.backgroundColor='red';
            i++;
        }
        bars[j].style.backgroundColor='red';
        bars[i].style.backgroundColor='purple';
    }
    await sleep(175);
    [array[i], array[right]] = [array[right], array[i]];
    let temp = bars[i].style.height;
    bars[i].style.height = bars[right].style.height;
    bars[right].style.height = temp;
    return i;
}

function swap(element1, element2){
    let temp = element1.style.height;
    element1.style.height=element2.style.height;
    element2.style.height=temp;
}
