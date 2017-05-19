Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getRandom = exports.getOferts = exports.getUnsplashParty = exports.getUnsplashSport = exports.getUnsplashFood = undefined;

var _native = require('unsplash-js/native');

var _native2 = babelHelpers.interopRequireDefault(_native);

var UrlUnsplashFood = 'https://api.unsplash.com/collections/855114/photos/?client_id=398f4bbdb19eb0835cf6e222b5ec0ec592773b892b1cfe43f773094becb64505';
var UrlUnsplashSport = 'https://api.unsplash.com/collections/865278/photos/?client_id=398f4bbdb19eb0835cf6e222b5ec0ec592773b892b1cfe43f773094becb64505';
var UrlUnsplashCulture = 'https://api.unsplash.com/collections/865424/photos/?client_id=398f4bbdb19eb0835cf6e222b5ec0ec592773b892b1cfe43f773094becb64505';
var UrlUnsplashParty = 'https://api.unsplash.com/collections/865434/photos/?client_id=398f4bbdb19eb0835cf6e222b5ec0ec592773b892b1cfe43f773094becb64505';
var UrlCategory = 'http://192.168.1.34:8080/_ah/api/ofertas/v1/ofertascollection';
var UrlRandom = 'https://api.unsplash.com/photos/random/?client_id=398f4bbdb19eb0835cf6e222b5ec0ec592773b892b1cfe43f773094becb64505';

function getUnsplashSport() {
    return fetch(UrlUnsplashSport).then(function (response) {
        return response.json();
    }).then(function (data) {
        return data.map(function (responses) {
            return {
                name: 'oferta',
                image: responses.urls.small,
                likes: 200,
                comments: 140

            };
        });
    });
}

function getUnsplashFood() {
    return fetch(UrlUnsplashFood).then(function (response) {
        return response.json();
    }).then(function (data) {
        return data.map(function (responses) {
            return {
                name: 'oferta',
                image: responses.urls.small,
                likes: 200,
                comments: 140

            };
        });
    });
}

function getRandom() {
    return fetch(UrlRandom).then(function (response) {
        return response.json();
    }).then(function (data) {
        return data.map(function (responses) {
            return {

                image: responses.urls.small

            };
        });
    });
}

function getUnsplashParty() {
    return fetch(UrlUnsplashParty).then(function (response) {
        return response.json();
    }).then(function (data) {
        return data.map(function (responses) {
            return {
                name: 'oferta',
                image: responses.urls.small,
                likes: 200,
                comments: 140

            };
        });
    });
}

function getOferts() {
    return fetch(UrlCategory).then(function (response) {
        return response.json();
    }).then(function (data) {
        return data.items;
    }).then(function (category) {
        return category.map(function (items) {

            return {

                idCategoria: items.ofertasPK.idCategoria,

                titulo: items.tituloOferta,
                precio: items.precio,
                descripcion: items.descripcion,
                telefono: items.telefono,
                letraChica: items.letraChica,
                cantidadVisitantes: items.cantidadVisitantes,
                image: items.image

            };
        });
    });
}

exports.getUnsplashFood = getUnsplashFood;
exports.getUnsplashSport = getUnsplashSport;
exports.getUnsplashParty = getUnsplashParty;
exports.getOferts = getOferts;
exports.getRandom = getRandom;