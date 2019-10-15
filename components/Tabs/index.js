// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const elementCreator = (tabTitle) => {
    let newDiv = document.createElement('div');
    newDiv.classlist.add('tab');
    newDiv.textContent = tabTitle;

}


axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(response => {

        response.topics.forEach(item => {
            let tab = elementCreator(item);
            parent.appendChild(div);
        })
    })
    .catch(error => {
        console.log("Error:", err);
    })