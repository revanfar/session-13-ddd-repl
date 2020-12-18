var Person = require('./domain/person/person.logic');
var Age = require('./domain/age/age.logic');

var person1 = new Person('Revan', '3451332478230016', '1994-07-25');
if (person1.getWeekType() === 'Weekday' || person1.getWeekType() === 'Weekend') {
console.log(`${person1.name} lahir pada tipe minggu ${person1.getWeekType()}`)
} else {
console.log(`Tanggal lahir ${person1.name} bermasalah`)  
}
console.log(`Saat ini berumur ${person1.getAge()}`)

var age1 = new Age('Revan', '3451332478230016', '1994-07-25');
console.log(`Merupakan seorang ${age1.personByAge()}`)