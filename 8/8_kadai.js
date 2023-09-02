//三角形の面積を求める関数を作成して、実行して動作の確認をしていきましょう。
//ただし、関数名がある場合と、関数名のない場合の二つのケースを実装してください。

//関数名のある場合
function triangle(p1, p2) {
    let p = (p1 * p2)/2;        //　引数p1と引数p2で三角形の面積を出す
    return p;               // 計算結果を戻す
}
//　ユーザー定義関数triangleの呼び出し
console.log(triangle(10, 20));


//関数名のない場合
var triangle = function(p1, p2) {
    let p = (p1 * p2)/2;       //　引数p1と引数p2で三角形の面積を出す
    return p;               // 計算結果を戻す
}

// 関数の実行
console.log(triangle(10, 20));