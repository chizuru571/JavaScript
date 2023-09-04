// オブジェクトの生成
let taro = {        // 「taro」オブジェクト
    name: 'taro',
    height: 175.0,
    weight: 72,
    blood_type: 'A'
};

let jiro = {        // 「jiro」オブジェクト
    name: 'jiro',
    height: 178.0,
    weight: 76,
    blood_type: 'B'
};

let saburo = {      // 「saburo」オブジェクト
    name: 'saburo',
    height: 165.0,
    weight: 68,
    blood_type: 'O'
};

// 三つオブジェクトを配列に保存
let brother = [taro, jiro, saburo];

// BMIを計算する関数
function calc_bmi(height, weight) {
    // BMIの計算
    let bmi = weight / ((height * 0.01)*(height * 0.01));
    return bmi;
}

// 三つのオブジェクトのBMIを出力
brother.forEach(e => {
    let bmi = calc_bmi(e.height, e.weight);
    console.log(e.name + ' bmi:' +  Math.round(bmi * 100) / 100);
});

// オブジェクトの生成
let taro2 = {        // 「taro」オブジェクト
    name: 'taro',
    height: 175.0,
    weight: 72,
    blood_type: 'A',

    introduct() {       // 追加したメソッド
        return this.name + 'です。身長は' + this.height + "cmです。";
    }
};

console.log(taro2);

let car = {                    // carオブジェクト
    distance_per: 60.0,        // プロパティ 1時間辺りの走行距離

    distance(t) {              // メソッド 走行距離を計算する関数
        return this.distance_per * t;
    }
};

let bicycle = {                // bicycleブジェクト
    distance_per: 15.0,        // プロパティ 1時間辺りの走行距離

    distance(time) {           // メソッド 走行距離を計算する関数
        return this.distance_per * time;
    }
};

// carを2時間運転した場合の走行距離
console.log('走行距離:' + car.distance(2) + 'km');

// bicycleを2時間運転した場合の走行距離
console.log('走行距離:' + bicycle.distance(2) + 'km');

let jiro2 = {
    name: 'jiro',
    height: 178.0,
    weight: 76,
    blood_type: 'B'
}

let saburo2 = {
    name: 'saburo',
    height: 165.0,
    weight: 68,
    blood_type: 'O'
}

console.log(jiro2);                       // オブジェクトjiroを表示
console.log(Object.keys(jiro2));     // 引数のオブジェクトの表示可能なプロパティの名前を配列として返します
console.log(Object.entries(jiro2));  // 引数のオブジェクトの表示可能なプロパティの名前と値を配列として返します
console.log(Object.values(jiro2));   // 引数で指定されたオブジェクトが持つ表示可能なプロパティの値を配列として返します

console.log(Object.is(jiro2, saburo2)); // 比較して同一値ならばTrue,そうでなければfalse