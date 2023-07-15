class Rectangle {
    constructor(width, height){
        this.width = width
        this.height = height
    }

    getArea(){
        return this.width * this.height
    }
}

function $1_1() {
    window.alert(
        "class Rectangle {\n" +
        "\n" +
        "}"
    )
}

function $1_2() {
    window.alert(
        "constructor(width, height){\n" +
            "\tthis.width = width\n" +
            "\tthis.height = height\n" +
        "}"
    )
}

const rect1 = new Rectangle(25,12)

function $1_3() {
    window.alert(
        "const rect1 = new Rectangle(25,12)"
    )
}

function $1_4() {
    window.alert(
        "Width of the rectangle is " + rect1.width
    )
}

function $2_1() {
    window.alert(
        "getArea(){\n" +
            "\treturn this.width * this.height\n" +
        "}"
    )
}

const rec1 = new Rectangle(10,16)
const rec2 = new Rectangle(20,15)

function $2_2() {
    window.alert(
        "const rec1 = new Rectangle(10,16)\n" +
        "const rec2 = new Rectangle(20,15)"
    )
}

function $2_3() {
    window.alert(
        "Area of the rectangle 1 is " + rec1.getArea()  + "\n" +
        "Area of the rectangle 2 is " + rec2.getArea()
    )
}

