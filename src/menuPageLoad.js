export default function menuPageLoad() {
    const main = document.querySelector('.main');
    // clear the main content div
    while(main.firstChild){
        main.removeChild(main.lastChild);
    }
}