export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const month = ('0' + (date.getUTCMonth() + 1)).slice(-2);
  const day = ('0' + date.getUTCDate()).slice(-2);
  const year = date.getUTCFullYear().toString().slice(-2);
  return `${month}/${day}/${year}`;
};
