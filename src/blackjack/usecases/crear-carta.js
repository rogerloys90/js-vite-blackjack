
/**
 * Crea un elemento img de carta
 * @param {String} carta 
 * @returns {HTMLElement} elemento carta para html
 */
export const createCarta = (carta) => {
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
    imgCarta.classList.add('carta');
    return imgCarta;
};