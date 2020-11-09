var formatRelativeLocale = {
  lastWeek: "'i' EEEE's kl.' p",
  yesterday: "'i går kl.' p",
  today: "'i dag kl.' p",
  tomorrow: "'i morgen kl.' p",
  nextWeek: "'på' EEEE 'kl.' p",
  other: 'P'
}

export default function formatRelative(token, date, baseDate, options) {
  return formatRelativeLocale[token]
}