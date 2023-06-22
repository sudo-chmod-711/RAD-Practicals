function $2_1(){
    let Mark1, Mark2, Mark3
    Mark1 = 30
    Mark2 = 40
    Mark3 = 90
    let total = Mark1 + Mark2 + Mark3
    let average = total/3

    window.alert("let Mark1, Mark2, Mark3\nMark1 = 30\nMark2 = 40\nMark3 = 90\nlet total = Mark1 + Mark2 + Mark3  = " + total +"\nlet average = total/3 = "+ average)

}
function $2_2(){
    let name = "Chamodh Henderson"
    let age = 23
    let gender = "Male"

    window.alert("let name = \""+ name +"\"\nlet age = " + age + "\nlet gender = \""+ gender + "\"")

}
function $2_3(){
    var height = 10
    var width = 15
    let area = height * width

    window.alert("var height = 10\nvar width = 15\nlet area = height * width = " + area)

}
function $2_4(){

    let a,b;
    a=10;
    b=20;
    
    a+=b;
    document.write("a +=b = "+a);

    a-=b;
    document.write("<br><br>a -=b = "+a);
    
    a*=b;
    document.write("<br><br>a *=b = "+a);
    
    a/=b;
    document.write("<br><br>a /=b : "+a);
    
    a%=b;
    document.write("<br><br>a %=b : "+a);
}
function $2_5(){
    let x, y, text1, text2
    x = 5
    y = 4
    text1 = "A"
    text2 = "B"

    document.write("x >= y : " + x >= y)
    document.write("<br><br>")
    document.write("x != y : " + x != y)
    document.write("<br><br>")
    document.write("text1 < text2 : " + text1 < text2)



}
function $2_6(){
    let statement1 = "what a very "
    let statement2 = "nice day"
    window.alert("let statement1 = \"what a very \"\nlet statement2 = \"nice day\"\nstatement1 + statement2 = \"" + statement1 + statement2 + "\"")
}

function $2_7(){
    let x, y, z
    x = 5 + 5
    y = "5" + 5
    z = "Hello" + 5
    alert("let x, y, z\nx = 5 + 5 = " + x + "\ny = \"5\" + 5 = " + y + "\nz = \"Hello\" + 5 = " + z);
}



