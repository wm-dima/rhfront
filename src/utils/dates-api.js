import moment from 'moment'

export { convertDateFromString, convertDateToString }

function convertDateFromString (dateStr) {
  if (dateStr) {
    /* eslint-disable new-cap */
    let m = new moment(dateStr)
    return m.toDate()
  } else {
    return null
  }
}

function convertDateToString (aDate) {
  if (aDate) {
    /* eslint-disable new-cap */
    let m = new moment(aDate)
    return m.format('YYYY-MM-DD')
  } else {
    return null
  }
}
