import { request } from 'alita';

export async function getHotTopics(): Promise<any> {
  return request('/api/v2ex/topics/hot', { method: 'get' });
}
