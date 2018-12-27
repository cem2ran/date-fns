import buildLocalizeFn from '../../../_lib/buildLocalizeFn/index.js'

var eraValues = {
  narrow: ['f.Kr.', 'e.Kr.'],
  abbreviated: ['f.Kr.', 'e.Kr.'],
  wide: ['f.Kr.', 'e.Kr.']
}

var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['1. kvt.', '2. kvt.', '3. kvt.', '4. kvt.'],
  wide: ['1:a kvartal', '2:a kvartal', '3:e kvartal', '4:e kvartal']
}

var monthValues = {
  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  abbreviated: [
    'jan.',
    'feb.',
    'mar.',
    'apr.',
    'maj.',
    'jun.',
    'jul.',
    'aug.',
    'sep.',
    'okt.',
    'nov.',
    'dec.'
  ],
  wide: [
    'januar',
    'februar',
    'marts',
    'april',
    'maj',
    'juni',
    'juli',
    'august',
    'september',
    'oktober',
    'november',
    'december'
  ]
}

var dayValues = {
  narrow: ['S', 'M', 'T', 'O', 'T', 'F', 'L'],
  short: ['sø', 'ma', 'ti', 'on', 'to', 'fr', 'lø'],
  abbreviated: ['søn.', 'man.', 'tir.', 'ons.', 'tor.', 'fre.', 'lør.'],
  wide: ['søndag', 'mandag', 'tirsdag', 'onsdag', 'torsdag', 'fredag', 'lørdag']
}

// https://www.unicode.org/cldr/charts/32/summary/da.html#1802
var dayPeriodValues = {
  narrow: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnat',
    noon: 'formiddag',
    morning: 'morgen',
    afternoon: 'eftermiddag',
    evening: 'aften',
    night: 'nat'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnat',
    noon: 'formiddag',
    morning: 'morgen',
    afternoon: 'eftermiddag',
    evening: 'aften',
    night: 'nat'
  },
  wide: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnat',
    noon: 'formiddag',
    morning: 'morgen',
    afternoon: 'eftermiddag',
    evening: 'aften',
    night: 'nat'
  }
}
var formattingDayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'midnat',
    noon: 'om formiddagen',
    morning: 'om morgenen',
    afternoon: 'om eftermiddagen',
    evening: 'om aftenen',
    night: 'om natten'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnat',
    noon: 'om formiddagen',
    morning: 'om morgenen',
    afternoon: 'om eftermiddagen',
    evening: 'om aftenen',
    night: 'om natten'
  },
  wide: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnat',
    noon: 'om formiddagen',
    morning: 'om morgenen',
    afternoon: 'om eftermiddagen',
    evening: 'om aftenen',
    night: 'om natten'
  }
}

function ordinalNumber(dirtyNumber) {
  var number = Number(dirtyNumber)

  var rem100 = number % 100
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
      case 2:
        return number + ':a'
    }
  }
  return number + ':e'
}

var localize = {
  ordinalNumber: ordinalNumber,

  era: buildLocalizeFn({
    values: eraValues,
    defaultWidth: 'wide'
  }),

  quarter: buildLocalizeFn({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: function(quarter) {
      return Number(quarter) - 1
    }
  }),

  month: buildLocalizeFn({
    values: monthValues,
    defaultWidth: 'wide'
  }),

  day: buildLocalizeFn({
    values: dayValues,
    defaultWidth: 'wide'
  }),

  dayPeriod: buildLocalizeFn({
    values: dayPeriodValues,
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide'
  })
}

export default localize
