export const ExtractDate = (timestamp) => {
  const date = new Date(timestamp);
  const day = date.getUTCDate().toString().padStart(2, "0");
  const month = (date.getUTCMonth() + 1).toString().padStart(2, "0"); // Months are zero-indexed
  const year = date.getUTCFullYear();
  const formattedDate = `${day}/${month}/${year}`;

  // Extract time components
  let hours = date.getUTCHours();
  const minutes = date.getUTCMinutes().toString().padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'

  // Format time as hh:mm:ss AM/PM
  const formattedTime = `${hours
    .toString()
    .padStart(2, "0")}:${minutes}${ampm}`;

  return { formattedDate, formattedTime };
};

export const ExtractDayAr = (timestamp) => {
  if (timestamp) {
    const date = new Date(timestamp);
    const formatter = new Intl.DateTimeFormat("ar", { weekday: "long" });
    return formatter.format(date);
  }
  return null;
};

export const ExtractDayEn = (timestamp) => {
  if (timestamp) {
    const date = new Date(timestamp);
    return date.toLocaleDateString("en-US", { weekday: "long" });
  }
  return null;
};

export const FormatDate = (timestamp, locale = "en-US") => {
  if (timestamp) {
    const date = new Date(timestamp);
    const monthNames = new Intl.DateTimeFormat(locale, {
      month: "long",
    }).formatToParts(date);

    const monthName = monthNames.find((part) => part.type === "month").value;

    const day = date.getDate();
    const year = date.getFullYear();

    return `${day} ${monthName} ${year}`;
  }
};
