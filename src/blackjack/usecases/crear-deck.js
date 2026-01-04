import _ from 'underscore';

export const miNombre = 'fernando'
/**
 * Crea un nuevo deck
 * @param {String[]} tiposDeCarta 
 * @param {String[]} tiposEspeciales 
 * @returns {String[]} retorna un nuevo deck
 */
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

    if(!tiposDeCarta) throw new Error('TipodeCarta es obligatorio');
    if(!tiposDeCarta.length > 0) throw new Error('TipodeCarta tiene que ser un arreglo de string');

    let deck         = [];
    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    deck = _.shuffle( deck );
    return deck;
}