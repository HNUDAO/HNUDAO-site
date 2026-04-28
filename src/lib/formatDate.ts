export function formatDate(date: Date | string | undefined) {
  if (!date) {
    return "日期将后续公布";
  }

  const value = typeof date === "string" ? new Date(date) : date;

  return new Intl.DateTimeFormat("zh-CN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(value);
}
