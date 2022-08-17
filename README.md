# Vite + Lit

## ディレクトリ構成

### `src`配下

- assets
  - viteによるコンパイル・バンドルをおこなう領域
  - コンパイルを必要とする、サイト共通で使用するファイルを管理する想定
- components
  - vite+Litによるコンパイル・バンドルをおこなう領域
  - WebComponentを管理する想定
- pages
  - 11tyによるSSG領域です。生成されたHTMLは`src`配下へ渡されます
  - EJSをベースとしたlayoutやグローバルデータファイル、画面ページを管理する想定
- static
  - 11tyでファイルコピーをおこなう領域
  - 変更されない可能性の高いファイルを管理する想定（例えば、faviconなど）。

## 選定メモ

- JS Off時の挙動に関して
  - WebComponentは前提としてShadowDOMでレンダリングされるのでJS依存
  - JSで渡している値はなにも表示されない
  - カプセル化されたstyleも反映されなくなる
  - slotで描画された要素はJS無効時でもレンダリングされる
  - JS依存の機能とのすみ分けに関してはクリアしている
- パフォーマンスに関して
  - サンプルの段階では100%
  - チューニングのコストがかかる可能性あり
  - [最適化は別途おこなう必要あり](https://lit.dev/docs/tools/production/)
- 導入・コストに関して
  - litはあくまでWebComponentを作るライブラリ
  - HTMLなどをビルドするには別途エンジンツールが必要
    - 公式のスターターは11tyを使用している
    - [11ty+viteのサンプルはある](https://github.com/fpapado/eleventy-with-vite)
  - パフォーマンスチューニングのコストは通常の構築よりかかる
  - Storybookを導入する場合別途コストがかかる
- 開発者体験に関して
  - WebComponentでsassが書けない
  - WebComponent内のCSS、HTMLで自動予測が効かない（vscode上の都合）
- その他
  - カスタム要素にカスタム属性をべた書きすることは可能
  - ナレーターの読み上げは問題ない
  - ビルド時のファイルが初期設定だとJSのみ

## 参考

> [Getting Started | Vite](https://vitejs.dev/guide/)

> [What is Lit? – Lit](https://lit.dev/docs/)

> [Overview—Eleventy](https://www.11ty.dev/docs/)

> [Introduction to Storybook](https://storybook.js.org/docs/react/get-started/introduction)

> [Web Componentsの実用に向けて | フロントエンドBlog | ミツエーリンクス](https://www.mitsue.co.jp/knowledge/blog/frontend/202012/18_0900.html)