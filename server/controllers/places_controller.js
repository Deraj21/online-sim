let citySearches = ['-', '-', '-'];

module.exports = {

  read: (req, res) => {
    res.status(200).send( citySearches );
  },
  create: (req, res) => {
    citySearches.pop();
    citySearches.unshift( req.body.city );
    res.status(200).send( citySearches );
  }
}