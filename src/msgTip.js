// errorTip (msg, type) {
//   this.$message({
//     showClose: true,
//     message: msg,
//     type: type
//   })
//   return false
// }
// eslint-disable-next-line no-unused-vars
exports.install = function (Vue, options) {
  Vue.prototype.msgTip = function (msg, type) {
    this.$message({
      showClose: true,
      message: msg,
      type: type
    })
    return false
  }
}
