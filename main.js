const API_KEY = "ad8b44756bb436d48b63204a61cbdd71";


const button = document.getElementById('sendButton');
const main = document.getElementById('main');
const inputElement = document.getElementById('inputCity');

const spinner = document.getElementById('spinner');

button.addEventListener("click", ()=> {
    //console.log(inputElement.value);
    buscarCiudad(inputElement.value);
});

function buscarCiudad (ciudad){
    
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&units=metric&appid=${API_KEY}`
        )
    .then(function(response){
        console.log(response);
         if (response.status == 404){
            console.log('error 404!!');
        }
        return response.json();
    }).then(function(responseJson){
        console.log('imprimo json', responseJson);
        madeGrid(responseJson.data);
    })
    .catch(function(error){
        console.log('Fallo!', error);
    })
};