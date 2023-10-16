import Logo from './thai-gourmet-logo.png';
import menuPageLoad from './menuPageLoad.js';
import contactPageLoad from './contactPageLoad.js';
import homePageLoad from './homePageLoad.js';

export default function pageLoad() {
    const content = document.querySelector('#content');

    // create the header div

    const header = document.createElement('div');
    header.classList.add('header');

    // add the logo image to the header
    const logo = new Image();
    logo.src = Logo;
    logo.classList.add('logo');
    header.appendChild(logo);
    
    // add the header text to the header
    const headerText = document.createElement('div');
    headerText.textContent = 'Thai Gourmet Food Truck';
    headerText.classList.add('headerText');
    header.appendChild(headerText);

    // create the home, menu, and contact buttons
    const homeButton = document.createElement('button');
    homeButton.textContent = 'Home';
    homeButton.classList.add('home');

    const menuButton = document.createElement('button');
    menuButton.textContent = 'Menu';
    menuButton.classList.add('menu');

    const contactButton = document.createElement('button');
    contactButton.textContent = 'Contact';
    contactButton.classList.add('contact');

    // add event listeners that toggle a hover class on the buttons 
    homeButton.addEventListener('mouseover', () => homeButton.classList.add('hover'));
    homeButton.addEventListener('mouseout', () => homeButton.classList.remove('hover'));
    menuButton.addEventListener('mouseover', () => menuButton.classList.add('hover'));
    menuButton.addEventListener('mouseout', () => menuButton.classList.remove('hover'));
    contactButton.addEventListener('mouseover', () => contactButton.classList.add('hover'));
    contactButton.addEventListener('mouseout', () => contactButton.classList.remove('hover'));

    // also add event listeners to dynamically render the webpage sites
    homeButton.addEventListener('click', homePageLoad);
    menuButton.addEventListener('click', menuPageLoad);
    contactButton.addEventListener('click', contactPageLoad);

    // create a container to hold the buttons
    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('buttonContainer');

    // add the buttons to the container
    buttonContainer.appendChild(homeButton);
    buttonContainer.appendChild(menuButton);
    buttonContainer.appendChild(contactButton);

    // add the button container to the header
    header.appendChild(buttonContainer);

    // add the header to the general content div
    content.appendChild(header);

    // create a container div to hold the main content of the page
    const main = document.createElement('div');
    main.classList.add('main');
    content.appendChild(main);

    // load the main content of the home page using the homePageLoad module
    homePageLoad();

    // create the footer div and add relevent children elements
    const footer = document.createElement('div');
    footer.classList.add('footer');
    footer.textContent = 'Copyright 2023 Daniel Sawyer | ';
    const link = document.createElement('a');
    link.textContent = 'GitHub';
    link.setAttribute('href', 'https://github.com/danielkurtsawyer/odin-restaurant-page');
    footer.appendChild(link);
    // add the footer to the general content div
    content.appendChild(footer);
}