//your code here
document.addEventListener('DOMContentLoaded', function () {
  let bandNames = ['The Beatles', 'Led Zeppelin', 'Pink Floyd', 'The Rolling Stones', 'AC/DC'];

  // Function to remove articles from a band name
  function removeArticles(name) {
    // Regular expression to match articles at the beginning of the name
    const articleRegex = /^(a|an|the)\s/i;
    // Remove the article from the name using replace()
    const nameWithoutArticle = name.replace(articleRegex, '');
    return nameWithoutArticle;
  }

  // Sort the band names excluding articles
  const sortedBandNames = bandNames.sort((a, b) => {
    const nameA = removeArticles(a);
    const nameB = removeArticles(b);
    return nameA.localeCompare(nameB);
  });

  // Get the <ul> element by its id
  const ulElement = document.getElementById('bands');

  // Clear any existing content in the <ul> element
  ulElement.innerHTML = '';

  // Iterate over the sorted band names and create <li> elements
  sortedBandNames.forEach(name => {
    // Create a new <li> element
    const liElement = document.createElement('li');
    // Set the text content of the <li> element to the band name
    liElement.textContent = name;
    // Append the <li> element to the <ul> element
    ulElement.appendChild(liElement);
  });
});

