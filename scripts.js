document.getElementById("testHeading").innerHTML = "Build Your Own Patio";
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
document.getElementById("calculate").addEventListener("click", function () {
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


    // sqFootOfPatio();
    //area = patioLength * patioWidth;
    let patioArea = sqFootOfPatio();
    console.log("this is patioArea :", patioArea);



    function getPaverAmt() {
        // let paverList = document.getElementById("paverSelection");
        document.getElementById("button").addEventListener("click", function () {
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
            console.log("call to get paver amt")
            console.log("result is:", result);
            return numberOfBricks;
        });


    }

    getPaverAmt();


});