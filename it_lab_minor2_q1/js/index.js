// Add event listener to the form submit event
document.getElementById("post").addEventListener("submit", async (event) => {
    event.preventDefault(); // Prevent the default form submission

    // Get form data
    const name = document.getElementById("name").value;
    const quote = document.getElementById("quote").value;

    try {
        // Submit the form data to the server
        const response = await fetch("http://localhost:3000/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, quote }), // Send data as JSON
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        console.log("Form submitted successfully!");

        // Update the DOM by fetching the updated list of quotes
        await showQuote();

        // Optionally clear the form inputs
        document.getElementById("post").reset();
    } catch (error) {
        console.error("Error submitting form:", error);
    }
});

// Add event listener to the update submit event
document.getElementById("update").addEventListener("submit", async (event) => {
    event.preventDefault(); // Prevent the default form submission

    try {
        //Update data to the server
        const response = await fetch("http://localhost:3000/", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(), // Send data as JSON
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        console.log("Quote replaced successfully!");

        // Update the DOM by fetching the updated list of quotes
        await showQuote();

        // Optionally clear the form inputs
        document.getElementById("update").reset();
    } catch (error) {
        console.error("Error submitting form:", error);
    }
});

// Add event listener to the delete submit event
document.getElementById("delete").addEventListener("submit", async (event) => {
    event.preventDefault(); // Prevent the default form submission

    try {
        //Delete data to the server
        const response = await fetch("http://localhost:3000/", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(), // Send data as JSON
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        console.log("Quote replaced successfully!");

        // Update the DOM by fetching the updated list of quotes
        await showQuote();

        // Optionally clear the form inputs
        document.getElementById("delete").reset();
    } catch (error) {
        console.error("Error submitting form:", error);
    }
});

// Function to fetch and display quotes
async function showQuote() {
    try {
        const response = await fetch("http://localhost:3000/");
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        const g = document.getElementById("show-quotes");
        let quotesHtml = "";

        data.forEach((element) => {
            quotesHtml += `${element.name} : ${element.quote}<br>`;
        });

        g.innerHTML = quotesHtml;
    } catch (error) {
        console.error("Error fetching quotes:", error);
        document.getElementById("show-quotes").innerHTML =
            "<p style='color:red;'>Error loading quotes. Please try again later.</p>";
    }
}

// Load quotes when the page loads
showQuote();
