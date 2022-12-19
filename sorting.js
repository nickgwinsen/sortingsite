const data = [40,50,60,70,80];
for(let i = 0; i < data.length; i++){
    data[i] = Math.random() * 90 + 10
}
const rects = document.querySelectorAll("rect");
rects.forEach(function(rect, i){
rect.setAttribute("height", data[i]);
});