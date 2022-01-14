module.exports = (req, res, next) => {
  const { username, email, password } = req.body;

  const pattern = (email) => String(email).toLowerCase().match(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

  console.log(parseInt(username.length) < 3);
  console.log(parseInt(password.length) < 3);
  console.log(parseInt(password.length) > 8);

  if (parseInt(username.length) < 3 || parseInt(password.length) < 3 || parseInt(password.length) > 8) {
    return res.status(400).json({
      "message": "invalid data"
    });
  }

  next();
};
