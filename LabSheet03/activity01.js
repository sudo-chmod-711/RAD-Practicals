let text1 = "Programmo"
let text2 = "Phobia"

let text = concatinate(text1,text2)

function concatinate(str1,str2) {
    return str1.concat(str2)
}

function $1_1() {
    window.alert(
        "function concatinate(str1,str2) {\n" +
            "\treturn str1.concat(str2)\n" +
        "}\n\n" +
      
        "concatinate(\"Programmo\",\"Phobia\") --> " + text
    )
}


function lower(str) {
    return str.toLowerCase()
}

function $1_2_a() {
    window.alert(
        "function lower(str) {\n" +
            "\treturn str.toLowerCase()\n" +
        "}\n\n" +
      
        "lower(\"ProgrammoPhobia\") --> " + lower(text)
    )
}


function upper(str) {
    return str.toUpperCase()
}

function $1_2_b() {
    window.alert(
        "function upper(str) {\n" +
            "\treturn str.toUpperCase()\n" +
        "}\n\n" +
      
        "upper(\"ProgrammoPhobia\") --> " + upper(text)
    )
}


function splitComma(str) {
    return str.split(",")
}

function $1_2_c() {
    window.alert(
        "function splitComma(str) {\n" +
            "\treturn str.split(\",\")\n" +
        "}\n\n" +
      
        "splitComma(\"Programmo,Phobia\") --> " + splitComma("Programmo,Phobia")
    )
}


function index(str) {
    return str.indexOf("Phobia") 
}

function $1_2_d() {
    window.alert(
        "function index(str) {\n" +
            "\treturn str.indexOf(\"Phobia\")\n" +
        "}\n\n" +
      
        "index(\"ProgrammoPhobia\") --> " + index(text)
    )
}