async function showStudents() {
    try {
        const response = await fetch("http://localhost:3000/");

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        const domElement = document.getElementById("showStudents");
        let studentString = "----Student DataBase----";

        data.forEach((element) => {
            studentString = studentString + `<li>StdId : ${element.stdId} || Name : ${element.name} || Email : ${element.email} || Gender : ${element.gender} || Std_Pic : ${element.image} || Study_Program : ${element.study_program} || Year_of_Study : ${element.year_of_study}</li><br>`;
        });

        studentString = studentString + "----------------";
        domElement.innerHTML = studentString;
    } catch (error) {
        console.error("Error fetching students:", error);
        document.getElementById("showStudents").innerHTML =
            "<p style='color:red;'>Error loading students. Please try again later.</p>";
    }
}

showStudents();
~
$("#addBtw").click(function () {
    var stdId = document.getElementById("stdId").value;
    var name = document.getElementById("name").value;
    $.post("http://localhost:3000/", {stdId, name}, function(data, status){
        console.log(data + status);
    });
})

// document.getElementById("addStudent").addEventListener("submit", async (event) => {
//     event.preventDefault();

//     var stdId = document.getElementById("stdId").value;
//     var name = document.getElementById("name").value;
//     var email = document.getElementById("email").value;
//     var gender = document.querySelector("input[name=gender]:checked").value;
//     var image = document.getElementById("image").value;
//     var study_program = document.getElementById("study_program").value;
//     var year_of_study = document.getElementById("year_of_study").value;
    
//     try {
//         const response = await fetch("http://localhost:3000/", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify({ stdId, name, email, gender, image, study_program, year_of_study }),
//         });

//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }

//         console.log("Form submitted successfully!");

//         await showStudents();

//         document.getElementById("addStudent").reset();

//     } catch (error) {
//         console.error("Error submitting form:", error);
//     }
// });

document.getElementById("deleteStudent").addEventListener("submit", async (event) => {
    event.preventDefault();

    var stdId = document.getElementById("deleteId").value;

    try {
        const response = await fetch("http://localhost:3000/", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({stdId}),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        console.log("Student deleted successfully!");

        await showStudents();

        document.getElementById("deleteStudent").reset();
    } catch (error) {
        console.error("Error submitting form:", error);
    }
});

document.getElementById("updateStudent").addEventListener("submit", async (event) => {
    event.preventDefault();

    var updateId = document.getElementById("updateId").value;
    var name = document.getElementById("updateName").value;

    try {
        const response = await fetch("http://localhost:3000/", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({updateId, name}),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        console.log("Student updated successfully!");

        await showStudents();

        document.getElementById("updateStudent").reset();
    } catch (error) {
        console.error("Error submitting form:", error);
    }
});
