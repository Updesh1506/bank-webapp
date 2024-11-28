import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"
import qs from 'qs';


export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function formatAmount(amount) {
  const formatter = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 2,
  });

  return formatter.format(amount);
}


/**
 * Updates the URL query parameter by setting a new key-value pair.
 * @param {Object} params - The query parameters as a string.
 * @param {string} key - The query parameter key to update.
 * @param {string} value - The new value for the query parameter.
 * @returns {string} The updated URL query string.
 */

export function formUrlQuery({ params, key, value }) {
  const currentUrl = qs.parse(params);

  // Update the query parameter
  currentUrl[key] = value;

  const newUrl = qs.stringify(
    {
      url: window.location.pathname,
      query: currentUrl,
    },
    { skipNull: true }
  );

  return newUrl;
}

/**
 * Returns color classes based on the account type.
 * @param {string} type - The type of the account. Can be "depository", "credit", or any other string.
 * @returns {Object} An object containing class names for styling.
 */
export function getAccountTypeColors(type) {
  switch (type) {
    case "depository":
      return {
        bg: "bg-blue-25",
        lightBg: "bg-blue-100",
        title: "text-blue-900",
        subText: "text-blue-700",
      };

    case "credit":
      return {
        bg: "bg-success-25",
        lightBg: "bg-success-100",
        title: "text-success-900",
        subText: "text-success-700",
      };

    default:
      return {
        bg: "bg-green-25",
        lightBg: "bg-green-100",
        title: "text-green-900",
        subText: "text-green-700",
      };
  }
}


export const getTransactionStatus = (date) => {
  const today = new Date();
  const twoDaysAgo = new Date(today);
  twoDaysAgo.setDate(today.getDate() - 2);

  return date > twoDaysAgo ? "Processing" : "Success";
};

export const removeSpecialCharacters = (value) => {
  return value.replace(/[^\w\s]/gi, "");
};

export const formatDateTime = (dateString) => {
  const dateTimeOptions = {
    weekday: "short", // abbreviated weekday name (e.g., 'Mon')
    month: "short", // abbreviated month name (e.g., 'Oct')
    day: "numeric", // numeric day of the month (e.g., '25')
    hour: "numeric", // numeric hour (e.g., '8')
    minute: "numeric", // numeric minute (e.g., '30')
    hour12: true, // use 12-hour clock (true) or 24-hour clock (false)
  };

  const dateDayOptions = {
    weekday: "short", // abbreviated weekday name (e.g., 'Mon')
    year: "numeric", // numeric year (e.g., '2023')
    month: "2-digit", // abbreviated month name (e.g., 'Oct')
    day: "2-digit", // numeric day of the month (e.g., '25')
  };

  const dateOptions = {
    month: "short", // abbreviated month name (e.g., 'Oct')
    year: "numeric", // numeric year (e.g., '2023')
    day: "numeric", // numeric day of the month (e.g., '25')
  };

  const timeOptions = {
    hour: "numeric", // numeric hour (e.g., '8')
    minute: "numeric", // numeric minute (e.g., '30')
    hour12: true, // use 12-hour clock (true) or 24-hour clock (false)
  };

  const formattedDateTime = new Date(dateString).toLocaleString(
    "en-US",
    dateTimeOptions
  );

  const formattedDateDay = new Date(dateString).toLocaleString(
    "en-US",
    dateDayOptions
  );

  const formattedDate = new Date(dateString).toLocaleString(
    "en-US",
    dateOptions
  );

  const formattedTime = new Date(dateString).toLocaleString(
    "en-US",
    timeOptions
  );

  return {
    dateTime: formattedDateTime,
    dateDay: formattedDateDay,
    dateOnly: formattedDate,
    timeOnly: formattedTime,
  };
};