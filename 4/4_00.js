let a = 2;
if (a = 1) {// = がひとつなので、値を代入している
    console.log('January');
} else if (2 == a) {
    console.log('February');
} else if (a === 0) {// === で左辺と右辺を比較している
    console.log('a=' + a + 'は、0です'); 
} else {
    console.log('a=' + a + 'は、判定できません');    
}
console.log(a);
