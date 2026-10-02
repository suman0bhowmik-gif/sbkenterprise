/**
 * Helper to compute live open/closed status for SBk Enterprise in Agartala, Tripura (IST, UTC+5:30)
 * Monday – Saturday: 9:30 AM – 8:00 PM (9.5 to 20.0)
 * Sunday: 10:00 AM – 4:00 PM (10.0 to 16.0)
 */

export interface StoreStatus {
  isOpen: boolean;
  statusText: string;
  nextChangeText: string;
  dayName: string;
  currentTimeString: string;
}

export function getStoreStatus(): StoreStatus {
  // Compute current date in Indian Standard Time (UTC+5:30)
  const now = new Date();
  const utc = now.getTime() + now.getTimezoneOffset() * 60000;
  const istOffset = 5.5 * 3600000;
  const istDate = new Date(utc + istOffset);

  const day = istDate.getDay(); // 0 is Sunday, 1 is Monday ... 6 is Saturday
  const hours = istDate.getHours();
  const minutes = istDate.getMinutes();
  const currentDecimalHour = hours + minutes / 60;

  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dayName = days[day];

  const timeFormatter = new Intl.DateTimeFormat('en-IN', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
    timeZone: 'Asia/Kolkata',
  });
  const currentTimeString = timeFormatter.format(istDate);

  let isOpen = false;
  let statusText = 'Closed';
  let nextChangeText = '';

  if (day === 0) {
    // Sunday: 10:00 AM – 4:00 PM
    if (currentDecimalHour >= 10.0 && currentDecimalHour < 16.0) {
      isOpen = true;
      statusText = 'Open now';
      nextChangeText = 'Closes at 4:00 PM today (Sunday hours)';
    } else if (currentDecimalHour < 10.0) {
      isOpen = false;
      statusText = 'Closed now';
      nextChangeText = 'Opens today at 10:00 AM (Sunday hours)';
    } else {
      isOpen = false;
      statusText = 'Closed now';
      nextChangeText = 'Opens Monday at 9:30 AM';
    }
  } else {
    // Monday – Saturday: 9:30 AM – 8:00 PM
    if (currentDecimalHour >= 9.5 && currentDecimalHour < 20.0) {
      isOpen = true;
      statusText = 'Open now';
      nextChangeText = 'Closes at 8:00 PM';
    } else if (currentDecimalHour < 9.5) {
      isOpen = false;
      statusText = 'Closed now';
      nextChangeText = 'Opens today at 9:30 AM';
    } else {
      isOpen = false;
      statusText = 'Closed now';
      nextChangeText = day === 6 ? 'Opens Sunday at 10:00 AM' : 'Opens tomorrow at 9:30 AM';
    }
  }

  return {
    isOpen,
    statusText,
    nextChangeText,
    dayName,
    currentTimeString,
  };
}
