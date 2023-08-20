'use strict';
// Couvre les exercices du chapitre 1.4 Fonctions

/**
 * Prédicat - indique si un triangle est rectangle à partir de ses 3 cotés
 * @param {Array} sides - Un tableau des valeurs des 3 cotés du triangle
 * @return {Boolean} - vrai si c² = a² + b²
 */
function isTriangleRectangle (sides) {
    const [ a, b, c ] = sides.sort(compNumbers);

    return carre(c) === carre(a) + carre(b);
}

/**
 * Renvoie le carré d'un nombre
 * @param {number} value - Le nombre à mettre au carré
 * @return {number} - Le carré
 */
function carre (value) {
    return Math.pow(value, 2);
}

/**
 * Compare deux nombres
 * @param {number} a - un premier nombre
 * @param {number} b - un deuxième nombre
 * @return {number} - -1, 0 ou 1 suivant résultat de la comparaison
 */
function compNumbers (a, b) {
    if (a < b) return -1;
    else if (a > b) return 1;
    else return 0;
}

/**
 * Return maximum of two numbers
 * @param {number} number1 - A number
 * @param {number} number2 - Another number
 * @return {number} - The biggest number
 */
function max(number1, number2) {
    if (number1 >= number2)
        return number1;
    else
        return number2;
}

/**
 * Return maximum of three numbers
 * @param {number} number1 - A number
 * @param {number} number2 - Another number
 * @param {number} number3 - Yet another number
 * @return {number} - The biggest number
 */
function max3(number1, number2, number3) {
    if (number1 >= number2) {
        if (number1 >= number3)
            return number1;          // n1 >= n2 && n1 >= n3
        else
            return number3;          // n1 >= n2 && n3 > n1
    } else if (number2 >= number3)
        return number2;              // n2 > n1  && n2 >= n3
    else
        return number3;              // n2 > n1  && n3 > n2
}

/**
 * Return maximum of three numbers by using max function
 * @param {number} number1 - A number
 * @param {number} number2 - Another number
 * @param {number} number3 - Yet another number
 * @return {number} - The biggest number
 */
function max3v2(number1, number2, number3) {
    return max( max(number1, number2), number3 );
}

/**
 * Return minimum of two numbers
 * @param {number} number1 - A number
 * @param {number} number2 - Another number
 * @return {number} - The smallest number
 */
function min(number1, number2) {
    if (number1 <= number2)
        return number1;               // n1 <= n2
    else
        return number2;               // n2 < n1
}

/**
 * Return minimum of three numbers
 * @param {number} number1 - A number
 * @param {number} number2 - Another number
 * @param {number} number3 - Yet another number
 * @return {number} - The smallest number
 */
function min3(number1, number2, number3) {
    if (number1 <= number2) {
        if (number1 <= number3)
            return number1;          // n1 <= n2 && n1 <= n3
        else
            return number3;          // n1 <= n2 && n3 < n1
    } else if (number2 <= number3)
        return number2;              // n2 < n1  && n2 <= n3
    else
        return number3;              // n2 < n1  && n3 < n2
}

/**
 * Return minimum of three numbers by using min function
 * @param {number} number1 - A number
 * @param {number} number2 - Another number
 * @param {number} number3 - Yet another number
 * @return {number} - The smallest number
 */
function min3v2(number1, number2, number3) {
    return min( min(number1, number2), number3 );
}


/**
 * Return le tarif d'affranchissement d'une lettre en fonction de son poids
 * @param {number} weight - le poids de la lettre
 * @return {number} - Le tarif à appliquer
 */
function tariff(weight) {
    if (weight < 20)
        return 2.80;
    else if (weight >= 20 && weight < 50)
        return 4.40;
    else
        return 6.70;
}

module.exports = { isTriangleRectangle, compNumbers, max, max3, max3v2, min3, min, min3v2, tariff };
// vim: foldmethod=syntax: foldlevel=0
