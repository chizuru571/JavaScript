// 下記のVueオブジェクトを「v-for」属性を使って、select文を作成していきましょう。

let app = new Vue({
  el:'#app',             // 関連付けるDOM要素
  data:{ 
    msgs:["おはよう","こんばんは","お元気ですか"]}
});