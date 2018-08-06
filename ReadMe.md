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

# 開発環境

* [Raspberry Pi](https://ja.wikipedia.org/wiki/Raspberry_Pi) 3 Model B
    * [Raspbian](https://www.raspberrypi.org/downloads/raspbian/) GNU/Linux 8.0 (jessie)
        * ブラウザ
            * Chromium
                * バージョン 56.0.2924.84 Built on Ubuntu 14.04, running on Raspbian 8.0

# ライセンス

このソフトウェアはCC0ライセンスである。

[![CC0](http://i.creativecommons.org/p/zero/1.0/88x31.png "CC0")](http://creativecommons.org/publicdomain/zero/1.0/deed.ja)

