class Destination {
    name;
    images = [];
    dateModified;

    constructor(name) {
        this.name = name;
        this.dateModified = new Date().toISOString();
    }

    set newImage(image) {
        this.images.push(image);
    }

    get info() {
        return `
            Dia diem: ${this.name},
            Review dia diem: ${this.images},
            Duoc cap nhat vao luc: ${this.dateModified}
        `;
    }
}

export {Destination};