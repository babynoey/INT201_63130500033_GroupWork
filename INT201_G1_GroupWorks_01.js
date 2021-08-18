

//การประกาศตัวแปร
nickName = "bos"
var name = "Korawit" //var เป็นการประกาสตัวแปรที่สามารถประกาศซ้ำได้ แก้ไข/อัพเดตค่าได้ ทำงานในระดับ function และ global
let lastName = "Wattanatanakun"//let เป็นการประกาสตัวแปรที่สามารถประกาศไม่ซ้ำได้ อัพเดตค่าได้ ทำงานในระดับ block
const id = "63130500001" //const ใช้ในกรณีประกาศเป็นค่าคงที่ ไม่สามารถเปลี่ยนแปลงค่าได้ 
console.log(nickName+" "+name+" "+lastName+" "+id) //เป็นการแสดงผลออกมาบนconsole

var name = "Lisa" //สามารถทำได้
    lastName = "Blackpink" //สามารถทำได้
//const id = "2021" ทำไม่ได้
//    id = "0212"ทำไม่ได้

console.log(nickName+" "+name+" "+lastName+" "+id)


//การประกาศตัวแปร และ ดูชนิดของตัวแปร โดยใช้คำสั่ง typeof variable โดย variable คือ ชื่อตัวแปรที่เราต้องการดูชนิดของมัน
let myNum=0; 
console.log(typeof myNum);

let myString='Good';
console.log(`type of myString is ${typeof myString}`);

let myBool=true;
console.log(`type ofmyBool is ${typeof myBool}`);

let myUndefined;
console.log(`typeof myUndefined is${typeof myUndefined}`);

let mySymbol=Symbol();
console.log(`typeofmySymbolis ${typeof mySymbol}`);

let myNull=null;
console.log(`type of myNull is ${typeof myNull}`);

let myArr=[1,2,3];
console.log(`myArrLength: ${myArr.length}`);
console.log(`typeofmyArr is ${typeof myArr}`);

let myObj={id:1, task:'gradingexam'};
console.log(`${JSON.stringify(myObj)}`);
console.log(`typeof myObj is${typeof myObj}`);



