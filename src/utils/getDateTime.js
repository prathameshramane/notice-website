export const getTime = () => {
  const date = new Date();
  return `${date.getHours()}:${date.getMinutes()}`;
};

export const getDate = () => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const date = new Date();
  return `${months[date.getMonth()]} ${date.getDate()},${date.getFullYear()}`;
};
