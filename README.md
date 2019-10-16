# Sprint-Challenge Applied Javascript - Lambda Times

This challenge allows you to practice the concepts and techniques learned over the past week and apply them in a concrete project. This Sprint explored the DOM and the concept of components. During this Sprint, you studied the DOM, DOM Events, and Components, as well as HTTP GET requests, and the axios library. In your challenge this week, you will demonstrate proficiency by creating an online Lambda newspaper called "Lambda Times."

## Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the Sprint Challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your Tead Lead and Instructor in your cohort help channel on Slack. Your work reflects your proficiency in Applied JavaScript.

You have three hours to complete this challenge. Plan your time accordingly.

## Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons) and your Team Lead.

## Description

You are going to create a Lambda Newspaper. Your job is going to be to create the components that make up the newspaper's home page. You will do this at first with static data, then you will request data from a server to create dynamic components.

In meeting the minimum viable product (MVP) specifications listed below, you should have a console full of correct responses to the problems given.

## Self-Study Questions

Demonstrate your understanding of this week's concepts by answering the following free-form questions.

Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your project manager

1. What is the DOM?
   <!-- The Document Object Model, also known as the DOM, is a web Application Programming Interface, or API. It is a language-neutral interface which is arranged in a tree-like structure that describes the structure of the HTML. Each element of the HTML document is represented by a different type of node. The document itself would be conisdered a root node. Then, there are element nodes, for things like divs and class names. These nodes can themselves have child nodes, which can be more element nodes. Some of these chideren will be the last type of node, such as a text node or comment node. These node objects are given a nodeType property, which is a number from 1 to 8. This is it's constant property. There are a number of properties and methods on these various objects that allow us to interact with, and manipulate the DOM using JavaScript. -->

2. What is an event?
   <!-- An event is what it is called when a user interacts with the web site, and thus the DOM. This could be anything from clicking the mouse, to simply hovering over a given element, or striking a key on the keyboard.The browser detects and tracks these events, which allow the developer a number of options to give the user to interact with the DOM. -->

3. What is an event listener?
<!-- An event listener is an instruction to a specific element to listen to a specific event and fire a callback function when that event occurs. The event listener method takes two arguments. First, is the event to listen for, such as 'click' or 'mouseover'. The second is the callback to fire when that event is triggered. This allows us to create an interface that the user can interact with and give instructions to the DOM. -->

4. Why would we convert a NodeList into an Array?
<!-- You would convert a NodeList into an array to access the methods on the Array object. A NodeList is only an array-like object, meaning that it looks like an array and holds data like an array, but does not have access to the same methods as an array, and can behave differently. You would use the .from() method to convert the NodeList into a true Array, which then gives it access to methods like .map(). -->

5. What is a component?
<!-- A component is a reusable piece of code that can be used to build elements sharing functionality and styling. Essentially, it is the basic building block of applications, libraries, etc. It allows JavaScript to become more like putting together different modules than having to write each and every line of code of any given website/ application/ etc. It helps keep code DRY, and simplifies development. -->

### Git Set up

* [+] Fork the project into your GitHub user account
* [+] Clone the forked project into a directory on your machine
* [+] Create a pull request before you start working on the project requirements.  You will continuously push your updates throughout the project.
* [+] You are now ready to build this project with your preferred IDE

## Minimum Viable Product

Your finished project must include all of the following requirements:

* [+] Look through the HTML code and familiarize yourself with the different sections. Some of them already exist, but some need to be filled in. DO NOT add any code to the HTML file itself.

* [+] Following the instructions in the `Header/index.js` file, create the Header component.

* [+] Following the instructions in the `Tabs/index.js` file, create individual Tabs components.

* [+] Following the instructions in the `Cards/index.js` file, create individual Cards components.

## Stretch Problems

Your stretch challenge is to write the functionality of a `Carousel` component. This is an advanced challenge, so you are not expected to be able to complete it. If you begin and don't finish, you should still submit with what you have. This is going to be a bit different because you are going to need to create some advanced functionality for the carousel. There is no need to request data for this exercise.

* [ ] Complete the carousel functionality in `Carousel.js`

* [ ] If you complete the Carousel, add functionality so that the carousel slides when the buttons are pressed instead of just appearing.

* [ ] Create an 'infinite loop' carousel. In which as long as you click on an arrow, the array of images will loop over itself.

* [ ] If you have finished the above, research `data attributes`. Implement data attributes within your tabs as well as your cards. Give the tabs functionality so that when they are clicked they filter the cards to only display the cards that contain that topic.
