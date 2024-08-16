// 2. Write a JavaScript function that adds a new item to a list on a webpage when a button is clicked.
// Example: Suppose there is an unordered list (<ul>) and a button on your webpage. When the button is clicked, the function should add a new <li> element to the list.


// Function to add a new car to the list
function addCar() {
    // New <li> element
    let newCar = document.createElement("li");

    // text content to the new <li> element
    newCar.textContent = "New Car";

    // Append the new <li> element to the existing <ul> list
    document.getElementById("carList").appendChild(newCar);
}

// button's click event
document.getElementById("addCarButton").addEventListener("click", addCar);

