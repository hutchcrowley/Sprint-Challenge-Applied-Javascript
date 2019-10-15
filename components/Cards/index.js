// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.


const cardsContainer = document.querySelector('.cards-container');


const cardCreator = (item) => {
    const cardDiv = document.createElement('div');
    const headLine = document.createElement('div');
    const authorCard = document.createElement('div');
    const imageContainer = document.createElement('div');
    const imageSrc = document.createElement('img');
    const authorName = document.createElement('span');

    cardDiv.classList.add('card');
    headLine.classList.add('headline');
    authorCard.classList.add('author');
    imageContainer.classList.add('img-container');
    imageSrc.textContent = articles.imageSrc0;
    authorName.textContent = articles.authorPhoto;

    return cardDiv;

};

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then((response) => {
        // console.log(response);
        response.data.articles.forEach((tem) => {
            console.log(response);

            cardDiv.textContent = response.data.articles;
            headLine.textContent = response.data.headline;
            imageSrc.textContent = response.data.authorPhoto;
            authorName.textContent = response.data.authorName;

        });
    })

    .then(() => {
        console.log(cardsContainer);
        cardsContainer.appendChild(cardDiv);
        cardsContainer.appendChild(headLine);
        cardsContainer.appendChild(authorCard);
        cardsContainer.appendChild(imageContainer);
        cardsContainer.appendChild(imageSrc);
        cardsContainer.appendChild(authorName);
    })
    .catch(error => {
        console.log(error);
    });