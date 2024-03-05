import {Card, CardType,} from "../types/gameTypes";

const cardTypes: CardType[] = [
    {
        id: 1,
        image: "/images/cards/angular.png",
    },
    {
        id: 2,
        image: "/images/cards/d3.png",
    },
    {
        id: 3,
        image: "/images/cards/jenkins.png",
    },
    {
        id: 4,
        image: "/images/cards/postcss.png",
    },
    {
        id: 5,
        image: "/images/cards/react.png",
    },
    {
        id: 6,
        image: "/images/cards/redux.png",
    },
    {
        id: 7,
        image: "/images/cards/sass.png",
    },
    {
        id: 8,
        image: "/images/cards/splendex.png",
    },
    {
        id: 9,
        image: "/images/cards/ts.png",
    },
    {
        id: 10,
        image: "/images/cards/webpack.png",
    },
];

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