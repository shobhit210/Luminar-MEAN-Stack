// function person (first_name,last_name){
//     this.firstname = first_name;
//     this.lastname = last_name;
// }

// let obj1 = new person("shobhit","nair");
// let obj2 = new person("aparna","pillai");
// console.log(obj1);
// console.log(obj1.lastname);
// console.log(obj2.firstname);
// console.log(`${obj1.firstname}`);



// Using Class
// class vehicle{
//     constructor(name,maker,engine){
//         this.bikename = name;
//         this.company = maker;
//         this.enginecapacity = engine;
//     }
//     getDetails(){
//         return (`The name of the bike is ${this.bikename}`);
//     }
// }

// let bike1 = new vehicle('Hayabusa','Suzuki','1340cc');
// let bike2 = new vehicle('Ninja','Kawasaki','998cc');

// console.log(bike1);
// console.log(bike2);
// console.log(bike1.getDetails());



//encapsulation example
class person{
    constructor(name,phone,id){
        this.personname = name;
        this.personphonenumber = phone;
        this.personidentity = id;
    }

    add_Address(add){
        this.address = add;
    }

    get_details(){
        return (`The name of the person is ${this.personname}. The phone number of the person is ${this.personphonenumber}. The id of the person is ${this.personidentity}. The person stays in ${this.address}`);
    }

    get_addressdetails(){
        return (`The address of the person is ${this.address}`);
    }
}

var person1 = new person("Shobhit","9665","12900");
var person2 = new person("Aparna","1230","69")

// person1.add_Address("Pune");
// console.log(person1.get_addressdetails());
// console.log(person1);
person2.add_Address("Pathanamthitta");
console.log(person2);
console.log(person2.get_details());




//Inhertiance example
class person{
	constructor(name){
		this.name = name;
	}
	//method to return the string
	toString(){
		return (`Name of person: ${this.name}`);
	}
}

class student extends person{
	constructor(name,id){
		//super keyword to for calling above class constructor
		super(name);
		this.id = id;
	}
	toString(){
		return (`${super.toString()},Student ID: ${this.id}`);
	}
}
let student1 = new student('Mukul',22);
console.log(student1.toString());

