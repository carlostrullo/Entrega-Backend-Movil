import Unsplash from 'unsplash-js/native'


const UrlUnsplashFood= 'https://api.unsplash.com/collections/855114/photos/?client_id=398f4bbdb19eb0835cf6e222b5ec0ec592773b892b1cfe43f773094becb64505'
const UrlUnsplashSport='https://api.unsplash.com/collections/865278/photos/?client_id=398f4bbdb19eb0835cf6e222b5ec0ec592773b892b1cfe43f773094becb64505'
const UrlUnsplashCulture='https://api.unsplash.com/collections/865424/photos/?client_id=398f4bbdb19eb0835cf6e222b5ec0ec592773b892b1cfe43f773094becb64505'
const UrlUnsplashParty='https://api.unsplash.com/collections/865434/photos/?client_id=398f4bbdb19eb0835cf6e222b5ec0ec592773b892b1cfe43f773094becb64505'
const UrlCategory= 'http://192.168.1.34:8080/_ah/api/ofertas/v1/ofertascollection'
const UrlRandom='https://api.unsplash.com/photos/random/?client_id=398f4bbdb19eb0835cf6e222b5ec0ec592773b892b1cfe43f773094becb64505'

    
    



function getUnsplashSport(){
   return fetch(UrlUnsplashSport)
        .then(response=>response.json())
        .then(data => data.map(responses=>{
            return {
             name: 'oferta',
             image: responses.urls.small,
             likes: 200,
             comments: 140,
                    
            }}))
        
}



function getUnsplashFood(){
   return fetch(UrlUnsplashFood)
        .then(response=>response.json())
        .then(data => data.map(responses=>{
            return {
             name: 'oferta',
             image: responses.urls.small,
             likes: 200,
             comments: 140,
                    
            }}))
        
}



function getRandom(){
   return fetch(UrlRandom)
        .then(response=>response.json())
        .then(data => data.map(responses=>{
            return {
             
             image: responses.urls.small,
             
             
                    
        }}))}
        
      
            


function getUnsplashParty(){
   return fetch(UrlUnsplashParty)
        .then(response=>response.json())
        .then(data => data.map(responses=>{
            return {
             name: 'oferta',
             image: responses.urls.small,
             likes: 200,
             comments: 140,
                    
            }}))
        
}



function getOferts(){
    return fetch(UrlCategory)
            .then(response =>response.json())
            .then(data=> data.items)
            .then (category => category.map(items=>{
               
                return{
                     
                         
                    idCategoria: items.ofertasPK.idCategoria,
            
                    titulo: items.tituloOferta,
                    precio: items.precio,
                    descripcion: items.descripcion,
                    telefono: items.telefono,
                    letraChica: items.letraChica,
                    cantidadVisitantes: items.cantidadVisitantes,
                    image: items.image,
                
             
            
            }
    })) 
} 

export {getUnsplashFood}
export {getUnsplashSport}
export {getUnsplashParty}
export {getOferts}
export {getRandom}

