import data from './fotos.js';
const {fotos} = data; // Destructuring data

export default {
    categorias: [
        {
            id: 'sweden', nombre: 'Sweden', numeroFotos: fotos['sweden'].length, imagenPortada: './Img/sweden.jpg',
            id: 'norway', nombre: 'Norway', numeroFotos: fotos['norway'].length, imagenPortada: './Img/norway.jpg',
            id: 'denmark', nombre: 'Denmark', numeroFotos: fotos['denmark'].length, imagenPortada: './Img/denmark.jpg',
            id: 'romania', nombre: 'Romania', numeroFotos: fotos['romania'].length, imagenPortada: './Img/romania.jpg',
            id: 'finland', nombre: 'Finland', numeroFotos: fotos['finland'].length, imagenPortada: './Img/finland.jpg',
            id: 'iceland', nombre: 'Iceland', numeroFotos: fotos['iceland'].length, imagenPortada: './Img/iceland.jpg',

        }
    ]
}