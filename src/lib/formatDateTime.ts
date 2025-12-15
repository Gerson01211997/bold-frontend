export function formatDateTime(dateTime: string): string {
  const date = new Date(dateTime);

  const pad = (value: number) => String(value).padStart(2, "0");

  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  const hours = pad(date.getHours());
  const minutes = pad(date.getMinutes());
  const seconds = pad(date.getSeconds());

  return `${day}/${month}/${year}-${hours}:${minutes}:${seconds}`;
}
