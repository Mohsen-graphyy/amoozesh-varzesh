export const dateFa = (date) =>
  date ? new Date(date).toLocaleString('fa-IR').split(',')[0] : date
