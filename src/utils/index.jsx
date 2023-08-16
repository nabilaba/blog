const IndonesiaFormatDate = (date) => {
  const d = new Date(date);
  const ye = new Intl.DateTimeFormat("id", { year: "numeric" }).format(d);
  const mo = new Intl.DateTimeFormat("id", { month: "long" }).format(d);
  const da = new Intl.DateTimeFormat("id", { day: "2-digit" }).format(d);
  const ho = new Intl.DateTimeFormat("id", { hour: "2-digit" }).format(d);
  const mi = new Intl.DateTimeFormat("id", { minute: "2-digit" }).format(d);
  return `${da} ${mo} ${ye}, ${ho}:${mi}`;
};

const TimeAgo = (date) => {
  const time = new Date(date).getTime();
  const now = new Date().getTime();
  const diff = now - time;
  const minutes = Math.floor(diff / 1000 / 60);
  const hours = Math.floor(minutes / 60);
  const timeAgo =
    hours < 1
      ? `${minutes} menit yang lalu`
      : hours < 24
      ? `${hours} jam yang lalu`
      : IndonesiaFormatDate(date);
  return timeAgo;
};

export { IndonesiaFormatDate, TimeAgo };
