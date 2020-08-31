import {Destination} from "./destination.js";
import {Park} from "./park.js";
import {Museum} from "./museum.js";
import {Restaurant} from "./restaurant.js";
import { Destination } from "./destination.js";

class DestinationList {
    destinations = [];
    dateModified;

    constructor() {
        this.dateModified = new Date().toISOString();
    }

    addDestination(destination) {
        if (destination instanceof Destination) {
            this.destinations.push(destination);
        }
        else {
            console.log('ERROR');
        }
    }

    findDestination(name) {
        console.log(`Danh sach cac dia diem co ten ${name}:`);
        for (let destination of this.destinations) {
            if (destination.name === name) {
                console.log(destination);
            }
        }
    }

    get totalPrice() {
        let totalPrice = 0;
        for (let destination of this.destinations) {
            if (destination instanceof Restaurant) {
                totalPrice += destination.buffetPrice;
            }
            else {
                totalPrice += destination.ticketPrice;
            }
        }
        return totalPrice;
    }
}

export {DestinationList};