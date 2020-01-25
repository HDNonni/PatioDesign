document.getElementById("patioHeading").innerHTML = "Build Your Own Patio";
//TODO: add input for patio sizes 2 inputs for custom size not in select list
// start grid for design purposes
//style page
//make git repo

function resetFields() {
    document.getElementById("resetButton").addEventListener("click", function () {
        document.getElementById("length").value = "";
        document.getElementById("width").value = "";
        document.getElementById("sqFootage").innerHTML = "";
        document.getElementById("paverAmt").innerHTML = "";
        document.getElementById("paverSelection").selectedIndex = 0;
    })
}
resetFields();
//}

function sqFootOfPatio() {

    let patioLength = document.getElementById("length").value;
    let patioWidth = document.getElementById("width").value;
    let area = patioLength * patioWidth;
    //console.log("patio width:", patioWidth);
    //console.log("patio length:", patioLength);
    document.getElementById("sqFootage").innerHTML = "Your Patio Square Footage is: " + area;


    //console.log("the area is: ", area);
    return area;
}


// sqFootOfPatio();
//area = patioLength * patioWidth;
// let patioArea = sqFootOfPatio();
// console.log("this is patioArea :", patioArea);



function getPaverAmt(patioArea) {
    // let paverList = document.getElementById("paverSelection");

    let amt = document.getElementById("paverSelection");
    let result;
    let numberOfBricks;
    // let 
    // TODO change where loop is
    for (let i = 0; i < amt.options.length; i++) {
        // result = amt.options[i].value;
        result = amt.options[amt.selectedIndex].value;
        numberOfBricks = 144 / result * patioArea;
        document.getElementById("paverAmt").innerHTML = "This is how many pavers you will need: " + numberOfBricks;
    }
    return numberOfBricks;


}

// getPaverAmt();


document.getElementById("calculatePaversNeeded").addEventListener("click", function () {
    let patioArea = sqFootOfPatio();

    getPaverAmt(patioArea);
});
document.getElementById("calculatePatioSize").addEventListener("click", function () {
   
    let patioArea = sqFootOfPatio();
    console.log("this is patioArea :", patioArea);

});

const fill = document.querySelector(".fill");
const empties = document.querySelectorAll(".empty");

// fill listeners
fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);
//loop through empties and call drag events
for(const empty of empties){
    empty.addEventListener("dragover",dragOver);
    empty.addEventListener("dragenter",dragEnter);
    empty.addEventListener("dragleave",dragLeave);
    empty.addEventListener("drop",dragDrop);

}

//drag function

function dragStart(){
    console.log("start");
    //this is = to fill element 
    //then use className to append to the 'hold' class
    //?why need skpace before hold?
    this.className += " hold";
    //setTimeout to give a minut amt of time  to drag
    //otherwise the drag itme would just dissapear with click
    setTimeout(() => this.className = " invisible", 0);
}

function dragEnd(){
    this.className = "fill";
    console.log("end");
}

function dragOver(e){
    e.preventDefault();
    console.log("over");
}

function dragEnter(e){
    e.preventDefault();
    this.className += " hovered"
    console.log("enter");
}

function dragLeave(){
    this.className = "empty";
    console.log("leave");
}

function dragDrop(){
    this.className = "empty";
    this.append(fill);
    console.log("drop");
}