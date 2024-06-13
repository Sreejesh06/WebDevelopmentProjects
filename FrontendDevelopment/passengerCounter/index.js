let count = 0;
let htmlNum = document.getElementById("num")
let save = document.getElementById("save")

function Increment() {

    count++;

    htmlNum.textContent = count; //innertext can also be used

    console.log("It is clicked " + count + " times");
}



function Save() {
    console.log("save function is callled");



    let countStr = count + " -";
    save.textContent += countStr;
    count = 0;
    htmlNum.innerText = count;

}