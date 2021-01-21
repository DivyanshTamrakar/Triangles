//Declaration referenece

var inp1 = document.querySelector(".input1");
var inp2 = document.querySelector(".input2");
var inp3 = document.querySelector(".input3");
var checkbtn = document.querySelector(".btn");
var output = document.querySelector(".output")
var outputtext = document.querySelector(".outputtext")
output.style.display = "none";
outputtext.style.display = "none";


// Event Handler

checkbtn.addEventListener("click", ClickHandler)


// function
function ClickHandler() {

    if (inp1.value === "") {
        alert("Input Cant be Empty");
    } else if (inp2.value === "") {
        alert("Input Cant be Empty");
    } else if (inp3.value === "") {
        alert("Input Cant be Empty");
    } else {

        var sum = parseInt(inp1.value) + parseInt(inp2.value) + parseInt(inp3.value);

        if (sum === 180) {
            output.style.display = "block";
            outputtext.innerHTML = '"Yuhu! these angles can make a triangle"'
            outputtext.style.display = "block";

        } else {
            output.style.display = "block";
            outputtext.innerHTML = "Oops!these angles cannot make a triangle"
            outputtext.style.display = "block";

        }
    }


}