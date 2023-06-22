const mammal = {
    color:"orange",
    type : "cat",
    legs:4,
    name:"kitty",
    speed :24
}
function $4_1(){
    window.alert("type : "+mammal.type + "\nname : "+mammal.name)
}

const person = {
    firstName : "John",
    lastName : "Doe",
    id  : 5566,
    fullName : function(){
        return this.firstName+" "+this.lastName;
    }
}
function $4_2(){
    window.alert("Full Name : " + person.fullName() + "\nId : " + person.id)
}

const triangle = {
    height : 25,
    base : 24,
    color : "red",
    area : function(){
        return 0.5 * this.base * this.height
    }
}
function $4_3(){
    window.alert(
        "height : " + triangle.height +
        "\nbase : " + triangle.base +
        "\ncolor : " + triangle.color +
        "\narea : " +  triangle.area()
        )
}

