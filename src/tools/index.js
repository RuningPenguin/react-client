// 获取url指定参数
export const getUrlKey = (name) => {
  return decodeURIComponent((new RegExp('[?|&]' + name + '=([^&;]+?)(&|#|;|$)')
    .exec(window.location.href) || ["", ""])[1].replace(/\+/g, '%20')) || null
}
// 获取缓存中token
export const getToken = () => {
  return localStorage.getItem("token");
}
// 储存缓存中token
export const setToken = (token) => {
  if (token) {
    localStorage.setItem("token", token)
  } else {
    localStorage.removeItem("token")
  }
}