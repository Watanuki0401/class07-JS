var binary = 0b1000010;
var octal = 0o102;
var hex = 0x42;

//----------document-------------------------------
document.write(binary);
document.write('<br>');
document.write(octal);
document.write('<br>');
document.write(hex);
document.write('<br>');

document.write(binary == octal);
document.write(binary == hex);
document.write('<br>');

//----------console---------------------------------
console.log(binary);
console.log(octal);
console.log(hex);

console.log(binary == octal);
console.log(binary == hex);

//----------type-------------------------------------
console.log("type")
console.log(1 == 1.0);

var result1 = 6 / 2;
console.log(result1);

var result2 = 6 / 4;
console.log(result2);

var result3 = 10 / 0;
document.write(result3);
document.write('<br>');
var result4 = 10 / -0;
document.write(result4);

document.write('<br>');

//---------string--------------------------------------
var str ='Hello';
document.write(str);
document.write('<br>');

str = "World.";
document.write(str);
document.write('<br>');

str = "ダブルコーテーション内の'シングルコーテーション'は文字列である.";
document.write(str);
document.write('<br>');

str = 'シングルコーテーション内の"ダブルクォーテーション"は文字列である.';
document.write(str);
document.write('<br>');

//-------matrixcheck---------------------------------
var str ='Hello';
str = "World.";

for(var i = 0; i < str.length; i++){
  document.write(str[i]);
  document.write('<br>');
}

str[0] = 'H';
document.write(str[i]);
document.write('<br>');
document.write(str);
document.write('<br>');

str = 'Hello';
document.write(str);
document.write('<br>');

str = 'hello';
document.write(str);
document.write('<br>');

str += ' world.'
document.write(str);
document.write('<br>');

str = str.substring(0,3);
document.write(str);
document.write('<br>');

str = str.toUpperCase();
document.write(str);
document.write('<br>');

//---------bool----------------------------------
var boolT = true;
var boolF = false;

//typeofはタイプを示す文字列を返す
document.write(typeof boolT);
document.write('<br>');
document.write(typeof boolF);
document.write('<br>');

document.write(boolT == boolF);
document.write('<br>');

//--------undefind--------------------------------
var undefvar;
document.write(undefvar);
document.write('<br>');

//---------null-----------------------------------
var el = document.querySelector('.test');
document.write(el);
document.write('<br>');

el = document.querySelector('.myElem');
document.write(el)
document.write('<br>');

var nullVar = null;
document.write(typeof nullVar);
document.write('<br>');

document.write(nullVar == null);
document.write('<br>');
document.write(typeof nullVar == null)
document.write('<br>');

//--------------bigint-------------------------
var max = Number.MAX_SAFE_INTEGER;
document.write(max);
document.write('<br>');
var  num = max + 8;
document.write(num);
document.write('<br>');
var  bi = BigInt(max) + 8n;
document.write(bi);
document.write('<br>');

//--------symbol-----------------------------------------
var key = Symbol('key');
document.write(typeof key);
var obj = {};
obj[key] = 'value';
document.write(obj[key]);

//---------Valuable-----------------------------------
var notDefined;
console.log(notDefined);   // undefined

console.log(errTest);
document.write('<br>');

//--class--
var varTest = 3;
varTest = 7;
var varTest = 10;

let letTest = 3;
//letTest = 7;
//let letTest = 10;

const constTest = 3;
//constTest =7;
//const constTest = 10; 

//-advance-
function changeBoxColor(newColor) {
    document.getElementById('background').style.backgroundColor = newColor;
}
