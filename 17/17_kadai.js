// 1. Web APIの仕様を確認する
// 2.レスポンスフィールドを参考に、レスポンスのデータで受け取ったcopyrightとdateも表示結果として画面に出力するようにプログラムを修正する

const apiKey = 'DEMO_KEY';

$(function () {
  $('#update').click(function (event) {
    let param = {
      date: $('#image-date').val(),
      api_key: apiKey
    };
    console.log(param);
    // AjaxによりWeb APIを呼び出す処理
    $.ajax({
      type: 'GET',                                    // GETで送信
      data: param,                                    // リクエストパラメーター
      url: 'https://api.nasa.gov/planetary/apod',     // URL
      dataType: 'json',                              // データ型 JSON
    })
    .done(function (res) {
      // 成功した場合
      console.log(res.core);        // レスポンスフィールドの内容
      $('#apod-image').attr('src', res.url);
      $('#apod-title').html(res.title);
      $('#apod-desc').html(res.explanation);
      $('#apod-copyright').html(res.copyright);
      $('#apod-date').html(res.date);
    })
    .fail(function (res) {
      // 失敗した場合
      $('#apod').html('対象外の日付を入力したか通信エラーです<br>ブラウザをリロードしてください');
    });
  });
});