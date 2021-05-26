module.exports = welcome

welcome.welcome = welcome
welcome.colorize = colorize

/**
 * https://en.wikipedia.org/wiki/ANSI_escape_code#Colors
 * @param ansiCode color code, i.e. 92 means fore ground light green
 * @returns function that generate colorful message
 */
function colorize (ansiCode) {
  return function (message) {
    return `\u001b[${ansiCode}m${message}\u001b[0m`
  }
}

function welcome () {
  const lightGreen = colorize(92)
  console.log(lightGreen('A warm welcome from EdgerOS community!\n'))
}
