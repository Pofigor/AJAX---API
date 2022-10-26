const adminCheck = (req, res, next) => {
  const { isAdmin } = req;
  if (isAdmin) {
    next();
  } else {
    res.redirect('/');
  }
};

module.exports = { adminCheck };
