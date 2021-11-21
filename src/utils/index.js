// function addZero (value) {
//   return value < 10 ? value.padStart(2, '0') : value
// }
function formatDateTime (timeStamp) {
  const date = new Date(timeStamp)
  const y = date.getFullYear(),
        m = (date.getMonth() + 1 + '').padStart(2, '0'),
        d = (date.getDate() + '').padStart(2, '0'),
        h = (date.getHours() + '').padStart(2, '0'),
        i = (date.getMinutes() + '').padStart(2, '0'),
        s = (date.getSeconds() + '').padStart(2, '0')

        return `${y}年${m}月${d} ${h}: ${i} : ${s}`
}

export {formatDateTime}