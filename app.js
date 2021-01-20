//Declaration referenece

var inp1 = document.querySelector(".input1");
var inp2 = document.querySelector(".input2");
var inp3 = document.querySelector(".input3");
var checkbtn = document.querySelector(".btn");



// Event Handler

checkbtn.addEventListener("click", ClickHandler)


// function
function ClickHandler() {

    var sum = parseInt(inp1.value) + parseInt(inp2.value) + parseInt(inp3.value);

    if (sum === 180) {
        console.log("Yuhu! these angles can make a triangle");
    } else {
        console.log("Oops! these angles cannot make a triangle");
    }

}