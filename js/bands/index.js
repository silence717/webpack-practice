/**
 * @author [https://github.com/silence717]
 * @since  2016-09-19
 */
module.exports = function(app) {
  require('./band-info')(app);
  require('./bandList')(app);
};