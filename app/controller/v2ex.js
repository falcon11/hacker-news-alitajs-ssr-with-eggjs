'use strict';

const Controller = require('egg').Controller;

class V2exController extends Controller {
  async hotTopics() {
    const ctx = this.ctx;
    const data = await ctx.service.v2ex.getHotTopics();
    ctx.body = data;
  }
}

module.exports = V2exController;
