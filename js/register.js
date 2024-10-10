// JavaScript to handle the API request
document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();  // Prevent the default form submission

    // Get the form data
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const gender = document.querySelector('input[name="gender"]:checked').value;

    // Clear previous result message
    const resultElement = document.getElementById('result');
    resultElement.innerText = '';

    // Check if password and confirm password match
    if (password !== confirmPassword) {
        resultElement.innerText = 'Passwords do not match!';
        return;
    }

    // Prepare the data object to send to the API
    const data = {
        email: email,
        password: password,
        name: name,
        gender: JSON.parse(gender),  // Parse the gender string into a boolean
        phone: phone
    };

    // Send the POST request to the API
    fetch('https://shop.cyberlearn.vn/api/Users/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (!response.ok) {
            // Check for HTTP errors
            return response.json().then(error => {
                throw new Error(error.message || 'Signup failed');
            });
        }
        return response.json();
    })
    .then(result => {
        if (result.data && result.data.content) {
            // Display the success response content
            resultElement.innerText = `Response: ${JSON.stringify(result.data.content)}`;

            // Reset form fields on success
            document.getElementById('signupForm').reset();
        } else {
            // Handle cases where no valid data is returned
            resultElement.innerText = `Error: ${result.message || 'Unknown error occurred'}`;
        }
    })
    .catch(error => {
        // Handle network or parsing errors
        resultElement.innerText = `Error: ${error.message || 'An unexpected error occurred'}`;
    });
});
