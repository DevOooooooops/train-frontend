import { GeneralApiProblem } from 'app/services/api/apiProblem';
import { Account, User } from 'app/models/entities/user/user';
import { Transaction } from 'app/models/entities/transaction/transaction';
import { Quest } from 'app/models/entities/quest/Quest';
import { QuestHistory } from 'app/models/entities/quest/QuestHistory';

/**
 * These types indicate the shape of the data you expect to receive from your
 * API endpoint, assuming it's a JSON object like we have.
 */
export interface EpisodeItem {
  title: string;
  pubDate: string;
  link: string;
  guid: string;
  author: string;
  thumbnail: string;
  description: string;
  content: string;
  enclosure: {
    link: string;
    type: string;
    length: number;
    duration: number;
    rating: { scheme: string; value: string };
  };
  categories: string[];
}

export interface ApiFeedResponse {
  status: string;
  feed: {
    url: string;
    title: string;
    link: string;
    author: string;
    description: string;
    image: string;
  };
  items: EpisodeItem[];
}

/**
 * The options used to configure apisauce.
 */
export interface ApiConfig {
  /**
   * The URL of the api.
   */
  url: string;

  /**
   * Milliseconds before we timeout the request.
   */
  timeout: number;
}

export type GetTokenResult = { accessToken: string } | GeneralApiProblem;

export type GetWhoAmIResult = { user: User } | GeneralApiProblem;

export type GetUserResult = { account: Account } | GeneralApiProblem;

export type GetTransactionResult = { transaction: Transaction[] } | GeneralApiProblem;

export type GetQuestResult = { quests: Quest[] } | GeneralApiProblem;

export type GetQuestHistoryResult = { questHistories: QuestHistory[] } | GeneralApiProblem;
