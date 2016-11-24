'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.Base.extend({
  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the funkadelic ' + chalk.green('Cronic') + ' application generator!'
    ));

    var prompts = [
      {
        type: 'confirm',
        name: 'redis',
        message: 'Would you like to use Redis?',
        default: true
      },
      {
        type: 'confirm',
        name: 'memcache',
        message: 'Would you like to use Memcache/Memcached?',
        default: true
      }
    ];

    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer;
      this.props = props;
    }.bind(this));
  },

  writing: function () {

    this.fs.copyTpl(
      this.templatePath('_app.ini'),
      this.destinationPath('php/config/app.ini'),
      {data: this.props}
    );

    /**this.fs.copy(
      this.templatePath('dummyfile.txt'),
      this.destinationPath('dummyfile.txt')
    );**/
  }
});
