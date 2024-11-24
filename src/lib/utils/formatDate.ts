export const formatDate = (timestamp: number) => {
  const date = new Date(timestamp);

  const formattedDate = date.toLocaleString("fr-FR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  const formattedTime = `${String(date.getHours()).padStart(2, "0")}h${String(date.getMinutes()).padStart(2, "0")}`;

  return `${formattedDate} - ${formattedTime}`;
};