function $5_1() {
  const time = new Date()
  let hour = time.getHours()

  if (hour < 10) {
    window.alert("Good Morning!")
  } else if (hour < 20) {
    window.alert("Good Day!")
  } else {
    window.alert("Good Evening!")
  }
}

function $5_2() {
  let fruit = document.getElementById("frt").value
  switch (fruit) {
    case "banana":
      window.alert("Yellow")
      break

    case "pineapple":
      window.alert("Orange")
      break

    case "apple":
      window.alert("Green")
      break

    default:
      window.alert("Invalid Input!")
      break
  }
}

function $5_3() {
  let num1, num2, num3
  x = document.getElementById("num1").value
  y = document.getElementById("num2").value
  z = document.getElementById("num3").value

  window.alert("Maximum number is " + maximum(x,maximum(y,z)))
}
function maximum(a,b){
  if (a > b) {
      return a
  } else {
      return b
  }
}

function $5_4() {
  var X = document.getElementById("num").value
    if (X == 0 || X == 1){
      window.alert(X + " is NOT a prime number")
    } else if (X >= 2){
      var count = 0
      for (let i = 2; i < X; i++){
        if (X % i == 0) {
            count++
            break
        }
       
      }
      if (count == 0) {
          window.alert(X + " is a prime number")
      } else {
          window.alert(X + " is NOT a prime number")
      }
    } else {
      window.alert("Invalid Input!")
    }
}

function $5_5() {
  for (let i = 0 ; i < 30 ; i++) {
    if (i % 2 != 0) {
      document.write(i + "<br>")
    }
  }
}

function $5_6() {
  const array = ["s","u","d","o","-","c","h","m","o","d","-","7","1","1"]
  for (let i = 0 ; i < array.length ; i++) {
    document.write(array[i] + "<br>")
  }
}

function $5_7() {
  const numbers = [80, 30, 40, 50, 23]
  numbers[2] = 78
  numbers.sort()

  window.alert(
    "  i. numbers[2] = 78\n" +
    " ii. numbers.length =  " + numbers.length +
    "\niii. Sorted array : " + numbers)
}

function $5_8() {
  const names = ["sadun", "kamal",  "nimal", "ruwan"]
        
  let str = ""
  for (let q = 0; q < names.length; q++) {
      str += names[q]
  }
  document.write("  i. " + str + "<br>")

  names.pop()
  document.write("ii. ")
  for (let i = 0; i < names.length; i++) {
      document.write(names[i] + " ")
  }
  document.write("<br>")
  names.push("nuwani")
  document.write("iii. ")
  for (let j = 0; j < names.length; j++) {
      document.write(names[j] + " ")
  }

}
function $5_9() {
  const myGirls = ["Cecilie", "Lone"]
  const myBoys = ["Emil", "Tobias", "Linus"]
  const myChildren = myGirls.concat(myBoys);
  window.alert(
    "const myGirls = " + myGirls +
    "\nconst myBoys = " + myBoys +
    "\nconst myChildren = myGirls.concat(myBoys)" +
    "\nmyChildren = " + myChildren
  )
}
function $5_10() {
  const numbersArray = [1, 13, 22, 123, 49]
  let sum = 0
  for (let i = 0 ; i < numbersArray.length ; i++) {
    sum += numbersArray[i]
  }
  window.alert("const numbersArray = " + numbersArray +
  "\nThe sum is " + sum)
}
