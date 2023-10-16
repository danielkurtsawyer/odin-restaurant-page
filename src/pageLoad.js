import Logo from './thai-gourmet-logo.png';
import Truck from './thai-gourmet-food-truck.jpeg';

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
    header.appendChild(headerText);

    // add the header to the general content div
    content.appendChild(header);

    // create a container div to hold the main content of the page
    const main = document.createElement('div');
    main.classList.add('main');

    // add the image of the food truck to the container
    const truckImage = new Image();
    truckImage.src = Truck;
    main.appendChild(truckImage);

    // add the copy text to the container
    const copy = document.createElement('p');
    copy.textContent = 'This is my absolute favorite place to get quick, affordable, and delicious Thai food in Oakland. 5/5 stars! Would highly reccomend! - Dan';
    main.appendChild(copy);

    // add the container div to the general content div
    content.appendChild(main);

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