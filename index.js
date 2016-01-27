module.exports = {
  plugins: [
    require('babel-plugin-array-includes'),

    require('babel-plugin-syntax-class-properties'),
    require('babel-plugin-syntax-decorators'),
    require('babel-plugin-syntax-object-rest-spread'),

    require('babel-plugin-transform-class-properties'),
    require('babel-plugin-transform-decorators-legacy'),
    require('babel-plugin-transform-object-assign'),
    require('babel-plugin-transform-object-rest-spread')
  ]
};
