'use strict';

const { isTriangleRectangle } = require('./ex1.4.js');
const { max, max3, max3v2, min3, min3v2 } = require('./ex1.5.js');

describe('chapitre 1', () => {

    describe('isTriangleRectangle (1.4 p21)', () => {

        const triangle = {
            nonRectangle:[12, 3, 32],
            rectangle: [8, 10, 6],
        }

        test('Should return a boolean at false', () => {
            const result = isTriangleRectangle(triangle.nonRectangle);

            expect(typeof result === 'boolean' && !result).toBe(true);
        });

        test('Should return a boolean at true', () => {
            const result = isTriangleRectangle(triangle.rectangle);

            expect(typeof result === 'boolean' && result).toBe(true);
        });
    });

    describe('max (1.5 p21)', () => {

        test('Should return a number', () => {
            expect(typeof max(3, 9) === 'number').toBe(true);
        });

        test('Should return maximum', () => {
            expect(max(-1.5, -3) === -1.5).toBe(true);
        });
    });

    describe('max3 (1.6 p21)', () => {

        test('Should return a number', () => {
            expect(typeof max3(3.03, 9, -1) === 'number').toBe(true);
        });

        test('Should return maximum', () => {
            expect(max3(-1.5, -3, 0.2) === 0.2).toBe(true);
        });
    });

    describe('max3v2 (1.7 p21)', () => {

        test('Should return a number', () => {
            expect(typeof max3v2(3.03, 9, -1) === 'number').toBe(true);
        });

        test('Should return maximum', () => {
            expect(max3v2(-1.5, -3, 0.2) === 0.2).toBe(true);
        });
    });

    describe('min3 (1.8 p22)', () => {

        test('Should return a number', () => {
            expect(typeof min3(3.03, 9, -1) === 'number').toBe(true);
        });

        test('Should return minimum', () => {
            expect(min3(-1.5, -3, 0.2) === -3).toBe(true);
        });
    });

    describe('min3v2 (1.8 p22)', () => {

        test('Should return a number', () => {
            expect(typeof min3v2(3.03, 9, -1) === 'number').toBe(true);
        });

        test('Should return minimum', () => {
            expect(min3v2(-1.5, -3, 0.2) === -3).toBe(true);
        });
    });

});

// vim: foldmethod=syntax: foldlevel=2
