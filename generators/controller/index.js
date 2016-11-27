'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.Base.extend({
  prompting: function () {
    this.log(chalk.green('Cronic') + ': Generate a new controller...');

    var prompts = [
      {
        type: 'input',
        name: 'controllerName',
        message: 'Enter name of controller used by route'
      }
    ];

    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer;
      this.props = props;
    }.bind(this));
  },

  writing: function () {

  }
});
