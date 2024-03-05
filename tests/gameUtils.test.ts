import {describe, expect, test} from '@jest/globals';
import {
    createDeckSizesArray,
} from '../utils/gameUtils';

describe('gameUtils module', () => {
    // createDeckSizesArray
    test(`Test create deck sizes array function without parameters`, () => {
        expect(createDeckSizesArray()).toEqual([6, 8, 10, 12, 14, 16, 18, 20]);
    });
    test(`Test create deck sizes array function with (3, 7) parameters`, () => {
        expect(createDeckSizesArray(3, 7)).toEqual([6, 8, 10, 12, 14]);
    });
    test(`Test create deck sizes array function with (3, 3) parameters`, () => {
        expect(createDeckSizesArray(3, 3)).toEqual([6]);
    });
});