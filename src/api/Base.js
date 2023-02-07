let BASE_URL = process.env.VUE_APP_API_BASE_URL
let str = String(BASE_URL)
if (str.endsWith("/") && str.length > 2) {
    str = str.substring(0, str.length - 2)
}
module.exports = {BASE_URL}