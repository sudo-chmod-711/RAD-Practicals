function $3_1(){
    let area  = find_area(7)
    let perimeter = find_perimeter(7)
    window.alert(
        "function find_area(r){\n\treturn (Math.PI * r * r)\n}\n" + 
        "let area  = find_area(7) = " + area + "\n\n" +
        "function find_perimeter(r){\n\treturn (2 * Math.PI * r)\n}\n" +
        "let perimeter = find_perimeter(7) = " +  perimeter
    )
}
function find_area(r){
    return (Math.PI * r * r)
}
function find_perimeter(r){
    return (2 * Math.PI * r)
}

function $3_2(){
    let volume = find_volume(5)
    window.alert(
        "function find_volume(a){\n\treturn (a * a * a)\n}\n" + 
        "let volume = find_volume(5) = " + volume
    )

}
function find_volume(a){
    return (a * a * a)
}


function $3_3(){
    window.alert("hello, welcome to our paradise")
}
