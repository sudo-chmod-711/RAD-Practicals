class StudentExam {
    #indexNum
    #mcqMarks
    #essayMarks
    #totalMarks

    insertData(indexNum, mcqMarks, eassyMarks) {
        this.#indexNum = indexNum
        this.#mcqMarks = mcqMarks
        this.#essayMarks = eassyMarks
    }

    calculateTotalMarks() {
        this.#totalMarks = this.#mcqMarks + this.#essayMarks
    }

    displayTotalMarks() {
        console.log(
            "Index Number : " + this.#indexNum + "\n" +
            "Total Marks : " + this.#totalMarks
        )
    }

    PassorFail() {
        console.log("Index Number : " + this.#indexNum)
        if (this.#totalMarks >= 50)
            console.log("Status : Pass")
        else
            console.log("Status : Fail")
    }

    displayGrade() {
        console.log("Index Number : " + this.#indexNum)
        if (this.#totalMarks >= 75) {
            console.log("Grade : A")
        } else if (this.#totalMarks >= 65) {
            console.log("Grade : B")
        } else if (this.#totalMarks >= 55) {
            console.log("Grade : C")
        } else if (this.#totalMarks >= 35) {
            console.log("Grade : S")
        } else {
            console.log("Grade : W")
        }
    }   
}

function $insert() {
    document.write(
        "<center><img src=\"img/01/2/insert.png\"></center>"
    )
}

function $calctotal() {
    document.write(
        "<center><img src=\"img/01/2/calctotal.png\"></center>"
    )
}

function $showtotal() {
    document.write(
        "<center><img src=\"img/01/2/showtotal.png\"></center>"
    )
}

function $showpof() {
    document.write(
        "<center><img src=\"img/01/2/showpof.png\"></center>"
    )
}

function $showgrade() {
    document.write(
        "<center><img src=\"img/01/2/showgrade.png\"></center>"
    )
}
