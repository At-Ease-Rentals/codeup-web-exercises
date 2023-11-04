let flavor = prompt ("Welcome to Codeup Ice Cream! What flavor do you want?");
/*
if (flavor === "chocolate") {
    alert (`One ${flavor}  ice cream coming right up!`)
} else if (flavor === "vanilla") {
    alert("One vanilla ic cream coming right up!")
} else {
    alert("Sorry, we don't have that flavor")
}
*/

switch (flavor) {
    case("chocolate"):
        alert("One chocolate coming right up!");
        break;
    case("vanilla"):
         alert("One vanilla coming right up!");
         break;
    case("strawberry"):
            alert("One strawberry coming right up!");
            break;
    default:
            alert("We do not have that flavor!");
            break;
}