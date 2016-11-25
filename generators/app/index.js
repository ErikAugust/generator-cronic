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
        name: 'eloquent',
        message: 'Database: Would you like to use Eloquent (ORM)?',
        default: true
      },
      {
        type: 'confirm',
        name: 'redis',
        message: 'Cache: Would you like to use Redis?',
        default: true
      },
      {
        type: 'confirm',
        name: 'memcache',
        message: 'Cache: Would you like to use Memcache / Memcached?',
        default: false
      },
      {
        type: 'list',
        name: 'databaseType',
        message: 'Default Database: Enter type of default database',
        default: 'mysql',
        choices: ['mysql', 'postgres', 'sqlsrv', 'sqlite']
      },
      {
        type: 'input',
        name: 'databaseHost',
        message: 'Default Database: Enter host address of default database',
        default: 'localhost'
      },
      {
        type: 'input',
        name: 'databasePort',
        message: 'Default Database: Enter port of default database',
        default: '3306'
      },
      {
        type: 'input',
        name: 'databaseName',
        message: 'Default Database: Enter name of default database'
      },
      {
        type: 'input',
        name: 'databaseUsername',
        message: 'Default Database: Enter username of default database'
      },
      {
        type: 'input',
        name: 'databasePassword',
        message: 'Default Database: Enter password of default database'
      }
    ];

    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer;
      this.props = props;
    }.bind(this));
  },

  writing: function () {

    /**
     * app.ini
     */
    this.fs.copyTpl(
      this.templatePath('_app.ini'),
      this.destinationPath('php/config/app.ini'),
      {data: this.props}
    );

    /**
     * database.ini
     */
    this.fs.copyTpl(
      this.templatePath('_database.ini'),
      this.destinationPath('php/config/database.ini'),
      {data: this.props}
    );


    /**
     * redis.ini
     */
    this.fs.copy(
      this.templatePath('_redis.ini'),
      this.destinationPath('php/config/redis.ini')
    );

    /**
     * memcache.ini
     */
    this.fs.copy(
      this.templatePath('_memcache.ini'),
      this.destinationPath('php/config/memcache.ini')
    );
  }
});
