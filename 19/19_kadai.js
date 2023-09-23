// CountButtonコンポーネントを参考に、ボタンを押すたびに、100から順番に数字が減り、
// 0の次は100に戻るプログラムを作成していきましょう。

// Reactコンポーネントを継承して新たなコンポーネントを作成
class CountButton extends React.Component {
  // コンストラクター
  constructor(props) {
    super(props);
    // 状態を保持するプロパティstate
    this.state = { count: 10};
  }



  //　出力処理
  render() {
    return React.createElement(
      "button",
      { onClick: () => this.setState({ count: this.state.count - 1 }) },
      "カウント数：" + this.state.count
    );
  }
}

// 表示される場所の要素とコンポーネントを結び付けて表示させる
const domContainer1 = document.querySelector("#app1");

// ReactDOMに出力処理を行う
ReactDOM.render(
  React.createElement(CountButton),
  domContainer1
);

