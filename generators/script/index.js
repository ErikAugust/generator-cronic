'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.Base.extend({
  prompting: function () {
    this.log(chalk.green('Cronic') + ': Generate a new script...');

    var prompts = [
      {
        type: 'input',
        name: 'name',
        message: 'Enter name of script (without .php)'
      },
      {
        type: 'input',
        name: 'description',
        message: 'Enter description of script'
      }
    ];

    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer;
      this.props = props;
    }.bind(this));
  },

  writing: function () {

    this.props.fileLocation = '';

    var locationLength = !this.props.name.match(/\//g) ? 0 : this.props.name.match(/\//g).length;

    for (var i = 0; i < locationLength; i++) {
      this.props.fileLocation += '/..';
    }

    this.fs.copyTpl(
      this.templatePath('_script.txt'),
      this.destinationPath('php/scripts/' + this.props.name + '.php'),
      {data: this.props}
    );
  }
});
