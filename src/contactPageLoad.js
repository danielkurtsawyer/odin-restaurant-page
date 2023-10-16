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
    contactCard.appendChild(contactHeader);

    // create the phone number div and add it to the contact card
    const contactNumber = document.createElement('div');
    contactNumber.textContent = '(412)-681-4373';
    contactCard.appendChild(contactNumber);

    // create the email div and add it to the contact card
    const contactEmail = document.createElement('div');
    contactEmail.textContent = 'thaigourmetpgh@gmail.com';
    contactCard.appendChild(contactEmail);

    // add the content card to the buffer div
    buffer.appendChild(contactCard);

    // add the buffer div to the main content div
    main.appendChild(buffer);
}