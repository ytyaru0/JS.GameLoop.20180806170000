# このソフトウェアについて

JavaScriptでゲームループを作る。FPS計測。[demo](https://ytyaru.github.io/JS.GameLoop.20180806072000)

# 使い方

* [demo](https://ytyaru.github.io/JS.GameLoop.20180806072000)

# イベント解放処理

タブ閉じ、F5キー更新で終了確認ダイアログが表示される。終了せず留まるとFPSアニメーションが停止する。これは`requestAnimationFrame`をキャンセルする`cancelAnimationFrame`関数によるものである。また、`setInterval`なら`clearInterval`が実行され同じく停止する。

# 課題

FPS制御がまったくできていない。

* FPS制御
    * 指定FPSと実行速度との差を埋める
        * 移動量を比率で算出して加算する

# 技術情報

## API

### A. setInterval

* [setInterval](https://developer.mozilla.org/ja/docs/Web/API/Window/setInterval)
* [clearInterval](https://developer.mozilla.org/ja/docs/Web/API/WindowTimers/clearInterval)

古いAPI。指定した間隔でくりかえし実行する。高負荷。

### B. requestAnimationFrame

* [requestAnimationFrame](https://developer.mozilla.org/ja/docs/Web/API/Window/requestAnimationFrame)
* [cancelAnimationFrame](https://developer.mozilla.org/ja/docs/Web/API/Window/cancelAnimationFrame)

新しいAPI。1/60秒ほどの速度で実行をくりかえす。非アクティブで低速化。

#### beforeunloadイベント

* [onbeforeunload](https://developer.mozilla.org/ja/docs/Web/API/WindowEventHandlers/onbeforeunload)

以下のときに発火するイベント。

* タブ閉じ（Ctrl+Wキー押下時）
* タブ更新（F5キー押下時）
* window.close()

終了確認ダイアログが表示される。returnで表示文字列を返す必要がある。

今回はここで終了せずキャンセルすれば、アニメ停止した様子が確認できるように実装した。

#### class化

Main.js
```javascript
const Loop = require('js/app/Loop'); // クラス定義のロード
let loop = new Loop();               // インスタンス生成
loop.Start();                        // アニメ開始

// アニメ停止。タブ閉じ、ページ更新で発火。「とどまる」とアニメが停止したページが確認できる。
window.onbeforeunload = function(e) {
    loop.Stop();
    return "停止！";
};
```

Loop.js
```javascript
class Loop {
    constructor() {
        this.requestId = 0;
        window.onbeforeunload = function(e) {
            this.Stop();
            return ""; // 必要。
        }.bind(this);
    }
    _Loop() { console.log(this.requestId); }
    Start() {
        this._Loop();
        this.requestId = window.requestAnimationFrame(this.Start.bind(this));
    }
    Stop() { window.cancelAnimationFrame(this.requestId); }
}
```

ポイントは`bind(this)`。ループしたいメソッドを対象に指定する。

OK
```javascript
window.requestAnimationFrame(this.Start.bind(this));
```

NG
```javascript
window.requestAnimationFrame(this.Start);
```

NGの方法で実装すると`this`がnullになり、`Uncaught TypeError`エラーになる。OKの方法で実装すると解決する。[参考](https://stackoverflow.com/questions/28908999/use-requestanimationframe-in-a-class)

#### class化2

なお、停止もクラス内で実装したい場合は以下のようにする。

Main.js
```javascript
const Loop = require('js/app/Loop'); // クラス定義のロード
let loop = new Loop();               // インスタンス生成
loop.Start();                        // アニメ開始
```

Loop.js
```javascript
class Loop {
    constructor() {
        this.requestId = 0;
        window.onbeforeunload = function(e) {
            this.Stop();
            return ""; // 必要。
        }.bind(this);
    }
    _Loop() { console.log(this.requestId); }
    Start() {
        this._Loop();
        this.requestId = window.requestAnimationFrame(this.Start.bind(this));
    }
    Stop() { window.cancelAnimationFrame(this.requestId); }
}
```

# 開発環境

* [Raspberry Pi](https://ja.wikipedia.org/wiki/Raspberry_Pi) 3 Model B
    * [Raspbian](https://www.raspberrypi.org/downloads/raspbian/) GNU/Linux 8.0 (jessie)
        * ブラウザ
            * Chromium
                * バージョン 56.0.2924.84 Built on Ubuntu 14.04, running on Raspbian 8.0

# ライセンス

このソフトウェアはCC0ライセンスである。

[![CC0](http://i.creativecommons.org/p/zero/1.0/88x31.png "CC0")](http://creativecommons.org/publicdomain/zero/1.0/deed.ja)

