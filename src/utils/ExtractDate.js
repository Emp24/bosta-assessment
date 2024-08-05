export const ExtractDate = (timestamp) => {
  console.log(timestamp);
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
    .padStart(2, "0")}:${minutes} ${ampm}`;

  return { formattedDate, formattedTime };
};
