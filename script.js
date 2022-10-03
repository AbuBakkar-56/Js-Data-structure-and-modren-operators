//Data structures and modren operators
//1-Enhanced Object Literals
name:'Porturus';
mainMenues=['Pasta','Pizza','Parse Chicken'];
const weekDays=['sat','sun','mon','tue']
let resturant={
    name,
    city:'Porturus',
    location:'Streen 7 9th ave Porturus',
    availblefacilities:['foods','gym','security','rooms'],
    starterMenue:['Noodels','Spongus','Grocus','Dines'],
    mainMenues,
    timings:{
        [weekDays[0]]:{
            open:12,
            close:22
        },
        [weekDays[1]]:{
            open:12,
            close:22
        },
        [weekDays[2]]:{
            open:12,
            close:22
        }
    },
    orderfood(order1,order2){
        return [order1,order2]
    }
}
console.log(resturant);
//2-for of loop
for(let menue of resturant.starterMenue.entries()){
    console.log(menue)
}
//3-sets
let students=new Set([
    'Hassan',
    'Ali',
    'Noman',
    'Hassan',
    'Imran',
    'Ali',
    'Nadeem'
]);
console.log(students);
console.log(students.size);
console.log(students.has('Hassan'))
console.log(students.delete('Hassan'))
console.log(students.add('Ijaz'));
console.log(students.clear);
//Array destrucuring
const resturant1={
    name:'Sarena Hotel Islamabad',
    city:'Islamabad',
    location:'Sector E-9 Kashmir Highway Islamabad',
    stars:5,
    availblefacilities:['Rooms','food','Gym','Security'],
    starterMenue:['Pizza','Spongys','Noodls'],
    mainMenues:['Pasta','french Toasts','Chinese rice'],
    orderfood:function(order1,order2){
        return [this.starterMenue[order1],this.mainMenues[order2]]
    }
};
let[order1,order2]=resturant1.orderfood(1,2);
console.log(order1,order2)
let cals=function(n1,n2){
    let sum=n1+n2;
    let multiply=n1*n2;
    let subtract=n1-n2;
    let divide=n1/n2;
    return [sum,multiply,subtract,divide]
};
let[sum,multiply,subtract,add]=cals(90,12);
console.log(sum,multiply,subtract,add);
let quizKey={
    name:'MCSPA',
    takeBy:'UERS',
    totalMarks:50,
    passingMarks:29,
    ['Q1-Mathematical Induction of 78%-22/sin11']:[32,43,11.2,33],
    ['Q2-Numeric Passege Value of 283sin2/tan2']:[62.2,233.2,222.2,122.32],
    ['Q3-Calculate Parse Value of 45-12(1/tan)/22(tan3)']:[332,222,11,2221],
    ['Q4-Simplyfy the equation:89-22(1/2*2)/tan9+tan88']:[44,33,11,33],
    ['Q5-Calculate Numeric Induxtion Value using hash table data(22,2232,11.21)']:[22.1,223.21,22.22,299],
    answerKeys(key1,key2,key3,key4,key5){
        return[this["Q1-Mathematical Induction of 78%-22/sin11"][key1],this["Q2-Numeric Passege Value of 283sin2/tan2"][key2],this["Q3-Calculate Parse Value of 45-12(1/tan)/22(tan3)"][key3],this["Q4-Simplyfy the equation:89-22(1/2*2)/tan9+tan88"][key4],this["Q5-Calculate Numeric Induxtion Value using hash table data(22,2232,11.21)"][key5]]
    },
    detailsAnswers:function({name,details,k1,k2,k3,k4,k5}){
       return console.log(`${name} ${details} Answer of Q1 is ${this["Q1-Mathematical Induction of 78%-22/sin11"][k1]} Answer of Q2 is ${this["Q2-Numeric Passege Value of 283sin2/tan2"][k2]} Answer of Q3 is ${this["Q3-Calculate Parse Value of 45-12(1/tan)/22(tan3)"][k3]} Answer of Q4 is ${this["Q4-Simplyfy the equation:89-22(1/2*2)/tan9+tan88"][k4]} Answer of Q5 is ${this["Q5-Calculate Numeric Induxtion Value using hash table data(22,2232,11.21)"][k5]}`);
    }
};
let[answerQ1,answerQ2,answerQ3,answerQ4,answerQ5]=quizKey.answerKeys(1,2,1,2,2);
console.log(answerQ1,answerQ2,answerQ3,answerQ4,answerQ5);
let arrays=[21,23,23,13];
let[a1,a2,a3,a4]=arrays;
[a1,a2,a3,a4]=[a4,a3,a2,a1]
console.log(a1,a2,a3,a4);
let[nam1='Ali',nam2='Ali']=['Hassan'];
console.log(nam1,nam2);
//Object Destrucuring
let{starterMenue:a,availblefacilities:b}=resturant1;
console.log(a,b)
let{maeni=[],availblefacilities:z1}=resturant1;
console.log(maeni,z1)
// console.log(starterMenue,availblefacilities);
//if a function have too many numbers of arguments than we can destrure it
quizKey.detailsAnswers({
    name:'Nutch Entery Test',
    details:'Entry test for DEE',
    k1:1,
    k2:2,
    k3:1,
    k4:3,
    k4:2,
    k5:3,
})
//Spread Operator
let array=[21,2,323,1,];
let clone=[...array]
console.log(array);
console.log(clone)
console.log(...array)
let s4Courses=['OOAD','BPE','DSA','IDS','SRE'];
let s3Courses=['SMM','LA','ISE','OOP','IWVC'];
let s2Courses=['DLCA','Pf','QS','CPS','PS'];
let s1Courses=['EGC','AP','ITC','DS','CAG'];
let allCorsesStudied=[...s1Courses,...s2Courses,...s3Courses,...s4Courses];
console.log(allCorsesStudied);
console.log(...allCorsesStudied);
let allQues=[[...quizKey["Q1-Mathematical Induction of 78%-22/sin11"]],[...quizKey['Q2-Numeric Passege Value of 283sin2/tan2']],[...quizKey["Q3-Calculate Parse Value of 45-12(1/tan)/22(tan3)"]],[...quizKey["Q4-Simplyfy the equation:89-22(1/2*2)/tan9+tan88"]],[...quizKey["Q5-Calculate Numeric Induxtion Value using hash table data(22,2232,11.21)"]]];
console.log(...allQues)
//rest Operator(opposite to spread operator and on the right hand side)
let[v1,v2,...rest]=[22.3,323,222,31,332,3];
console.log(v1,v2,rest)
let[c1,c2,...rests]=[...allCorsesStudied];
console.log(c1,c2,rests)
//we can pass as much as number of arguments using spread operator
let sums=function(...numbers){
    return numbers.reduce(function(total,sum){
        return total+sum;
    },0)
};
console.log(sums(923,23,43,43))
//working with strings
let airLine='Tap Air portugal';
console.log(airLine.length)
console.log(airLine.toLowerCase());
console.log(airLine.toUpperCase());
console.log(airLine.slice(0,2));
console.log(airLine.slice(-4));
console.log(airLine.includes('a'));
console.log(airLine.includes('Tap'));
console.log(airLine.indexOf('a'));
console.log(airLine.lastIndexOf('a'))
console.log(airLine.startsWith('T'));
console.log(airLine.endsWith('l'));
console.log(airLine.split(' '));
console.log(airLine.split('a'));
console.log(airLine.replace('a'),'q');
console.log(airLine.replaceAll('a'),'s');
console.log(airLine.trim())
//practical Examples
//validating user email
let validateEmail=function(email){
    let emailToStr=email;
    if(emailToStr.includes('.com') && emailToStr.includes('@') && emailToStr.includes('gmail') && emailToStr.length>6){
        console.log('Valid Email')
    }else{
        console.log('Invalid Email')
    }
}
validateEmail('abu345236@gmail.com');
validateEmail('furqaniqbla37@gmail.com')
validateEmail('ahd32.com')
//capitalizing user name
let getUserName=function(name){
   let uName=name.trim();
   let validName=uName.toLowerCase();
   let fullValidName=validName[0].toUpperCase()+validName.slice(1);
   return fullValidName;
};
console.log(getUserName('hassan'))
console.log(getUserName('zUns'));
//enctypting user atm card
let getCardNumber=function(number){
    let tostr=number.toString();
    let encform=tostr.replace(tostr.slice(-4),'****');
    return encform;
}
console.log(getCardNumber('3324455344358'))
let validteUsername=function(userName){
    let usersName=userName.toString();
    if(usersName.startsWith('1') || usersName.endsWith('2')){
        console.log('Invalid Name')
    }else{
        console.log('Valid Name')
    }
}
validteUsername('hassan');
validteUsername('123Hassan');
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
  for(const flight of flights.split('+'))
  {
    const[type,from,to,time]=flight.split(';');
    console.log(to)
    const data=`${type.replaceAll('_',' ')} ${from.slice(0,3).toUpperCase()} ${to.slice(0,3).toUpperCase()} ${time.replace(':','h')}`
    console.log(data)
  }
//Maps
let student=new Map();
student.set('Name','Ali').set('RollNo',21).set('city','Lahore').set('Hobbies',['Playing Cricker,Watching football']);
console.log(student)
//methods
console.log(student.size)
console.log(student.delete('Name'));;
console.log(student.has('RollNo'))
// console.log(student.clear)
console.log(student.get('RollNo'))
console.log(student);
let restrurant2=new Map();
restrurant2.set('name','SPTS').set('city','Islamabad')
console.log(restrurant2)
//has,get,delete,clear,size
//short circuting
//||(will look for truthy values when fount stop execution)
console.log(3||undefined);
console.log(undefined||null);
console.log(undefined||0||null||33||'script');
let resturants={
    name:'Koala',
    city:'Islamabad',
    location:'Etc',
    openingTime:'',
};
let as=resturants.openingTime || 12;
console.log(as)
resturants.openingTime=as;
console.log(resturants);
//&& operator(will look for falsy value when found stops execution)
console.log(undefined && 4);
console.log(43 && 222 && 0);
let accont={
    name:'Zb-3233',
    Balance:0,
    PayBack:this.Balance*0.1
}
let c=accont.Balance && 10;
accont.Balance=c
console.log(c)
console.log(accont)
//nullish coelsing Operator ??.
let classs={
    name:'ES-22',
    Dept:'DCSSE',
    Students:0,
};
let cc=classs.Students??'TBD';
classs.Students=cc
console.log(classs)
//Logical Assignment Operator
//||==
//&&==
// ??==
let std1={
    name:'Jonas',
    RollNo:23223,
    age:'',
    gpa:0,
};
//&&= Logical operator(||= &&= ??=)
std1.age||='<Not Provides>';
console.log(std1.age)
std1.gpa??=2;
console.log(std1.gpa);
std1.age=std1.age&&10;
console.log(std1.age)
//optional chaining ?.
const days=['sat','sun','mon','tue','wed','thu','fri']
let resort={
    name:'Resorto',
    city:'Islamabad',
    location:'1-9 Sector Avenue Isd',
    stMenue:['Pizza','Pasta','Noodels'],
    mnMenue:['Karahi','Biryani','Toasts'],
    timings:{
        [days[0]]:{
            open:11,
            close:22
        },
        [days[1]]:{
            open:11,
            close:22,
        },
        [days[2]]:{
            open:1,
            close:22,
        }
    }
};
console.log(resort.timings.fri?.open);
console.log(resort.timings.tue?.open);
for(const day of days){
    const data=resort.timings[day]?.open??'Close';
    console.log(`On ${day} we open at ${data}`);
}
console.log('........................')
const products=['Mobiles','Laptops','Grocries','Stones','Tabs','Beds','Tossas'];
let Store={
    name:'Moss Store',
    descrtiption:'Ecom Store',
    ratings:3.1,
    productIds:{
        [products[0]]:{
            Pid:'1MS',
            Cid:'ci1Ms'
        },
        [products[1]]:{
            Pid:'2LS',
            Cid:'ci2Ms'
        },
        [products[2]]:{
            Pid:'3Gs',
            Cid:'ci3Ms'
        }
    }
};
console.log(Store.productIds.Stones?.Pid)
for(let p of products){
    const dm=Store.productIds[p]?.Pid || 'Product To Be launch sooner';
    console.log(`${p} have product id of ${dm}`)
};
//optional chaining
const apiKey={
    "data": [{
      "type": "articles",
      "id": "1",
      "attributes": {
        "title": "JSON:API paints my bikeshed!",
        "body": "The shortest article. Ever.",
        "created": "2015-05-22T14:56:29.000Z",
        "updated": "2015-05-22T14:56:28.000Z"
      },
      "relationships": {
        "author": {
          "data": {"id": "42", "type": "people"}
        }
      }
    }],
    "included": [
      {
        "type": "people",
        "id": "42",
        "attributes": {
          "name": "John",
          "age": 80,
          "gender": "male"
        }
      }
    ]
  }
  let aa=(apiKey['included'].name?.key||'smith');
  apiKey['included'].name=aa;
  console.log(apiKey['included'])
  //Looping Objects
  //Object methods
  //Object.keys
  //Object.values
  //Object.entries()
  const keys=Object.keys(Store.productIds)
  const values=Object.values(Store.productIds)
  const entries=Object.entries(Store.productIds)
  console.log(keys);
  console.log(values);
  console.log(entries)
  //entries
  for(let [day,{open,close}] of entries){
    console.log(day,open,close )
  }
  console.log('.....................')
  //optional chaining ?.
  let Mobiles=['Samsung A-19','Galaxy A-90','Oppo f-10','Iphone 12','Galaxy Duo','Surface Due'];
  let shop={
    name:'Mobile Ecoms',
    SallerLeval:2,
    Rattings:4.2,
    Products:{
        [Mobiles[0]]:{
            price:30000,
            DataToLaunch:'3/3/2022'
        },
        [Mobiles[1]]:{
            price:21000,
            DataToLaunch:'3/4/2023'
        },
        [Mobiles[2]]:{
            price:31000,
            DataToLaunch:'2/2/2020'
        }
    }
  };
console.log(shop.Products.Iphone?.price);
for(const i of Mobiles){
    let data=shop.Products[i]?.price ?? 'Product Not Availble';
    console.log(`${i} have price of ${data}`)
};
let value=Object.values(shop.Products);
let key=Object.keys(shop.Products);
let entrie=Object.entries(shop.Products);
console.log(value);
console.log(key);
console.log(entrie)
for(const [Mobile,{price,DataToLaunch}] of entrie) {
    console.log(`${Mobile} have price of ${price} and launch date of ${DataToLaunch}`)
};
//