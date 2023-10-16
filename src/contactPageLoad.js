export default function contactPageLoad() {
    const main = document.querySelector('.main');
    // clear the main content div
    while(main.firstChild){
        main.removeChild(main.lastChild);
    }

    // create a buffer div for layout padding purposes
    const buffer = document.createElement('div');
    buffer.classList.add('buffer');

    // create a content card container div
    const contactCard = document.createElement('div');
    contactCard.classList.add('contactCard');

    // create the contact header and add it to the contact card
    const contactHeader = document.createElement('div');
    contactHeader.textContent = 'Contact Us';
    contactHeader.classList.add('contactHeader');
    contactCard.appendChild(contactHeader);

    // create a container to hold the contact information
    const contactInfo = document.createElement('div');
    contactInfo.classList.add('contactInfo');

    // create the phone number div and add it to the contact info div
    const contactNumber = document.createElement('div');
    contactNumber.textContent = '(412)-681-4373';
    contactInfo.appendChild(contactNumber);

    // create the email div and add it to the contact info div
    const contactEmail = document.createElement('div');
    contactEmail.textContent = 'thaigourmetpgh@gmail.com';
    contactInfo.appendChild(contactEmail);

    // add the content info div to the content card
    contactCard.appendChild(contactInfo);

    // add the content card to the buffer div
    buffer.appendChild(contactCard);

    // add the buffer div to the main content div
    main.appendChild(buffer);
}