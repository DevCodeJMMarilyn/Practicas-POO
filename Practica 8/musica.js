class Musica {
    constructor(titulo, artista, album){
        this.titulo= titulo
        this.artista=artista
        this.album=album
    }

    obtenerTitulo() {
        return this.titulo;
    }
    
    obtenerArtista() {
        return this.artista;
    }
    
    obtenerAlbum() {
        return this.album;
    }
}

export default Musica;