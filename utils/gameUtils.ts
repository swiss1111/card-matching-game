import {Card} from "../types/gameTypes";
import {cardTypes} from "../constants/game.const";

export function createDeckSizesArray(start = 3, end = 10): number[] {
    const result: number[] = [];

    for (let i = start; i <= end; i++) {
        result.push(i*2);
    }

    return result;
}

export function shuffle(array: Card[]): Card[]{
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

export function createCardArray(size = 6): Card[] {
    const result: Card[] = [];

    for (let i = 0; i < size/2; i++) {
        result.push({
            typeId: cardTypes[i].id,
            image: cardTypes[i].image,
            condition: "hidden"
        } as Card);
        result.push({
            typeId: cardTypes[i].id,
            image: cardTypes[i].image,
            condition: "hidden"
        } as Card);
    }

    return result;
}

export function createCardSortedArray(size = 6):Card[]  {
    return shuffle(createCardArray(size));
}