class TrafficTower {
    constructor() {
        this._airplanes = [];
    }

    register(airplane) {
        this._airplanes.push(airplane);
        airplane.register(this);
    }

    requestCoordinates(airplane) {        
        return this._airplanes.filter(plane => airplane !== plane).map(plane => plane.coordinates);
    }
}

class Airplane {
    constructor(coordinates) {
        this.coordinates = coordinates;
        this.trafficTower = null;
    }

    register(trafficTower) {
        this.trafficTower = trafficTower;
    }

    requestCoordinates() {
        //console.log(this.trafficTower);
        if (this.trafficTower) return this.trafficTower.requestCoordinates(this);
        return null;
    }
}


// Usage

const tower = new TrafficTower();
const airplanes = [new Airplane(10), new Airplane(20), new Airplane(30)];

airplanes.forEach(airplane => {
    tower.register(airplane);
});

console.log(airplanes.map(airplane => airplane.requestCoordinates()));