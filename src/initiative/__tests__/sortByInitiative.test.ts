import sortByInitiative from '../sortByInitiative'
import { InitiativeModel } from '../types'

describe('sortByInitiative', () => {
    it('adds character to an empty array', () => {
        const character: InitiativeModel = {
            name: 'alpha',
            initiativeRoll: 10,
            dexMod: 0
        }

        const initiativeOrder: InitiativeModel[] = []

        const expected = [
            {name: 'alpha', initiativeRoll: 10, dexMod: 0}
        ]

        const result: InitiativeModel[] = sortByInitiative(character, initiativeOrder)

        expect(result).toEqual(expected)
    })

    it('adds new character to non-empty array sorted by initiativeRoll', () => {
        const character: InitiativeModel = { name: 'alpha', initiativeRoll: 10, dexMod: 0 }

        const initiativeOrder: InitiativeModel[] = [
            {name: 'beta', initiativeRoll: 9, dexMod: 1}
        ]

        const expected = [
            {name: 'alpha', initiativeRoll: 10, dexMod: 0}, 
            {name: 'beta', initiativeRoll: 9, dexMod: 1}
        ]

        const result: InitiativeModel[] = sortByInitiative(character, initiativeOrder)

        expect(result).toEqual(expected)
    })

    it('breaks ties in initiativeRoll by using dexMod', () => {
        const character: InitiativeModel = { name: 'alpha', initiativeRoll: 10, dexMod: 1 }

        const initiativeOrder: InitiativeModel[] = [
            {name: 'beta', initiativeRoll: 10, dexMod: 5}
        ]

        const expected = [
            {name: 'beta', initiativeRoll: 10, dexMod: 5}, 
            {name: 'alpha', initiativeRoll: 10, dexMod: 1}
        ]

        const result: InitiativeModel[] = sortByInitiative(character, initiativeOrder)

        expect(result).toEqual(expected)
    })

    xit('breaks ties in initiativeRoll AND dexMod randomly', () => {
        const character: InitiativeModel = { name: 'alpha', initiativeRoll: 10, dexMod: 1 }

        const initiativeOrder: InitiativeModel[] = [
            {name: 'beta', initiativeRoll: 10, dexMod: 1}
        ]

        const expected = [
            {name: 'beta', initiativeRoll: 10, dexMod: 1}, 
            {name: 'alpha', initiativeRoll: 10, dexMod: 1}
        ]

        const result: InitiativeModel[] = sortByInitiative(character, initiativeOrder)

        expect(result).toEqual(expected)
    })
})