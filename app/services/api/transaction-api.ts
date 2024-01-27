import { Transaction } from 'app/models/entities/transaction/transaction';
import { GetTransactionResult } from "app/services/api/api.types"
import { apiBase } from './base';

export class TransactionApi {
  async getTransactions(token: string): Promise<GetTransactionResult> {
    const response = await apiBase.get('user/transactions', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const transaction = response.data
    return { transaction: transaction } ;
  }

  async createTransaction(token: string, transactionData: Transaction): Promise<GetTransactionResult> {
    const response = await apiBase.put(`user/transactions/${transactionData.id}`, transactionData,{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const transaction = response.data
    return { transaction: transaction } ;
  }
}
