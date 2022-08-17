/**
 * TODO
 * https://github.com/e111077/vite-lit-element-ts-sass
 * litでsassを使えるようにする
 */
import { defineConfig, UserConfigExport } from "vite";
import postcssLit from 'rollup-plugin-postcss-lit';

/**
 * viteの設定情報
 * @link https://vitejs.dev/config/
 */
export default defineConfig(({ command, mode }) => {
  /**
   * 共通で使用する設定情報
   */
  const common:UserConfigExport = {
    base: '/',
    build: {
      lib: {
        entry: "src/main.ts",
        formats: ["es"],
      },
      rollupOptions: {
        external: /^lit/,
      },
    },
    plugins: [
      postcssLit(),
    ]
  };

  /**
   * コマンドの種類を判断して設定情報をマージして返却
   * @todo マージが浅いので不完全なら修正
   * @link https://qiita.com/riversun/items/60307d58f9b2f461082a
   * @link https://www.npmjs.com/package/deepmerge
   */
  if (command === "serve") {
    return {
      //開発時
      ...common,
      ...development
    };
  } else {
    return {
      // 製品ビルド時
      ...common,
      ...production
    };
  }
});

/**
 * 開発時の設定情報
 */
const development:UserConfigExport = {
  server: {
    port: 3000,
  },
};

/**
 * 製品ビルド時の設定情報
 */
const production:UserConfigExport = {
  build: {
    outDir: 'docs',
    manifest: true,
    rollupOptions: {
      input: '/src/main.ts'
    }
  }
};
