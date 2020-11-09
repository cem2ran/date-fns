'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})

var _index = require('../../../_lib/buildMatchPatternFn/index.js')

var _index2 = _interopRequireDefault(_index)

var _index3 = require('../../../_lib/buildMatchFn/index.js')

var _index4 = _interopRequireDefault(_index3)

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

var matchOrdinalNumberPattern = /^\d+\./i
var parseOrdinalNumberPattern = /\d+/i

var matchEraPatterns = {
  narrow: /^(e\.m\.a|m\.a\.j|eKr|pKr)/i,
  abbreviated: /^(e\.m\.a|m\.a\.j|eKr|pKr)/i,
  wide: /^(enne meie ajaarvamist|meie ajaarvamise järgi|enne Kristust|pärast Kristust)/i
}

var parseEraPatterns = {
  any: [/^e/i, /^(m|p)/i]
}

var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^K[1234]/i,
  wide: /^[1234](\.)? kvartal/i
}
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
}

var matchMonthPatterns = {
  narrow: /^[jvmasond]/i,
  abbreviated: /^('jaan|veebr|märts|apr|mai|juuni|juuli|aug|sept|okt|nov|dets')/i,
  wide: /^('jaanuar|veebruar|märts|aprill|mai|juuni|juuli|august|september|oktoober|november|detsember')/i
}

var parseMonthPatterns = {
  narrow: [
    /^j/i,
    /^v/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^ja/i,
    /^v/i,
    /^mär/i,
    /^ap/i,
    /^mai/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
}

var matchDayPatterns = {
  narrow: /^[petknrl]/i,
  short: /^[petknrl]/i,
  abbreviated: /^(püh?|esm?|tei?|kolm?|nel?|ree?|laup?)\.?/i,
  wide: /^('pühapäev|esmaspäev|teisipäev|kolmapäev|neljapäev|reede|laupäev')/i
}

var parseDayPatterns = {
  any: [/^p/i, /^e/i, /^t/i, /^k/i, /^n/i, /^r/i, /^l/i]
}

var matchDayPeriodPatterns = {
  any: /^(am|pm|kesköö|keskpäev|hommik|pärastlõuna|õhtu|öö)/i
}

var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^keskö/i,
    noon: /^keskp/i,
    morning: /hommik/i,
    afternoon: /pärastlõuna/i,
    evening: /õhtu/i,
    night: /öö/i
  }
}

var match = {
  ordinalNumber: (0, _index2.default)({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function valueCallback(value) {
      return parseInt(value, 10)
    }
  }),

  era: (0, _index4.default)({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseEraPatterns,
    defaultParseWidth: 'any'
  }),

  quarter: (0, _index4.default)({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: 'any',
    valueCallback: function valueCallback(index) {
      return index + 1
    }
  }),

  month: (0, _index4.default)({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: 'any'
  }),

  day: (0, _index4.default)({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPatterns,
    defaultParseWidth: 'any'
  }),

  dayPeriod: (0, _index4.default)({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: 'any',
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: 'any'
  })
}

exports.default = match
module.exports = exports['default']