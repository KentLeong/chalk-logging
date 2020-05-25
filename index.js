const chalk = require('chalk');

var log = {
  success(message) {
    var status = chalk.green.underline("[ SUCCESS ]");
    var message = chalk.green(message);
    console.log(status+" "+message);
  },
  warning(message) {
    var status = chalk.yellow.underline("[ WARNING ]");
    var message = chalk.yellow(message);
    console.log(status+" "+message);
  },
  info(message) {
    var status = chalk.blue.underline("[ INFO    ]");
    var message = chalk.blue(message);
    console.log(status+" "+message);
  },
  error(message) {
    var status = chalk.red.underline("[ ERROR   ]");
    var message = chalk.red(message);
    console.log(status+" "+message);
  },
  complete(message) {
    var status = chalk.magenta.underline("[ COMPLETE ]");
    var message = chalk.magenta(message);
    console.log(status+" "+message);
  }
}

export { log }