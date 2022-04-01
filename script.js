const array1=[23, 45, 67, 78, 91];
const array2=array1.map((x)=>(x+10))
console.log(array2)

const arrayfilter=[23,45,67,78,91];
const arrayfilter2=arrayfilter.filter((x)=>x<65);
console.log(arrayfilter2)

const ArrayIntern=[
{
    id:1,
    name:"manikanta",
} ,
{
    id:2,
    name:"mani",

},
{
    id:3,
    name:"varma",
},
] ;

  ArrayIntern.filter((x)=>(x.id<=2)).map((y)=>console.log(y))

const arrayReducer=[23,45,67,78,91];
const arrayReducer2=arrayReducer.reduce((acc,curr)=>acc+curr);
console.log(arrayReducer2)


const str=`peter is a good friend of Mike. peter is working in a IT company in Australia`;
const str2=str.replace("peter","john")
console.log(str2)

const obj={
    name:"manikanta",
    id:20,
    college:"pragati"
}

const obj2=new Object();
obj2.name="manikanta";
obj2.id="20";
obj2.location="secunderabad";
console.log(obj2)

function Person (name,age,id){
    this.name=name;
    this.age=age;
    this.id=id;
}
const person1=new Person("varma",23,25)
console.log(person1)


const data={
    name:"joseph",
    age:22,
    salary:"20k"
}


var data1=[];
var data2=[]
for (let x in data) {
   data1.push(x);
   data2.push(data[x]);
}

console.log(data1);
console.log(data2);

const Objects={
    name:"manikanta",
    college:"pragati",
    Function1:function (id,location1){
        console.log(`iam ${this.name} id number is ${id} studies in ${this.college} engineering  college loacated in ${location1}`)
    }
}
Objects.Function1.call(Objects,1214,"hyderabad")
Objects.Function1.apply(Objects,[1214,"chennai"])
const Function2=Objects.Function1.bind(Objects)
Function2(1214544,"mumbai")

const String1="manikanta"
const String2=String1.split("")
console.log(String2.reverse().join(""));


const ReverseString="Hello this is me";
const splitString2=ReverseString.split("")
const ReverseString2=splitString2.reverse();
const ReverseString3=ReverseString2.join("");
console.log(ReverseString3)