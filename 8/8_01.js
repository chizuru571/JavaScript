let str = '12345';

console.log(str + ' : ' + typeof(str));

let n = parseInt(str);    // 文字列(String)を数値型（整数）に変換
console.log(n + ' : ' + typeof(n));

let a = '123.45';

console.log(a + ' : ' + typeof(a));

let b = parseFloat(a);    // 文字列(String)を数値型（浮動小数点数）に変換
console.log(b + ' : ' + typeof(b));


// ユーザー定義関数add（足し算）の定義
function add(p1, p2) {
    let p = p1 + p2;        //　引数p1と引数p2を加算
    return p;               // 加算した結果を戻す
}

//　ユーザー定義関数addの呼び出し
console.log(add(10, 20));