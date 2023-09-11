// 商品クラスItemを親クラスとした、椅子クラスChairを作成していきましょう。
// また、椅子クラスには、中古かどうかを判断するためのプロパティを与えてください。
// 作成した、椅子クラスをもとに、さまざまなケースのインスタンスを作成し、継承についての理解を深めてください

// 商品クラスの生成
class Item {
    // コンストラクタ
    constructor(id, name, stock) {
        //　引数の値を使ってプロパティの初期化を行う
        this.id = id;       // 商品ID
        this.name = name;   // 商品名
        this.stock = stock; // 在庫数
    }

    // メソッド
    // Idの値を返す
    getId() {
        return this.id;
    }

    // nameの値を返す
    getName() {
        return this.name;
    }

    // stockの値を返す
    getStock() {
        return this.stock;
    }

    // 商品の追加
    addStock(num) {
        this.stock += num;
    }

    // 商品の販売
    sale(num) {
        if (this.stock < num) {
            throw new Error('在庫が足りません')
        } else {
            this.stock -= num;
        }
    }
}

class chair extends Item {
    constructor(id, name, stock, status) {
        //　引数の値を使ってプロパティの初期化を行う
        super(id, name, stock);
        this.status = status;           //　ベッドのサイズ
    }

    getStatus() {
        return this.status;
    }
}

// インスタンスの生成
let chair1 = new chair('0001', 'カウンターチェア', 57, 'new');
let chair2 = new chair('0002', '学習椅子', 98, 'old');
let chair3 = new chair('0003', '座椅子', 124, 'old');
let chair4 = new chair('0004', 'ダイニングチェア', 36, 'old');

// カウンターチェアが20個販売された
chair1.sale(20);
// 学習椅子が10個販売された
chair2.sale(10);
// ダイニングチェアが12個販売された
chair4.sale(12);
// 座椅子の在庫が30個追加された
chair3.addStock(30);

// プロパティを取得して表示
console.log(chair1.getId(), chair1.getName(), chair1.getStock());
console.log(chair2.getId(), chair2.getName(), chair2.getStock());
console.log(chair3.getId(), chair3.getName(), chair3.getStock());
console.log(chair4.getId(), chair4.getName(), chair4.getStock());

let itemList = [chair1, chair2, chair3, chair4]

itemList.forEach((e) => {
    console.log(e);
})



//　全体の在庫数を確認
let totalStock = 0;
for (let i = 0; i < itemList.length; i++) {
    totalStock += itemList[i].getStock();
}
console.log('全体の在庫数:' + totalStock);