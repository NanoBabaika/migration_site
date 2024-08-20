console.log('Hi from map!');

let myMap;

const init = () => {
    myMap = new ymaps.Map("map", {
        center: [55.759854, 37.611693],
        zoom: 13,
        controls:[]
    });
}

ymaps.ready(init);