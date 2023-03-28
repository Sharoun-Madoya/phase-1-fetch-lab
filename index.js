// function fetchBooks() {
//   // To pass the tests, don't forget to return your fetch!
//   fetch("https://anapioficeandfire.com/api/books")
//   .then(res => res.json())
//   .then(json => renderBooks(json));
// }


// function renderBooks(json) {
//   const main = document.querySelector('main');
//   json.forEach(book => {
//     const h2 = document.createElement('h2');
//     h2.innerHTML = book.name;
//     main.appendChild(h2);
//   });
// }

// document.addEventListener('DOMContentLoaded', function() {
//   fetchBooks()
//   });
  // // .then (function(data){
  // //   console.log(data);
  // })

  function fetchBooks() {
    let retrieveData = fetch("https://anapioficeandfire.com/api/books")
    .then((resp) => resp.json())
    .then((data) => renderBooks(data));
    return retrieveData;
  }
  
  function renderBooks(books) {
    const main = document.querySelector('main');
    books.forEach(book => {
      const h2 = document.createElement('h2');
      h2.innerHTML = book.name;
      main.appendChild(h2);
    });
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    fetchBooks();
    
  });