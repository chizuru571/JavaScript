// 連想配列の定義
let week2 = {sun:'日', mon:'月', tue:'火', wed:'水', thu:'木', fri:'金', sat:'土'};

console.log(week2['sun']);　// キーからペアの値を取得する　その1

console.log(week2.sun);     // キーからペアの値を取得する　その2

// 連想配列の定義
let week3 = {sun:'日', mon:'月'};
console.log(week3); 

// 要素の追加　その1
week3['tue'] = '火';
console.log(week3); 

// 要素の追加　その2
week3.wed= '水';
console.log(week3);

// 連想配列の定義
let week4 = {sun:'日', mon:'月', tue:'火', wed:'水'};

console.log(week4); 

// 要素の削除　その1
delete week4['wed'];
console.log(week4); 

// 要素の削除　その2
delete week4.tue;
console.log(week4);

// 連想配列の定義
var week5 = {sun:'日', mon:'月', tue:'火', wed:'水', thu:'木', fri:'金', sat:'土'};

for (key in week5) {
    console.log(key);
}

// 連想配列の定義
let week6 = {sun:'日', mon:'月', tue:'火', wed:'水', thu:'木', fri:'金', sat:'土'};

let keys = Object.keys(week6);  // キーの一覧を配列として取得

console.log(keys);

// 連想配列の定義
var week7 = {sun:"日", mon:"月", tue:"火", wed:"水", thu:"木", fri:"金", sat:"土"};

for (key in week7) {
    console.log(week7[key]);
}

// 連想配列の定義
let week8 = {sun:'日', mon:'月', tue:'火', wed:'水', thu:'木', fri:'金', sat:'土'};

let values = Object.values(week8);  // 値を配列として取得

console.log(values);

// 連想配列の定義
let week9 = {sun:'日', mon:'月', tue:'火'};
let week10 = {wed:'水', thu:'木', fri:'金', sat:'土'};

let week = Object.assign(week9, week10);
console.log(week);