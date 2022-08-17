/**
 * 環境変数をテンプレートをグローバルデータとして戻り値に設定
 * @link https://www.11ty.dev/docs/data-js/#example-exposing-environment-variables
 */
module.exports = process.env.ELEVENTY_ENV || "development";
