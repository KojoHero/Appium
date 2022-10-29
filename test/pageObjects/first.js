const { default: $ } = require("webdriverio/build/commands/browser/$");

class Pom {
    getColor() {return $('//android.widget.Button[@index="1"]')}
    getButton(x) {return $(`//android.widget.Button[@index=${x}]`)}
}

module.exports = new Pom();