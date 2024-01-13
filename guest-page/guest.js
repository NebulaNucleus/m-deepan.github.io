function getNews() {
    const apiUrl = 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=a1b3eef508c84f419e9d8ad281010b26';

    // Fetch data from the JSON server
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            // Handle the retrieved data
            console.log('Data from JSON server:', data);

            // Access the articles array in the JSON data
            const articles = data.articles;

            // Get the container element in your HTML where you want to display the news
            const newsContainer = document.getElementById('newsContainer');

            // Iterate through each article and create HTML elements for display
            articles.forEach(article => {
                // Create HTML elements for each article
                const articleElement = document.createElement('div');
                articleElement.classList.add('article'); // Add a class for styling, if needed
                articleElement.innerHTML = `
                    <h3>${article.title}</h3>
                    <p>${article.description}</p>
                    <div class=newscontainer>
                    <img src="${article.urlToImage}">
                    <div>
                    <a href="${article.url}" target="_blank">Read more</a>
                `;

                // Append the article element to the news container
                newsContainer.appendChild(articleElement);
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}
