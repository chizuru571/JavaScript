//INPUTタグに文字列の入力が終わった後に、画面に入力した文字をspanタグを用いて表示していきましょう
//（ヒント、入力が終わるとはフォーカスが外れるイベントです）。

// inputタグの要素を取得
let target = document.getElementById('text01');
// イベントリスナを設定
target.addEventListener('blur', function() {
    let span = document.getElementById('text');
// 入力した文字列を表示する
    span.innerText = target.value;
});