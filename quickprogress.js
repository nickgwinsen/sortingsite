async function quickSort(array, left, right){
    let bars = document.getElementsByClassName("bar");
    console.log(array);
    if(left>right)
        return ;
    let pi = await partition(array, left, right);
    bars[pi].style.backgroundColor='purple';
    await quickSort(array, left, pi-1);
    await quickSort(array, pi+1, right);
}

async function partition(array, left, right){
    let bars = document.getElementsByClassName("bar");
    let i=left;
    bars[i].style.backgroundColor='orange';

    await sleep(speed);
    for(let j=left; j<right; j++){
        bars[j].style.backgroundColor='orange';
        await sleep(speed);
        if(array[j]<array[right]){
            await sleep(speed);
            oswap(array[j], array[i]);
            swap(bars[j], bars[i]);
            bars[i].style.backgroundColor='red';
            i++;
        }
        bars[j].style.backgroundColor='red';
        bars[i].style.backgroundColor='blue';
    }
    await sleep(speed);
    oswap(array[i], array[right]);
    swap(bars[i], bars[right]);
    return i;
}

function swap(element1, element2){
    const temp=element1.style.height;
    element1.style.height=element2.style.height;
    element2.style.height=temp;
}
function oswap(element1, element2){
    const temp=element1
    element1=element2
    element2=temp;
}

