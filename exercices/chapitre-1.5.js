'use strict';
// Couvre les exercices du chapitre 1.5

/**
 * @typedef {object} scorie
 * @property {boolean} square - vrai dans le cas d'un carré parfait
 * @property {number} root - la partie entière de la racine carrée
 */

/**
 * isSquare - teste si n (non négatif) est un carré parfait
 * @param {number} n - nombre non négatif
 * @returns {scorie}
 */
function getSquare(n) {
    if (n < 0) {
        return { perfectSquare: false, root: null };
    }
    const root = Math.sqrt(n);

    if ( Math.floor(root) === root ) {
        return { perfectSquare: true, root };
    } else {
        return { perfectSquare: false, root: Math.floor(root) };
    }
}

/**
 * square - renvoie la racine carrée d'un nombre n ou sa partie entière.
 * @param {number} n - un entier n
 * @return {number} racine carrée de n ou sa partie entière
 */
function square(n) {
    const { perfectSquare, root } = getSquare(n);

    if ((perfectSquare === false) && (root === null)) {
        return 'Something get wrong';
    }

    return root;
}

module.exports = { getSquare, square };
// vim: foldmethod=syntax: foldlevel=0
