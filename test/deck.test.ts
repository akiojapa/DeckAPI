import {describe, expect, test} from '@jest/globals';
import deckService from '../src/services/deckService';

describe("Funções disponíveis ao momento de criar decks", () => {


    test('Deve obter um comandante', async () => { 

        expect(await deckService.getCommander("Atraxa, Praetors' Voice")).toBe(Object)
    })

    test('Deve obter cartas por cor e o nome do set', async () => {

        expect(await deckService.getCardsByColor(["B","G","U","W"], "Double Masters")).toBe(Object)
    })

    test('Deve criar um deck', async () => {

        expect(await deckService.createDeck()).toBe("Deck criado com sucesso!")
    })


})