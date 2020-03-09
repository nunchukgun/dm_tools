import { InitiativeModel } from './types';
import orderBy from 'lodash/orderBy'

const comparator = (a: InitiativeModel, b: InitiativeModel) => {
    
}

const sortByInitiative = (character: InitiativeModel, initiativeOrder: InitiativeModel[]): InitiativeModel[] => {
    const unsortedArray: InitiativeModel[] = [character, ...initiativeOrder]
    return orderBy(unsortedArray, ['initiativeRoll', 'dexMod', 'Math.random'], ['desc', 'desc'])
}

export default sortByInitiative