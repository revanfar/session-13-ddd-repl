var Person = require('./domain/person/person.logic');
var PersonAge = require('./domain/personAge/personAge.logic');

var person = new Person('Revan', '3451332478230016', '1994-07-25');
console.log(`Function input -> {"Name": "${person.name}", "NIK": "${person.nik}","Date of birth": "${person.dateOfBirth}" `)
if (person.getWeekType() === 'Weekday' || person.getWeekType() === 'Weekend') {
    console.log(`${person.name} lahir pada tipe minggu ${person.getWeekType()}`)
    } else {
    console.log(`Tanggal lahir ${person.name} bermasalah`)  
    }

console.log(`Saat ini berumur ${person.getAge()}`)

var age = new PersonAge('Revan', '3451332478230016', '1994-07-25');
console.log(`Merupakan seorang ${age.personByAge()}`)