/**
 * Main project controller
 */

module.exports = {
  /**
   * Index page route /
   */
  index: function(req, res) {
    var we = req.getWe();

    res.redirect('/admin');

    // res.locals.template = 'home/index';

    // res.view({ title: 'Express' });
  }
}