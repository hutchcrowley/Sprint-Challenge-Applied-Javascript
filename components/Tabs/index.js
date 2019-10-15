// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const newTab = document.querySelector('.topics');
console.log(newTab);
const tabCreator = (item) => {
    const newDiv = document.createElement('div');
    newDiv.classList.add('tab');
    newDiv.textContent = item;

    return newDiv;
}


axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then((response) => {
        // console.log(response);

        response.data.topics.forEach(item => {

            newTab.appendChild(item);
        });
    })
    .catch(error => {
        console.log(error);
    });
