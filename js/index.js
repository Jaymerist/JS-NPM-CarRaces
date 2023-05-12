/*


*/


// import our bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';

import '../css/main.css'

// import class here.
import {Car} from '../js/utils/car'

let race = document.querySelector(".car-race")

const racers = [
    "rick",
    "dan",
    "steve"
]


racers.map((racerName)=> {
    // call class here.
    let car = new Car(racerName)
    console.log(car)
    car.addToRace(race)
})





