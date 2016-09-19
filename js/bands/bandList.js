/**
 * @author [https://github.com/silence717]
 * @since  2016-09-19
 */
module.exports = function(app) {
    app.factory('bandList', function() {
       return [
           {name: 'silence', formed: 1990 },
           {name: 'silence717', formed: 1991 }
       ];
    });
};