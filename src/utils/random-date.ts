export function getRandomDate() {
  const maxDate = Date.now();
  const timestamp = Math.ceil(Math.random() * maxDate);
  return new Date(timestamp);
}

