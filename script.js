// collecting form data
function collect() {
    let name = document.querySelector("#name").value;
    let email= document.querySelector("#email").value;
    let id = document.querySelector("#id").value;
    let classs = document.querySelector("#class").value;
    let roll = document.querySelector("#roll").value;
    
    let nameLabel = document.querySelector("#nameLabel");
    let emailLabel = document.querySelector("#emailLabel");
    let idLabel = document.querySelector("#idLabel");
    let classLabel = document.querySelector("#classLabel");
    let rollLabel = document.querySelector("#rollLabel");

    // Reset label colors
    nameLabel.classList.remove("error");
    emailLabel.classList.remove("error");
    idLabel.classList.remove("error");
    classLabel.classList.remove("error");
    rollLabel.classList.remove("error");

    // Validate input fields
    if (name === "" || id === "" || classs === "" || roll === "" || email === "") {
        alert("Please fill all the fields");
        if (name === "") nameLabel.classList.add("error");
        if (email === "") emailLabel.classList.add("error");
        if (id === "") idLabel.classList.add("error");
        if (classs === "") classLabel.classList.add("error");
        if (roll === "") rollLabel.classList.add("error");
        return;
    } else if (name.length < 3 || /\d/.test(name)) {
        alert("Name must be at least 3 characters and cannot contain numbers");
        nameLabel.classList.add("error");
        return;
    }
    else if (email.length < 3 || !/\S+@\S+\.\S+/.test(email)) {
        alert("Email must be at least 3 character and must be valid");
        emailLabel.classList.add("error");
        return;
    }
    else if (id.length < 1) {
        alert("ID must be at least 1 character");
        idLabel.classList.add("error");
        return;
    } else if (classs.length < 1 || /\D/.test(classs)) {
        alert("Class must be at least 1 character and cannot contain letters");
        classLabel.classList.add("error");
        return;
    } else if (roll.length < 1 || /\D/.test(roll)) {
        alert("Roll must be at least 1 character and cannot contain letters");
        rollLabel.classList.add("error");
        return;
    }

    // Preventing Duplicate Entries
    let existingData = JSON.parse(localStorage.getItem("formData")) || [];
    for (let i = 0; i < existingData.length; i++) {
        if (existingData[i].name === name && existingData[i].email === email && existingData[i].id === id && existingData[i].class === classs && existingData[i].roll === roll) {
            alert("Data already exists");
            return;
        }
    }

    // Store data in local storage
    let data = JSON.parse(localStorage.getItem("formData")) || [];

    // Create new entry
    let newData = {
        name: name,
        email: email,
        id: id,
        class: classs,
        roll: roll
    };

    // Add new data to array
    data.push(newData);

    // Store updated data array back in local storage
    localStorage.setItem("formData", JSON.stringify(data));
    console.log(data.length);

    alert("Data added successfully");

    // Clear input fields
    document.querySelector("#name").value = "";
    document.querySelector("#email").value = "";
    document.querySelector("#id").value = "";
    document.querySelector("#class").value = "";
    document.querySelector("#roll").value = "";

    // Update task count
    updateTaskCount();
}

//update task count
function updateTaskCount() {
    let taskcount = document.querySelector("#taskcount");
    let data = JSON.parse(localStorage.getItem("formData")) || [];
    taskcount.innerHTML = data.length;
}
updateTaskCount();

// Add event listeners to remove error class on input
document.querySelector("#name").addEventListener("input", function() {
    let nameLabel = document.querySelector("#nameLabel");
    nameLabel.classList.remove("error");
});
document.querySelector("#email").addEventListener("input", function() {
    let emailLabel = document.querySelector("#emailLabel");
    emailLabel.classList.remove("error");
});
document.querySelector("#id").addEventListener("input", function() {
    let idLabel = document.querySelector("#idLabel");
    idLabel.classList.remove("error");
});
document.querySelector("#class").addEventListener("input", function() {
    let classLabel = document.querySelector("#classLabel");
    classLabel.classList.remove("error");
});
document.querySelector("#roll").addEventListener("input", function() {
    let rollLabel = document.querySelector("#rollLabel");
    rollLabel.classList.remove("error");
});
