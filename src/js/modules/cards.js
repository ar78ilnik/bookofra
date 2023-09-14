'use script';

export const clickCards = () => {
    const cards = document.querySelectorAll('.cards__img');

    cards.forEach(item => {
        item.addEventListener('click', () => {
            console.log('jr');
        })
    });
}
