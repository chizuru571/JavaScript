function clickButton(target) {
    // inputタグの親（一つ上）のタグを取得
    let parent = target.parentNode;
    // spanタグ(id属性の値msg)の要素を取得
    let span = document.getElementById('msg');
    if (span == null) {
        //　spanタグがなければ、追加する
        var newSpan = document.createElement('span');
        // spanタグの要素にid属性で値msgを追加
        newSpan.setAttribute('id', 'msg');
        var newText = document.createTextNode('ボタンが押されました');
        newSpan.append(newText);
        parent.insertBefore(newSpan, target.netSibling);                
    }
}