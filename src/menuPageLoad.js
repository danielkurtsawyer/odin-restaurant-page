function makeItemCard(name, price, description){
    // this function creates item cards using a name and a price
    const card = document.createElement('div');
    card.classList.add('item');

    // create a name div which holds the value in the variable name
    const nameDiv = document.createElement('div');
    nameDiv.textContent = name;

    // create a price div which holds the value in the variable price, formatted in USD
    const priceDiv = document.createElement('div');
    priceDiv.textContent = `$${price}`;

    // create a title div which will hold the name and price at the top of the item card
    const titleDiv = document.createElement('div');
    titleDiv.classList.add('itemHeader');

    // add the name and price to the title div
    titleDiv.appendChild(nameDiv);
    titleDiv.appendChild(priceDiv);

    // create a description div which holds the description of the menu item
    const descDiv = document.createElement('div');
    descDiv.textContent = description;
    
    // add the titleDiv, and description divs to the card
    card.appendChild(titleDiv);
    card.appendChild(descDiv);

    // return the card populated using the parameters
    return card;
}

export default function menuPageLoad() {
    const main = document.querySelector('.main');
    // clear the main content div
    while(main.firstChild){
        main.removeChild(main.lastChild);
    }

    // create a buffer div for layout padding purposes
    const buffer = document.createElement('div');
    buffer.classList.add('buffer');

    // create a menu header and add it to the buffer div
    const menuHeader = document.createElement('div');
    menuHeader.classList.add('menuHeader');
    menuHeader.textContent = "Our Menu";
    buffer.appendChild(menuHeader);

    // create a container to hold the food item cards
    const foodContainer = document.createElement('div');
    foodContainer.classList.add('foodContainer');

    // add a bunch of item cards to the foodContainer
    foodContainer.appendChild(makeItemCard('Pad Thai', 8, 'Medium thin noodle stir fry'));
    foodContainer.appendChild(makeItemCard('Pad See Ew', 8, 'Fresh flat wide rice noodle stir fry with egg, veg, in light vinegar sweet sauce'))
    foodContainer.appendChild(makeItemCard('Pad Kee Mow', 8, 'Fresh flat wide rice noodle stir fry w/veg. basil leaves in a spicy sauce'));
    foodContainer.appendChild(makeItemCard('Lo Mein', 8, 'egg noodle like spaghetti stir fry with vegetables in a light brown sauce'));
    foodContainer.appendChild(makeItemCard('Green Curry', 8, 'Cooked in a coconut sauce with bamboo shoot, basil, brocolli, pea/carrot'));
    foodContainer.appendChild(makeItemCard('Massaman Curry', 8, 'Potato, chick pea, pea, and carrot in a red curry sauce'));
    foodContainer.appendChild(makeItemCard('Prik-King (Chili Paste)', 8, 'Stir fry with mixed veg. in a sweet spicy chili sauce'));
    foodContainer.appendChild(makeItemCard('Satay Chicken', 8, 'Teriyaki chicken topped with house special sweet peanut sauce'));
    // add the food container to the buffer
    buffer.appendChild(foodContainer);
    // add the buffer to the maincontent div
    main.appendChild(buffer);
}