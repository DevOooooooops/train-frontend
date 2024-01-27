import { Quest } from 'app/models/entities/quest/Quest';
import { QuestHistory } from 'app/models/entities/quest/QuestHistory';
import { GetQuestHistoryResult } from 'app/services/api/api.types';
import { apiBase } from './base';

export class QuestHistoryApi {
  async getAll(token: string, userId: string): Promise<GetQuestHistoryResult> {
    const { data: questHistories } = await apiBase.get<QuestHistory[]>(`/user/${userId}/quest/history`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return { questHistories };
  }
  async saveOrUpdate(token: string, quests: Quest[]): Promise<GetQuestHistoryResult> {
    const { data: questHistories } = await apiBase.put<QuestHistory[]>(`/user/quest/history`, quests, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return { questHistories };
  }
}
