var obj = {}
obj.tosqlstr = str => {
  return str
    .replace(/\\/g, '\\\\')
    .replace(/"/g, '\\"')
}
module.exports = obj