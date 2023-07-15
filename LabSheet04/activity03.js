class Dog {
    constructor(Breed, Age, Color){
        this.Breed = Breed
        this.Age = Age
        this.Color = Color
    }

    Eat(){
        return this.Breed + " is Eating"
    }
    Sleep(){
        return this.Breed + " is Sleeping"
    }
    Sit(){
        return this.Breed + " is Sitting"
    }
    Run(){
        return this.Breed + " is Running"
    }
}

const dog1 = new Dog("Pug", 3, "Black")

const dog2 = new Dog("Boxer", 2, "White")

const dog3 = new Dog("Poodle", 1, "Brown")


function $class() {
    document.write(
        "<center><img src=\"img/03/class.png\"></center>"
    )
}

function $obj() {
    document.write(
        "<center><img src=\"img/03/objects.png\"></center>"
    )
}

function $output() {
    window.alert(
        "Breed of the dog 1 is " + dog1.Breed + "\n" +
        dog1.Eat() + "\n\n" +
        "Age of the dog 2 is " + dog2.Age + "\n" +
        dog2.Sit() + "\n\n" +
        "Color of the dog 3 is " + dog3.Color + "\n" +
        dog3.Run()
    )
}

