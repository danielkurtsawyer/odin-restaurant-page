export default function pageLoad() {
    const content = document.querySelector('#content');
    const image = document.createElement('img');
    image.setAttribute('src', '/src/thai-gourmet-food-truck.jpeg');
    content.appendChild(image);

    const headline = document.createElement('div');
    headline.classList.add('header');
    headline.textContent = 'Thai Gourmet Food Truck';
    content.appendChild(headline);

    const copy = document.createElement('p');
    copy.textContent = 'This is my absolute favorite place to get quick, affordable, and delicious Thai food in Oakland. 5/5 stars! Would highly reccomend! - Dan';
    content.appendChild(copy);
}