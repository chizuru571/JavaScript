let element = document.getElementById('item');
console.log(element.value);

let element1 = document.getElementById('item');
console.log(element1.type);

let element2 = document.getElementById('item');
element2.value = '新しい商品';

let element3 = document.getElementById('item');
element3.value = '新しい商品';
element3.type = 'password';