// jQueryの書き出し
$(function(){
    // 実行したい処理
    alert('jQueryの動作確認');
});

// JavaSCriptの場合
let e1 = document.getElementById('id_01');
let e2 = document.getElementsByClassName('class_01');

console.log(e1);
console.log(e2);

// jQueryの場合
$(function(){
    // id属性の値id_01の要素を取得
    let e1 = $('#id_01');
    // class属性の値class_01の要素を取得
    let e2 = $('.class_01');

    console.log(e1);
    console.log(e2);
}); 