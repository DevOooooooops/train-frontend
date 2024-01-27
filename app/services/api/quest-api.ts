import { GetQuestResult } from 'app/services/api/api.types';
import { apiBase } from './base';

export class QuestApi {
  async getQuest(token: string, actualLevel: number): Promise<GetQuestResult> {
    const response = await apiBase.get(`/user/quest?actualLevel=${actualLevel}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const quest = response.data;
    return { quests: quest };
  }
}
