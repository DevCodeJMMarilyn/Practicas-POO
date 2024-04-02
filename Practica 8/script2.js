import Musica from './musica.js';
import Dispositivo from './dispositivo.js';

let musica = new Musica('El reloj', 'Luis Miguel', 'Romances');
let dispositivo=new Dispositivo('Samsung Galaxy 10+')

//console.log(dispositivo.obtenerDispositivo()+dispositivo.play(musica).obtenerArtista())
console.log(`El dipositivo ${dispositivo.obtenerDispositivo()} esta reproduciendo la canción ${dispositivo.play(musica).obtenerTitulo()} del artista ${dispositivo.play(musica).obtenerArtista()}, el album es ${dispositivo.play(musica).obtenerAlbum()}`)