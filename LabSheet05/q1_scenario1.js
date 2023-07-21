class Student {
    #indexNum
    #name
    #dob
    #address
    #contactNum
    #email
    #group
    
    setData(indexNum, name, dob, address, contactNum, email) {
        this.#indexNum = indexNum
        this.#name = name
        this.#dob = dob
        this.#address = address
        this.#contactNum = contactNum
        this.#email = email
    }

    getData() {
        console.log(
            "Index Number : " + this.#indexNum + "\n" +
            "Name : "  + this.#name + "\n" +
            "Date of Birth : " + this.#dob + "\n" +
            "Address : " + this.#address + "\n" +
            "Contact Number : " + this.#contactNum + "\n" +
            "Email Address : " + this.#email + "\n"
        )  
    }

    setGroup() {
        this.#group = (this.#indexNum % 4) + 1
    }

    getGroup() {
        console.log(this.#name + " -> Group " + this.#group)
    }
}

function $setdata() {
    document.write(
        "<center><img src=\"img/01/1/setdata.png\"></center>"
    )
}

function $getdata() {
    document.write(
        "<center><img src=\"img/01/1/getdata.png\"></center>"
    )
}

function $setgroup() {
    document.write(
        "<center><img src=\"img/01/1/setgroup.png\"></center>"
    )
}

function $getgroup() {
    document.write(
        "<center><img src=\"img/01/1/getgroup.png\"></center>"
    )
}
