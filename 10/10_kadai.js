//1.りんご、みかん、ぶどうという果物の共通で表現できる特徴（たとえば、色、大きさ、重さなど）をプロパティとして、それぞれのオブジェクトを定義する
let apple = {
    name: 'りんご',
    color: 'red',
    size: 10,
    weight: 320
};

let orange = {
    name: 'みかん',
    color: 'orange',
    size: 6,
    weight: 100
};

let grape = {
    name: 'ぶどう',
    color: 'purple',
    size: 8,
    weight: 500
};

console.log(apple,orange,grape);

//2.定義したオブジェクトを配列に格納する
let fruits = [apple, orange, grape];

//3.配列の繰り返しを使って、りんご、みかん、ぶどうの総重量を計算して出力する
// フルーツの総重量を計算する関数
// weightを計算する関数
let total = fruits.reduce(function(sum, element){
  return sum + element.weight;
}, 0);

console.log(total);
