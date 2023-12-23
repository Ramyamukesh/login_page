

document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get form values
    var itemName = document.getElementById('itemName').value;
    var description = document.getElementById('description').value;

    // Simulate submitting data to the server (replace with actual API call)
    var appraisalData = {
        itemName: itemName,
        description: description
        // Add more fields as needed
    };

    // Display results (replace with actual logic)
    displayAppraisalResults(appraisalData);
});

function displayAppraisalResults(data) {
    var resultsSection = document.getElementById('login-results');

    // Clear previous results
    resultsSection.innerHTML = '';

    // Create result elements
    var resultHeading = document.createElement('h2');
    resultHeading.textContent = 'login Results';

    var resultDetails = document.createElement('p');
    resultDetails.textContent = `Item Name: ${data.itemName}\nDescription: ${data.description}`;
    // Add more details as needed

    // Append elements to the results section
    resultsSection.appendChild(resultHeading);
    resultsSection.appendChild(resultDetails);
}
