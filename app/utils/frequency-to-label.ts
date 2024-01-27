import { Frequency } from 'app/models/entities/user/user';

export const frequencyToLabel = (value?: Frequency | null) => {
  switch (value) {
    case Frequency.DAILY:
      return '/ Per day';
    case Frequency.MONTHLY:
      return '/ Per month';
    case Frequency.WEEKLY:
      return '/ Per week';
    default:
      return '/ Per day';
  }
};
