class Book {
    constructor(name, price, author, publisher) {
        this.name = name
        this.price = price
        this.author = author
        this.publisher = publisher
    }

    calculateDiscount() {
        return 0
    }

    calculateNewPrice() {
        return this.price - (this.price * this.calculateDiscount() / 100)
    }

    displayDetails() {
        console.log(
            "Name : " + this.name + "\n" +
            "Price : $" + this.price + "\n" +
            "Author : " + this.author + "\n" +
            "Publisher : " + this.publisher + "\n" +
            "Discount : " + this.calculateDiscount() + "% off\n" +
            "New Price : $" + this.calculateNewPrice() + "\n"
        )
    }
}

class EducationalBook extends Book {
    calculateDiscount() {
        return 20
    }
}

class Novel extends Book {
    calculateDiscount() {
        return 15
    }
}

class ShortStory extends Book {
    calculateDiscount() {
        return 15
    }
}

class Biography extends Book {
    calculateDiscount() {
        return 10
    }
}

function $subclasses() {
    document.write(
        "<center><img src=\"img/03/subclasses.png\"></center>"
    )
}

function $superclass() {
    document.write(
        "<center><img src=\"img/03/superclass.png\"></center>"
    )
}
