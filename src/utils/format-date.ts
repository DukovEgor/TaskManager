export const formatDate = (date: Date) => date.toLocaleString('ru-RU', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
});
