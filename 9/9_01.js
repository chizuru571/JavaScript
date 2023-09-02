let main_category = ['WOMAN','MEN','KIDS','BABY'];

for (let i = 0; i < main_category.length; i++) {
    console.log(main_category[i]);    
}

let main_categorys = ['WOMAN','MEN','KIDS','BABY'];

main_categorys.forEach(function(e){
  console.log(e);
});

let main_categoryss = ['WOMAN','MEN','KIDS','BABY'];

main_categoryss.forEach(
  // アロー関数
  (e) => {
    console.log(e);
  }
);

let category = ['WOMAN','MEN','KIDS','BABY'];

category.forEach(
  // アロー関数
  e => {
    console.log(e);
  }
);

let main = ['WOMAN','MEN','KIDS','BABY'];


// コールバック関数で書いた場合
main.forEach(function(e, index, array){
  console.log(e + ' = ' + array[index]);
});

// アロー関数で書いた場合
main.forEach((e, index, array)=>{
  console.log(e + ' = ' + array[index]);
});

var number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var odd = number.find(function(e) {
    if (e % 2 == 0) {
        return true;
    } else {
        return false;
    }
});
console.log(odd);

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let odds = numbers.find(function(e) {
    return e % 2 == 0;
});
console.log(odds);

let fruits = ['APPLE', 'STRAWBERRY', 'ORANGE', 'GRAPE'];

let item = fruits.find(e => e==='ORANGE');
console.log(item);

let fruit = ['APPLE', 'STRAWBERRY', 'ORANGE', 'GRAPE'];

let result = fruit.findIndex(e => e === 'ORANGE');
console.log(result);

let suuji = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let aa = suuji.every(e => e % 2 == 0);
console.log(a);

let bb = [2, 4, 6, 8, 10, 12, 14, 16, 18];

let c = b.every(e => e % 2 == 0);
console.log(c);

let suujis = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let kannsuu= suujis.filter(function(e) {
    if (e % 2 == 0) {
        return true;
    } else {
        false;
    }
});
console.log(kannsuu); 

let hairetsu = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let kannsuus = hairetsu.filter(function(e) {
    return e % 2 == 0;
});
console.log(kannsuus);

let x = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let y = x.filter(e => e % 2 == 0);
console.log(y);

console.log([...Array(100)].map((_, i) => i + 1)); 