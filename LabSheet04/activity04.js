class Employee {
  constructor (empNum, name, address, contactNum, NIC_Num, joinedDate, designation, salary) {
    this.empNum = empNum
    this.name = name
    this.address = address
    this.contactNum = contactNum
    this.NIC_Num = NIC_Num
    this.joinedDate = joinedDate
    this.designation = designation
    this.salary = salary
  }

  arrive() {
    const arrive_time = new Date()
    var time = arrive_time.getHours().toString() + ":" + arrive_time.getMinutes().toString()
    if (arrive_time.getHours() > 11)
      var format = "PM"
    else
      var format = "AM"
    
    console.log(this.name + " arrives at " + time + format)
  }

  leave() {
    const leave_time = new Date()
    var time = leave_time.getHours().toString() + ":" + leave_time.getMinutes().toString()
    if (leave_time.getHours() > 11)
      var format = "PM"
    else
      var format = "AM"
    
    console.log(this.name + " leaves at " + time + format)
  }

  lunchPreference(preference) {
    this.typeOfLunch = preference

    console.log(this.name + " selects " + preference + " as lunch preference.")
  }

  requestLeave(date, numberOfDays, reason) {
    console.log(this.name + " requests a " + numberOfDays + " days leave since " + date + " becouse of " + reason)
  }
}

class TemporaryEmployee extends Employee {
  constructor(empNum, name, address, contactNum, NIC_Num, joinedDate, designation, salary) {
    super(empNum, name, address, contactNum, NIC_Num, joinedDate, designation, salary);
  }

  requestDutyExtension() {
    console.log(this.name + " requests a duty extension for 03 months.");
  }
}

class PermanentEmployee extends Employee {
  constructor(empNum, name, address, contactNum, NIC_Num, joinedDate, designation, salary) {
    super(empNum, name, address, contactNum, NIC_Num, joinedDate, designation, salary);
  }
}

class ContractEmployee extends Employee {
  constructor(empNum, name, address, contactNum, NIC_Num, joinedDate, designation, salary) {
    super(empNum, name, address, contactNum, NIC_Num, joinedDate, designation, salary);
  }

  requestDutyExtension() {
    console.log(this.name + " request a duty extension for 03 months.");
  }
}

function $super() {
    document.write(
        "<center><img src=\"img/04/superclass.png\"></center>"
    )
}

function $sub() {
    document.write(
        "<center><img src=\"img/04/subclasses.png\"></center>"
    )
}
