// //Task-1//
// console.log("My name is Tural");

// //Task-2//
// const name="Tural";
// const surName="Sadiqov";
// console.log(`${name} ${surName}`);

// //Task-3//
// let person="Tural";
// console.log(person);

// let $add="Sadiqov";
// console.log($add);

// //Task-4//
// let bookPrice=750;
// let bookAmmount=14;
// let letTotalPrice=bookPrice*bookAmmount;
// console.log(letTotalPrice);

// //Task-5//
// let kmHSpeed=75;
// let time=3600;
// let msSpeed=kmHSpeed*1000/time;
// console.log(msSpeed);

// //Task-6//
// let birthdate=prompt("Dogum gununuzu daxil edin:");
// let thisyear=prompt("Ili daxil edin:")
// let days=(thisyear-birthdate)*365;
// console.log(days);

// // //Task-7//
// let num=prompt("Eded daxil edin:");
//  let Quvvet=num**5;
// console.log(Quvvet);
// let qaliq=num%3;
// console.log(qaliq);

// //Task-8//
// let firstName=prompt("First Name daxil edin");
// let lastName=prompt("Last Name daxil edin");
// console.log(`${firstName} ${lastName}.Tanisligimiza cox sadam`);

// //Task-9//
//  let firstName=prompt("First Name daxil edin");
//  let lastName=prompt("Last Name daxil edin");
//  console.log(`Sizi bir daha gormeyimize cox sadiq ${firstName} ${lastName}`);

// //Task-10//
// let fullName="Tural Sadiqov";
// let count=fullName.length-1;
// console.log(count);

// //Task-11//
// let fullName="Tural Sadiqov";
// let arrayFullName=fullName.split(" ");
// let names=arrayFullName[0][0];
// let surname=arrayFullName[1][0];
// console.log(`${names} ${surname}`);

// //Task-12//
// let fullName=prompt("Ad ve Soyadinizi daxil edin:");
// console.log(fullName);
// let arrayFullName=fullName.split(" ");
// let names=arrayFullName[0];
// let surName=arrayFullName[1];
// console.log(`${surName} ${names}`);

// //Task-13//
// let names=prompt("Adinizi daxil edin");
// console.log(`Salam,${names}`);

// //Task-14//
// let num1=+prompt("Birinci ededi daxin:");
// let num2=+prompt("Ikinci ededi daxil edin:");
// console.log(num1+num2);
// console.log(num1-num2);
// console.log(num1*num2);
// console.log(num1/num2);

// //Task-15//
// let num1=12345;
// let num2=98765;
// let Strnum1=String(num1);
// let Strnum2=String(num2);
// let hasil=Strnum1*Strnum2;
// console.log(hasil);
// let sixthnum=hasil[0];
// console.log(sixthnum); //Soruscam//

//Task-16//
// "" + 1 + 0 =10;

// "" - 1 + 0 =-1;

// "true" - false =NaN;

// 6 / "3" =2;

// 4 + 5 + "px" =9px;

// "$" + 4 +5 = $45;

// "4" - 2 =2;

// "4px" - 2 + "px" =NaNpx;

// 7 / 0 =Infinity;

// "-9" + 5 =-95;

// "-9" - 5 =-14;

// null + 1 =1;

//     undefined + 1 =undefined;

// //Task-17//
// let dordReqemli=prompt("$reqemli eded daxil et:");
// let total=Number(dordReqemli[0])+Number(dordReqemli[1])+Number(dordReqemli[2])+Number(dordReqemli[3]);
// console.log(total);

// //Task-18//
// let fullName=prompt("Ad soyadi daxil edin:");
// let nameSurname=fullName.split(" ");
// let names1=nameSurname[0];
// console.log(`Salam,${names1}!`);

// //Task-19//
// let price=prompt("xxx.xxx formatinda qiymet daxil edin:");
// console.log(price);
// let priceArray=price.split(".");
// let manat=priceArray[0];
// let qepik=priceArray[1];
// console.log(`${manat}manat ${qepik}qepik`);

// // Task-20//
// let emekHaqqi=prompt("EmekHaqqinizi daxil edin:")
// let vergi=13;
// let vergiprice=emekHaqqi*vergi/100;
// let vergisiz=emekHaqqi-vergiprice;
// console.log(vergisiz);

// //Task-21//
// let fullName=prompt("Soyad Ad Ata adi");
// let splitFullName=fullName.split(" ");
// let surname=splitFullName[0];
// let names=splitFullName[1][0];
// let fatherName=splitFullName[2][0];
// console.log(`${surname} ${names}.${fatherName}.`);

// //Task-22//
// let mebleg=prompt("Meblegi daxil et:");
// let muddet=prompt("Muddeti daxil edin:")
// let faiz=prompt("Faizi daxil edin:");
// let menfeet=mebleg*faiz/100*muddet;
// console.log(menfeet);

//Task-23//

// //Task-24//
// let age=prompt("Yasinizi daxil edin");
// console.log(age);
// if(age<18){
//     alert("Access denied");
// }
// else{
//     alert("Access denied ");
// }

// //Task-25//
// let num1 = prompt("num-1");
// console.log(num1);
// let num2 = prompt("num-2");
// console.log(num2);
// let num3 = prompt("num-3");
// console.log(num3);
// if (num1 > num2 && num1 <num3) {
//   console.log("num1 orta reqemdir");
// } else if (num2 > num1 && num2 < num3) {
//   console.log("num2 ortancil ededdir");
// } else if (num3 > num1 && num3 <num2) {
//   console.log("num3 ortancil ededdir");
// }
// else if(num1=num2=num3){
//     console.log("Eyni nomre daxil etmeyin"); 
// }

// //Task-26//
// let year=prompt("Il daxil edin");
// console.log(year);
// if(year%4==0){
//     console.log("Uzun ildir");
// }
// else{
//     console.log("Uzun il deyil"); //Soruscam//
// }

//Task-27//
// let id = prompt ('enter product id:');
// if (id === '1') {
//   alert ('Available 10 pcs.');
// }
// else if (id === '2') {
//   alert ('Available 256 pcs.');
//  }
// else if (id === '3') {
//   alert ('Available 53 pcs.');
//  }
//   else if (id === '4') {
//   alert ('There are 3 available.');
//  }
// else {
//   alert ('Out of stock');
// }

// let id = prompt("enter product id:");

// switch (id) {
//   case "1":
//     alert("Available 10 pcs.");
//     break;
//   case "2":
//     alert("Available 256 pcs.");
//     break;
//   case "3":
//     alert("Available 53 pcs.");
//     break;
//   case "4":
//     alert("Available 3 pcs.");
//     break;
//   default:
//     alert("Out of stock");
// }

// //Task-28//
// let gender=prompt("F ve ya M-i daxil edin");
// console.log(gender);

// if(gender=="F"){
//     alert("Femail");
// }
// else if(gender=="M"){
//     alert("Male");
// }
// else{
//     alert("Xahis edirem F ve ya M daxil edin");
// }

//Task-29//
// let month = prompt("Ayin nomresini daxil edin:");
// switch (month) {
//   case "1":
//     console.log("Yanvar");
//     break;
//   case "1":
//     console.log("Fevral");
//     break;
//   case "1":
//     console.log("Mart");
//     break;
//   case "2":
//     console.log("Aprel");
//     break;
//   case "3":
//     console.log("May");
//     break;
//   case "1":
//     console.log("Iyun");
//     break;
//   case "1":
//     console.log("Iyul");
//     break;
//   case "1":
//     console.log("Avqust");
//     break;
//   case "1":
//     console.log("Sentyabr");
//     break;
//   case "1":
//     console.log("Oktyabr");
//     break;
//   case "1":
//     console.log("Noyabr");
//     break;
//   case "1":
//     console.log("Dekabr");
//     break;
//   default:
//     console.log("Duzgun daxil edin");
// }

// //Task-30//
// let date = prompt("Enter:year.month.day");
// let splitDate = date.split(".");
// if (date == "2024.03.21") {
//   let year = splitDate[0];
//   let month = splitDate[1];
//   let day = splitDate[2];
//   console.log(`${day} ${month} ${year}-cu il`);
// } else {
//   console.log("Yanlis deyer daxil edilib"); //Soruscam
// }
