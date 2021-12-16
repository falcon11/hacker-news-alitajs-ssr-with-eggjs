'use strict';
const Serviece = require('egg').Service;

class V2exService extends Serviece {
  constructor(ctx) {
    super(ctx);
    this.serverUrl = this.config.v2ex.serverUrl;
  }

  async getHotTopics() {
    const { data } = await this.ctx.curl(`${this.serverUrl}/api/topics/hot.json`, {
      dataType: 'json',
    });
    return data;
  }
}

module.exports = V2exService;
