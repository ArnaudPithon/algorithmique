'use strict';

const { isTriangleRectangle, max, max3, max3v2, min3, min3v2, tariff } = require('./chapitre-1.4-Fonctions.js');

describe('chapitre 1', () => {

    describe('isTriangleRectangle (1.4 p21)', () => {
        const triangle = {
            nonRectangle:[12, 3, 32],
            rectangle: [8, 10, 6],
        }
        test('Should return false', () => {
            expect( isTriangleRectangle(triangle.nonRectangle) )
                .toBe(false);
        });
        test('Should return true', () => {
            expect( isTriangleRectangle(triangle.rectangle) )
                .toBe(true);
        });
    });

    describe('max (1.5 p21)', () => {

        test('Should return a number', () => {
            expect(typeof max(3, 9)).toBe('number');
        });

        test('Should return maximum', () => {
            expect(max(-1.5, -3)).toBe(-1.5);
        });
    });

    describe('max3 (1.6 p21)', () => {

        test('Should return a number', () => {
            expect(typeof max3(3.03, 9, -1)).toBe('number');
        });

        test('Should return maximum', () => {
            expect(max3(-1.5, -3, 0.2)).toBe(0.2);
        });
    });

    describe('max3v2 (1.7 p21)', () => {

        test('Should return a number', () => {
            expect(typeof max3v2(3.03, 9, -1)).toBe('number');
        });

        test('Should return maximum', () => {
            expect(max3v2(-1.5, -3, 0.2)).toBe(0.2);
        });
    });

    describe('min3 (1.8 p22)', () => {

        test('Should return a number', () => {
            expect(typeof min3(3.03, 9, -1)).toBe('number');
        });

        test('Should return minimum', () => {
            expect(min3(-1.5, -3, 0.2)).toBe(-3);
        });
    });

    describe('min3v2 (1.8 p22)', () => {

        test('Should return a number', () => {
            expect(typeof min3v2(3.03, 9, -1)).toBe('number');
        });

        test('Should return minimum', () => {
            expect(min3v2(-1.5, -3, 0.2)).toBe(-3);
        });
    });

    describe('tarifs postaux (1.9 p22)', () => {
        const prices = [ 2.80, 4.40, 6.70 ];

        test(`Price should be include in [ ${prices} ]`, () => {
            expect(prices).toContain(tariff(33));
        });
    });

});

// vim: foldmethod=syntax: foldlevel=2
