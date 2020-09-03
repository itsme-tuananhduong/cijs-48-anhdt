import {Destination} from "./destination.js";
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
        return this.destinations.filter(function(x) {
            return x.name === name;
        });
        // console.log(`Danh sach cac dia diem co ten ${name}:`);
        // for (let destination of this.destinations) {
        //     if (destination.name === name) {
        //         console.log(destination);
        //     }
        // }
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

/*

Note:
Phuong thuc mang js:
- duyet mang: for/while, for ... of, forEach
- them phan tu: push(), unshift(), splice()
- xoa phan tu: pop(), shift(), splice()
- noi mang: concat(), push(...)
- cat mang: slice()
- convert mang --> string: join()
- sap xep: sort()
- anh xa thanh 1 mang moi: map()
- loc: filter()
...

*/