import Truck from './thai-gourmet-food-truck.jpeg';
export default function homePageLoad() {
    const main = document.querySelector('.main');
    // clear the main content div
    while(main.firstChild){
        main.removeChild(main.lastChild);
    }

    // add the image of the food truck to the container
    const truckImage = new Image();
    truckImage.src = Truck;
    main.appendChild(truckImage);

    // add the copy text to the container
    const copy = document.createElement('p');
    copy.textContent = 'This is my absolute favorite place to get quick, affordable, and delicious Thai food in Oakland. 5/5 stars! Would highly recommend! - Dan';
    main.appendChild(copy);
}