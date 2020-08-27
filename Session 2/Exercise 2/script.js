class meal {
    name;
    foods;
    dateModified;
    constructor(name, foods) {
        this.name = name;
        this.foods = [];
        this.dateModified = new Date().toISOString();
    }
    addFood(food) {
        this.foods.push(food);
    }
    calculatePrice() {
        let totalPrice = 0;
        for (let food of this.foods) {
            totalPrice += food.price;
        }
        console.log(`Tong so tien cho bua an: ${totalPrice}`);
    }
    show() {
        console.log(`${name} gom co ${foods} duoc tao luc ${dateModified}`);
    }
}

class vegetableMeal extends meal {
    name;
    foods;
    dateModified;
    constructor(name, foods) {
        super(name, foods) {
            this.name = name;
            foods = [];
            this.dateModified = new Date().toISOString();
        }
    }
    addFood(vegetableFood) {
        this.foods.push(vegetableFood);
    }
    calculatePrice() {
        let totalPrice = 0;
        for (let food of this.foods) {
            totalPrice += food.price;
        }
        console.log(`Tong so tien cho bua an: ${totalPrice - (totalPrice * 0.15)}`);
    }
}

class nonVegetableMeal extends meal {
    name;
    foods;
    dateModified;
    constructor(name, foods) {
        super(name, foods) {
            this.name = name;
            foods = [];
            this.dateModified = new Date().toISOString();
        }
    }
    addFood(nonVegetableFood) {
        this.foods.push(nonVegetableFood);
    }
    calculatePrice() {
        let totalPrice = 0;
        for (let food of this.foods) {
            totalPrice += food.price;
        }
        console.log(`Tong so tien cho bua an: ${totalPrice - (totalPrice * 0.05)}`);
    }
}

class food {
    name;
    luxuriousName;
    price;
    constructor(name, luxuriousName, price) {
        this.name = name;
        this.luxuriousName = luxuriousName;
        this.price = price;
    }
}

class vegetableFood extends food {
    name;
    luxuriousName;
    price;
    constructor(name, luxuriousName, price) {
        super(name, luxuriousName, price) {
            this.name = name;
            this.luxuriousName = luxuriousName;
            this.price = price;
        }
    }
}

class nonVegetableFood extends food {
    name;
    luxuriousName;
    price;
    constructor(name, luxuriousName, price) {
        super(name, luxuriousName, price) {
            this.name = name;
            this.luxuriousName = luxuriousName;
            this.price = price;
        }
    }
}