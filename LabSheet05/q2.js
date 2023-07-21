class Solid {
    calculateSurfaceArea() {
        return 0
    }

    calculateVolume() {
       return 0
    }
}

class Cube extends Solid {
    constructor(side) {
        this.side = side
    }

    calculateSurfaceArea() {
        return 6 * this.side * this.side
    }

    calculateVolume() {
        return this.side * this.side * this.side
    }
}

class Cuboid extends Solid {
    constructor(length, width, height) {
        this.length = length
        this.width = width
        this.height = height
    }

    calculateSurfaceArea() {
        return 2 * ((this.length * this.width) + (this.length * this.height) + (this.width * this.height))
    }

    calculateVolume() {
        return this.length * this.width * this.height
    }
}

class Cylinder extends Solid {
    constructor(radius, height) {
        this.radius = radius
        this.height = height
    }

    calculateSurfaceArea() {
        return 2 * Math.PI * this.radius * (this.radius + this.height)
    }

    calculateVolume() {
        return Math.PI * this.radius * this.radius * this.height
    }
}

class Sphere extends Solid {
    constructor(radius) {
        this.radius = radius
    }

    calculateSurfaceArea() {
        return 4 * Math.PI * this.radius * this.radius
    }

    calculateVolume() {
        return (4 / 3) * Math.PI * this.radius * this.radius * this.radius
    }
}

class Cone extends Solid {
    constructor(radius, height) {
        this.radius = radius
        this.height = height
    }

    calculateSurfaceArea() {
        const middleHeight = Math.sqrt(this.radius * this.radius + this.height * this.height)
        return Math.PI * this.radius * (this.radius + middleHeight)
    }

    calculateVolume() {
        return (1 / 3) * Math.PI * this.radius * this.radius * this.height
    }
}

function $solid() {
    document.write(
        "<center><img src=\"img/02/solid.png\"></center>"
    )
}
function $cube() {
    document.write(
        "<center><img src=\"img/02/cube.png\"></center>"
    )
}
function $cuboid() {
    document.write(
        "<center><img src=\"img/02/cuboid.png\"></center>"
    )
}
function $cylinder() {
    document.write(
        "<center><img src=\"img/02/cylinder.png\"></center>"
    )
}
function $sphere() {
    document.write(
        "<center><img src=\"img/02/sphere.png\"></center>"
    )
}
function $cone() {
    document.write(
        "<center><img src=\"img/02/cone.png\"></center>"
    )
}