// Fetch data from local storage
let data = JSON.parse(localStorage.getItem("formData")) || [];

// Display data in table
function displayData() {
  let tbody = document.querySelector("#tbody");
  tbody.innerHTML = "";

  data.forEach((entry, index) => {
    let row = document.createElement("tr");

    row.innerHTML = `
            <td>${entry.name}</td>
            <td>${entry.email}</td>
            <td>${entry.id}</td>
            <td>${entry.class}</td>
            <td>${entry.roll}</td>
            <td><a href="#" onclick="editData(${index})"><lord-icon
    src="https://cdn.lordicon.com/zfzufhzk.json"
    trigger="hover"
</lord-icon></a></td>
            <td><a href="#" onclick="deleteData(${index})"><lord-icon
    src="https://cdn.lordicon.com/xekbkxul.json"
    trigger="hover"
</lord-icon></a></td>
        `;

    tbody.appendChild(row);
  });
}

// Edit data function
function editData(index) {
  window.location.href = `../edit/edit.html?index=${index}`;
}

// Delete data function
function deleteData(index) {
  if (confirm("Are you sure you want to delete this entry?")) {
    data.splice(index, 1);
    localStorage.setItem("formData", JSON.stringify(data));
    displayData();
  }
}

// Back button function
function back() {
  let back = document.querySelector(".back");
  back.addEventListener("click", () => {
    window.location.href = "../index.html";
  });
}
back();

// Call displayData to show data when the page loads
document.addEventListener("DOMContentLoaded", displayData);
