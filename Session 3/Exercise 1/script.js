import {Park} from "./park.js";
import {Museum} from "./museum.js";
import {Restaurant} from "./restaurant.js";
import {DestinationList} from "./destinationList.js";

/* 

Trả lời câu hỏi:
- Có thể truyền instance của Park, Museum, Restaurant 
cho DestinationList được vì các class trên đều kế thừa từ Destination

*/

let p1 = new Park('park', 1000);
p1.newImage = 'demo_park.jpg';
p1.newImage = 'demo_park_2.jpg';
console.log(p1.info);

let m1 = new Museum('museum', 3000);
m1.newImage = 'demo_museum.jpg';
console.log(m1.info);

let m2 = new Museum('museum', 2000);
m2.newImage = 'demo_museum_2.jpg';
console.log(m2.info);

let r1 = new Restaurant('restaurant', 5000);
r1.newImage = 'demo_restaurant.jpg';
console.log(r1.info);

let des = new DestinationList();

des.addDestination(p1);
des.addDestination(m1);
des.addDestination(m2);
des.addDestination(r1);

des.findDestination('museum');

console.log(`Tong so tien ban phai tra: ${des.totalPrice}`);