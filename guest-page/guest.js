function getData()
{
    const apiUrl = 'https://userlogindataservice1.onrender.com/mockUserData';

    // Fetch data from the JSON server
    fetch(apiUrl)
        .then(response => {
            // Check if the request was successful (status code 200)
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            // Parse the JSON response
            return response.json();
        })
        .then(data => {
            // Handle the retrieved data
            console.log('Data from JSON server:', data);

            // Now you can use the 'data' variable to work with the JSON data
            // For example, you can iterate through the data and display it on the webpage
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}