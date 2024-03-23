//Constantes
const PELI_SRC ='https://www.youtube.com/embed/1roy4o4tqQM'
const SERIE_SRC ='https://www.youtube.com/embed/a1zmhHLVrq0'
const MUSICA_SRC ='https://www.youtube.com/embed/dWgG3bnVUS0'

//'https://www.youtube.com/embed/dWgG3bnVUS0?si=F8JBjUjFOOtp1ewV&amp;start=32'
                //   https://www.youtube.com/embed/dWgG3bnVUS0?si=F8JBjUjFOOtp1ewV

//

//Clases
class Multimedia{
  #url
  constructor(url){
    this.#url=url
  }

  get url(){ return this.#url}

  setInicio(){
    return 'Este método es para realizar un cambio en la URL del video”.'
  } 
}

class Reproductor extends Multimedia{
  #id
  constructor(url,id){
    super(url)
    this.#id = id
  }
  
  get id(){return this.#id}
  
  playMultimedia(){
    DOMControl.setElementSrc(this.url, this.id)
  }

  setInicio(startTime){
    DOMControl.setElementSrc(`${this.url}?start=${startTime}`, this.id)
  }
}



//Funciones
const DOMControl = (function (){
    
  const privateSetElementSrc = (url, id) => {
    element = document.getElementById(id)
    element.setAttribute('src',url)
  }

  return {
    setElementSrc(url,id){
      privateSetElementSrc(url,id)
    }
  } 

})();

// invoke 

const music = new Reproductor(MUSICA_SRC, 'musica')
const movie = new Reproductor(PELI_SRC,'peliculas')
const serie = new Reproductor(SERIE_SRC,'series')


music.playMultimedia()
movie.playMultimedia()
serie.playMultimedia()

music.setInicio(30)


