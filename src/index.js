// let name = "kaito";
// console.log(name);
// name = "taishi";
// console.log(name);

// const name = "kaito";
// console.log(name);
// name="taishi";

// let a=2;
// const func1 = (kazu) => {
//   a += 3;
//   kazu=a;
//   return kazu;
// };
// console.log(func1());

// const chara = {
//   name : "taishi",
//   age : 21
// };

// const {name , age} = chara;
// console.log(name);
// const name = "はにゃ";
// const age = 2;

// const message = `私の名前は${name}です。${age}歳です`;

// console.log(message);

// let arr1 = [1, 2, 3, 4];
// arr1 = [0,...arr1,5];
// const [num1,num2,...arr2] = arr1;
// console.log(arr1);
// console.log(num1);
// console.log(num2);
// console.log(arr2);

// console.log(...arr1);
// const sum = (num1,num2) => console.log(num1+num2);
//sum(arr1[2],arr1[5]);
// sum(...arr1);

//const array = ["はにゃ", "げろ", "ぺろ", "はにゃ"];
// // for(let i=0;i<array.length;i++){
// //   console.log(array[i]);
// // }
//array.map((name) => console.log(name));
//  const newarray = array.map((name) => {
//    return name;
//  });
//  console.log(newarray);

// const array_hanya = array.filter((name) => {
//   return name==="はにゃ";
// });
// console.log(array_hanya);

// const trueHanya = array.map((name) => {
//   return name === "はにゃ" ? `${name}?` : name;
// });
// console.log(trueHanya);
//三項演算子 条件 ? 真の処理 : 偽の処理
//const age = 1 < 0 ? console.log(0) : console.log(1);
//console.log(age);

//const num = 1300;
//console.log(num.toLocaleString());

//const fmNum = typeof num === "number" ? num.toLocaleString() : "数値を入力して";
//console.log(fmNum);

// const checkSum = (num1,num2) => {
//  return num1 + num2 > 100 ? "100を超えている":"100以下";
// }
// console.log(checkSum(50,40));
// console.log(checkSum(50,70));

//論理演算子
// const f1 = true;
// const f2 = false;

// if(f1 || f2){
//   console.log("trueがあるよ");
// }
// else {
//   console.log("aaa");
// }

// const f = false;

// const mes = f || "表示内容";
// console.log(mes);
// ||は左側がfalseなら右を返す
// &&は左側がtrueなら右を返す
