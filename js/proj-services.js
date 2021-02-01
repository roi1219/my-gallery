'use strict'

var gProjs = [
    {
        id: 'minesweeper',
        name: 'Minesweeper',
        title: 'game',
        desc: 'logic game',
        url: 'https://roi1219.github.io/Minesweeper/',
        imgURL: 'img/portfolio/minesweeper.png',
        publishedAt: '1611433841'
    },
    {
        id: 'bookShop',
        name: 'Book Shop',
        title: 'manage your books',
        desc: 'a comptrable place to manage your book store.',
        url: 'projs\BookShop',
        imgURL: 'img/portfolio/bookshop.png',
        publishedAt: '1612038641000'
    },
    {
        id: 'pacman',
        name: 'Pacman',
        title: 'The nostalgic game in a new inviorment',
        desc: 'arcade game',
        url: `projs\pacman`,
        imgURL: 'img/portfolio/pacman.png',
        publishedAt: '1611001841000'
    },
];


function getProjs(){
    return gProjs;
}

function getProjById(projID){
    return gProjs.find(function(proj){
        return proj.id===projID;
    })
}
