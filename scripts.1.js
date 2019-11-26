document.getElementById("testHeading").innerHTML = "Build Your Own Patio";


function sqFootOfPatio() {

    let patioLength = document.getElementById("length").value;
    let patioWidth = document.getElementById("width").value;
    let area = patioLength * patioWidth;
    console.log("patio width:", patioWidth);
    console.log("patio length:", patioLength);
    document.getElementById("sqFootage").innerHTML = "Your Patio Square Footage is: " + area;


    console.log("the area is: ", area);
    return area;
}

function getPaverAmt(patioArea) { 
    let amt = document.getElementById("paverSelection");
    let result;

    let numberOfBricks;
    
    for (let i = 0; i < amt.options.length; i++) {
        
        result = amt.options[amt.selectedIndex].value;
        numberOfBricks = 144 / result * patioArea;
        document.getElementById("paverAmt").innerHTML = "This is how many pavers you will need: " + numberOfBricks;
    }
    console.log("call to get paver amt")
    console.log("result is:", result);
    return numberOfBricks;

}

document.getElementById("button").addEventListener("click", function () {
    let patioArea = sqFootOfPatio();

    getPaverAmt(patioArea);
});

document.getElementById("calculate").addEventListener("click", function () {
   
    let patioArea = sqFootOfPatio();
    console.log("this is patioArea :", patioArea);

});