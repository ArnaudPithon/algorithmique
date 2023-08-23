'use strict';

const { isTriangleRectangle, compNumbers, max, max3, max3v2, min3, min3v2, tariff } = require('./chapitre-1.4-Fonctions.js');
const { getSquare, square } = require('./chapitre-1.5.js');

describe('chapitre 1', () => {

    describe('isTriangleRectangle (1.4 p21)', () => {
        const triangle = {
            nonRectangle:[12, 3, 32],
            rectangle: [8, 10, 6],
        }
        test('Should return true or false', () => {
            expect( isTriangleRectangle(triangle.nonRectangle) )
                .toBe(false);
            expect( isTriangleRectangle(triangle.rectangle) )
                .toBe(true);
        });
    });

    describe('compNumbers (1.4 p21)', () => {
        test('Should see an egality', () => {
            expect(compNumbers(3, 3)).toBe(0);
        });
    });

    describe('max (1.5 p21)', () => {
        test('max should return maximum of two numbers', () => {
            expect(typeof max(3, 9)).toBe('number');
            expect(max(-1.5, -3)).toBe(-1.5);
        });
    });

    describe('max3 (1.6 p21)', () => {
        test('max3 should return maximum of three numbers', () => {
            expect(max3(2, 2, 1)).toBe(2);
            expect(typeof max3(3.03, 9, -1)).toBe('number');
            expect(max3(-1.5, -3, 0.2)).toBe(0.2);
            expect(max3(-5, -3, 0.2)).toBe(0.2);
        });
    });

    describe('max3v2 (1.7 p21)', () => {
        test('max3v2 should return maximum of three numbers', () => {
            expect(typeof max3v2(3.03, 9, -1)).toBe('number');
            expect(max3v2(-1.5, -3, 0.2)).toBe(0.2);
        });
    });

    describe('min3 (1.8 p22)', () => {
        test('min3 should return minimum of three numbers', () => {
            expect( min3(1, 2, 3) ).toBe(1);
            expect( min3(2, 1, 3) ).toBe(1);
            expect( min3(3, 2, 1) ).toBe(1);
            expect( min3(2, 3, 1) ).toBe(1);
        });
    });

    describe('min3v2 (1.8 p22)', () => {
        test('min3v2 should return minimum of three numbers', () => {
            expect(min3v2(-1.5, -3, 0.2)).toBe(-3);
        });
    });

    describe('tarifs postaux (1.9 p22)', () => {
        const prices = [ 2.80, 4.40, 6.70 ];

        test(`Tariffs should be include in [ ${prices} ]`, () => {
            expect(prices).toContain( tariff(19) );
            expect(prices).toContain( tariff(20) );
            expect(prices).toContain( tariff(50) );
        });
    });

    describe('getSquare, teste si un nombre est un carré parfait (1.10 p23)', () => {
        test('Should return false', () => {
            expect( getSquare(-1).perfectSquare ).toBe(false);
        });
        test('Should return false and 1', () => {
            expect( getSquare(3).perfectSquare ).toBe(false);
            expect( getSquare(3).root ).toBe(1);
        });
        test('Should return true and the square root of 4', () => {
            expect( getSquare(4).perfectSquare ).toBe(true);
            expect( getSquare(4).root ).toBe(2);
        });
    });

    describe('square (1.11 p23)', () => {
        test('Should return square root', () => {
            expect( square(3) ).toBe(1);
            expect( square(4) ).toBe(2);
        });
        test.failing('Should return an error message', () => {
            expect( typeof square(-1) ).toBe('integer');
        });
    });

});

// vim: foldmethod=syntax: foldlevel=2
