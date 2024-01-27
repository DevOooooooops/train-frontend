import { Transaction } from 'app/models/entities/transaction/transaction';
import { ApiResult } from 'app/services/api/api.types';
import { apiBase } from './base';

export class TransactionApi {
  async getAll(token: string): ApiResult<Transaction[]> {
    const { data } = await apiBase.get<Transaction[]>('/transactions', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return { data };
  }
}
