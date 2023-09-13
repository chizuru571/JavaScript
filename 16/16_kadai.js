// 下記のプログラムに手を加えて、ボタンが押されるとid属性msgの文字（「メッセージ」）の色を青色に変更するようにしてください。

$(function () {
  $('#btn').on('click', function() {
    $('#msg').text('メッセージ');
    $('#msg').removeClass('class_01').addClass('class_02');
  });
});