var express = require('express');
var router = express.Router();

// レスポンスのデータ
const responceObjectDataAll = {
  textObject1: {
    id: 1,
    title: 'ノート1のタイトルです',
    subTitle: 'ノート１のサブタイトルです',
    bodyText: 'ノート１の本文です',
  },
  textObject2: {
    id: 2,
    title: 'ノート2のタイトルです',
    subTitle: 'ノート2のサブタイトルです',
    bodyText: 'ノート2の本文です',
  }
};

/**
 * メモを全権取得するAPI
 * @returns {object[]} data
 * @returns {number} data.is -ID
 * @returns {string} data.title - タイトル
 * @returns {string} data.text - 内容
*/

/* GET home page. */
router.get('/', function(req, res, next) {
// 全件取得して返す
  res.json(responceObjectDataAll);
});

module.exports = router;
