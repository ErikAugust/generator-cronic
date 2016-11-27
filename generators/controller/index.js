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
        name: 'name',
        message: 'Enter name of controller'
      },
      {
        type: 'input',
        name: 'description',
        message: 'Enter description of controller'
      }
    ];

    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer;
      this.props = props;
    }.bind(this));
  },

  writing: function () {
    this.fs.copyTpl(
      this.templatePath('_Controller.txt'),
      this.destinationPath('php/controllers/' + this.props.name + 'Controller.php'),
      {data: this.props}
    );
  }
});
