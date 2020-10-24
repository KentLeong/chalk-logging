import dotenv from "dotenv";
dotenv.config();
import chalk from "chalk";

var log = {
  title(message) {
    if (process.env.DEV == "false") return;
    console.log(chalk.bold(message))
  },
  success(message) {
    if (process.env.DEV == "false") return;
    if (typeof message == "object") {
      var msg = message.statusText.split(" : ");
      var status = chalk.green("success "+msg[0]);
      console.log(status+" "+msg[1]);
    } else {
      var status = chalk.green("success ");
      console.log(status+message);
    }
  },
  warning(message) {
    if (process.env.DEV == "false") return;
    if (typeof message == "object") {
      var msg = message.statusText.split(" : ");
      var status = chalk.yellow("warning "+msg[0]);
      console.log(status+" "+msg[1]);
    } else {
      var status = chalk.yellow("warning ");
      console.log(status+message);
    }
  },
  info(message) {
    if (process.env.DEV == "false") return;
    if (typeof message == "object") {
      var msg = message.statusText.split(" : ");
      var status = chalk.blue("info "+msg[0]);
      console.log(status+" "+msg[1]);
    } else {
      var status = chalk.blue("info ");
      console.log(status+message);
    }
  },
  error(message) {
    if (process.env.DEV == "false") return;
    if (typeof message == "object") {
      var msg = message.statusText.split(" : ");
      var status = chalk.red("error "+msg[0]);
      console.log(status+" "+msg[1]);
    } else {
      var status = chalk.red("error ");
      console.log(status+message);
    }
  },
  complete(message) {
    if (process.env.DEV == "false") return;
    if (typeof message == "object") {
      var msg = message.statusText.split(" : ");
      var status = chalk.magenta("complete "+msg[0]);
      console.log(status+" "+msg[1]);
    } else {
      var status = chalk.magenta("complete ");
      console.log(status+message);
    }
  },
  group(messages) {
    if (process.env.DEV == "false") return;
    var branch = "├─"
    var end = "└─"
    for (let i = 0; i < messages.length; i++) {
      if (i+1 === messages.length) return console.log(end + " " + messages[i]);
      console.log(branch + " " + messages[i]);
    }
  },
  branch(message) {
    if (process.env.DEV == "false") return;
    console.log("├─ "+message);
  },
  openBranch(message) {
    if (process.env.DEV == "false") return;
    console.log("├  "+message);
  },
  endBranch(message) {
    if (process.env.DEV == "false") return;
    console.log("└─ "+message);
  }
}

export default log;
