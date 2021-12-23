module.exports = function convertUTCDateToLocalDate(date) {
    date.setMinutes(date.getMinutes() - date.getTimezoneOffset());
    return date;
}