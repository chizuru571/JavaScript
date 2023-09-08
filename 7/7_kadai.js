// 1．次のような「キー」と「値」のペアを保存している連想配列名fruitsを作成しましょう
let fruits = {apple:'りんご', strawberry:'いちご', grape:'ぶどう', lime:'れもん'};
console.log(fruits); 
// 2．「キー」grapeの値を出力してください
console.log(fruits['grape']);　
// 3．連想配列名fruitsのキーの一覧を出力してください
for (key in fruits) {
    console.log(key);
}