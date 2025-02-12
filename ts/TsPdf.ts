let first:number = 123;
let second:number = 0x37CF;

console.log(first);
console.log(second);

let str:Array<string> = ["hello", "how", "are", "you"];
let str1:Array<string|number>  = [2, "how"];

console.log(str, str1);
console.log("tsc -p");

let tpl:[number, string] = [1, "anuj"];
console.log(typeof(tpl));
tpl.push(2, "ajay");

let dy:Array<number>=[];
dy.push(3);
console.log(dy.length);
dy.push(5);
console.log(dy);
console.log(typeof(dy));
console.log(dy.length);