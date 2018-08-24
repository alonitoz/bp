const express = require('express');
const router = express.Router();
const Comment = require('../../../../db/models/comment');
const { setCrudMethods } = require('../../../../lib/routes');

setCrudMethods(router, Comment);

module.exports = router;
