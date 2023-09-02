//1～100までの整数を値とした配列名aの配列から、3の倍数のみが入っている配列b3を作成していきましょう。
//また、同様に5の倍数のみが入っている配列b5を作成してください。

nums = [];
for (i=1; i < 101; i++) {
  nums.push(i);
}
console.log(nums);
 

let a = nums
let b3 = a.filter(function(e) {
    return e % 3 == 0;
});
console.log(b3);

let b5 = a.filter(function(e) {
    return e % 5 == 0;
});
console.log(b5);