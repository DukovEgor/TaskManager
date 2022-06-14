import { formatDate } from './format-date';

export function getRandomDate() {
  const maxDate = Date.now();
  const timestamp = Math.ceil(Math.random() * maxDate);
  return formatDate(new Date(timestamp));
}

