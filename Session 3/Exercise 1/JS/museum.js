import {Destination} from "./destination.js";

class Museum extends Destination {
    ticketPrice;

    constructor(name, ticketPrice) {
        super(name);
        this.ticketPrice = ticketPrice;
    }
}

export {Museum};