// Function to get query parameter by name
function getQueryParam(param) {
    let urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Fetch data from local storage
let data = JSON.parse(localStorage.getItem("formData")) || [];

// Get the index from query parameter
let index = getQueryParam("index");

if (index !== null) {
    index = parseInt(index);
    if (index >= 0 && index < data.length) {
        // Populate form with existing data
        document.querySelector("#name").value = data[index].name;
        document.querySelector("#email").value = data[index].email;
        document.querySelector("#id").value = data[index].id;
        document.querySelector("#class").value = data[index].class;
        document.querySelector("#roll").value = data[index].roll;
    } else {
        alert("Invalid index");
    }
} else {
    alert("No index specified");
}

// Handle form submission
document.querySelector("#editForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting the traditional way

    // Get updated values
    let name = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    let id = document.querySelector("#id").value;
    let classs = document.querySelector("#class").value;
    let roll = document.querySelector("#roll").value;

    // Validate input fields
    if (name === "" || email === "" || id === "" || classs === "" || roll === "") {
        alert("Please fill all the fields");
        return;
    } else if (name.length < 3 || /\d/.test(name)) {
        alert("Name must be at least 3 characters and cannot contain numbers");
        return;
    } else if (email.length < 3 || !/\S+@\S+\.\S+/.test(email)) {
        alert("Email must be at least 3 character and must be valid");
        return;
    }
    else if (id.length < 1) {
        alert("ID must be at least 1 character");
        return;
    } else if (classs.length < 1 || /\D/.test(classs)) {
        alert("Class must be at least 1 character and cannot contain letters");
        return;
    } else if (roll.length < 1 || /\D/.test(roll)) {
        alert("Roll must be at least 1 character and cannot contain letters");
        return;
    }

    // Update data
    data[index] = { name,email, id, class: classs, roll };

    // Save updated data back to local storage
    localStorage.setItem("formData", JSON.stringify(data));

    // Log to console for debugging
    console.log("Updated data: ", data);

    // Redirect to main page or display a success message
    alert("Data updated successfully");
    window.location.href = "../database/data.html"; // Change to your main page if necessary
});
