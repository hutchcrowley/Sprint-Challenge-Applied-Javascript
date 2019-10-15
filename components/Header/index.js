// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

const headerCreator = () => {
    const headerContainer = document.createElement('div');
    const header = document.createElement('div');
    const date = document.createElement('span');
    const headLine = docuement.createElement('h1');
    const temp = document.createElement('span');

    header.classList.add('header');
    date.classList.add('date');
    temp.classList.add('temp');

    headLine.textContent.add('Lambda Times');
    date.textContent.add('March 28, 2019');
    temp.textContent.add('98°');

    headerContainer.appendChild(title);
    headerContainer.appendChild(date);
    headerContainer.appendChild(headLine);
    headercontainer.appendChild(temp);

    return header;
};

const headerContainer = document.querySelector('.header-container');

headerCreator();