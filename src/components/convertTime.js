export const convertTime = (time) =>
  (Math.floor(time / 60) > 0 ? Math.floor(time / 60) + "′" : "") +
  (Math.round(time % 60) < 10 && Math.floor(time / 60) > 0 ? "0" : "") +
  Math.round(time % 60) +
  "″";
