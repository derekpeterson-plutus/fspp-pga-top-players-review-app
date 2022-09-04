//***********************************************************
//CREATE HELPER FUNCTIONS TO VALIDATE DATA FROM WEBSITE USERS
//***********************************************************

const changeImageUrl = (req, res, next) => {
  const { image } = req.body;
  if (!image) {
    req.body.image =
      'https://dummyimage.com/400x400/6e6c6e/e9e9f5.png&text=No+Image';
  }
  next();
};

const checkValues = (req, res, next) => {
  req.body.name
    ? next()
    : res.status(400).json({
        error: "Player's name is required! Please enter player's name!",
      });
};

const checkBoolean = (req, res, next) => {
  const { is_favorite } = req.body;

  if (
    is_favorite == 'true' ||
    is_favorite == 'false' ||
    is_favorite == undefined
  ) {
    next();
  } else {
    res.status(400).json({
      error: 'is_favorite must be a boolean value. Please try again!',
    });
  }
};

module.exports = { changeImageUrl, checkBoolean, checkValues };
