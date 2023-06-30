function $2_1() {
    document.getElementById("input").onclick = function () {
        var input1 = document.getElementsByName("input1")
        var bool1 = Array.from(input1).find((radio) => radio.checked)

        var input2 = document.getElementsByName("input2")
        var bool2 = Array.from(input2).find((radio) => radio.checked)

        if (bool1.value == "1" && bool2.value == "1") {
            window.alert("true")
        } else {
            window.alert("false")
        }
     }
}

function $2_2() {
    let number = Number(document.getElementById('Q2').value)
    if (number > 0) {
        window.alert("type of " + number + " --> " + typeof number)
    } else {
        window.alert("Invalid Input! Please enter a natural number.")   
    } 
}

function $2_3() {
    var date = new Date
    window.alert(
        "var date = new Date\n" + 
        "typeof date is " + typeof date +
        "\n\ndate --> " + date
    )
}

function $2_4() {
    var str = "OceanGate"
    var length = str.length
    window.alert(
        "var str = \"OceanGate\"\n" +
        "var length = str.length --> " + length
    )
}
    