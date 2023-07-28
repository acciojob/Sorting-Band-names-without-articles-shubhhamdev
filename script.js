// script.js
document.addEventListener('DOMContentLoaded', function () {
  const bandNames = ['The Rolling Stones', 'Led Zeppelin', 'Aerosmith', 'The Beatles', 'Pink Floyd'];

  function removeArticles(name) {
    const articles = ['a', 'an', 'the'];
    const words = name.toLowerCase().split(' ');
    return words.filter(word => !articles.includes(word)).join(' ');
  }

  // Remove articles and sort the band names
  const sortedBandNames = bandNames.map(removeArticles).sort();

  // Display the sorted band names in the ul element
  const ulElement = document.getElementById('band');
  sortedBandNames.forEach(name => {
    const liElement = document.createElement('li');
    liElement.textContent = name;
    ulElement.appendChild(liElement);
  });
});
