// 以下に実装してください
// 1.<div id=”p1”></div>を、inputタグに変更する（inputタグの属性は自由）
let e1 = document.getElementById('p1');
e1.type = 'input';
console.log(e1);
// 2.<div id=”p2”></div>に「テキスト文字列」というテキスト文字列を埋め込む
let e2 = document.getElementById('p2');
e2.innerText = 'テキスト文字列';
// 3.<div id=”p3”></div>のid属性の値を”p5”に変更する
let e3 = document.getElementById('p3');
e3.id = 'p5';               //　id属性の値を変更
console.log(e3.id);         //　id属性の値を取得