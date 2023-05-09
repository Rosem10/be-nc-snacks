const {
  selectSnacks,
  selectSnackById,
  createSnack
} = require("../models/snacks.models");

exports.getSnacks = (req, res, next) => {
  const { sort_by, category } = req.query;
  selectSnacks(sort_by, category)
    .then((snacks) => {
      res.status(200).send({ snacks: snacks });
    })
    .catch((err) => {
      next(err);
    });
};

exports.getSnackById = (req, res, next) => {
  const snack_id = req.params.snack_id;
  selectSnackById(snack_id)
    .then((snack) => {
      res.status(200).send({ snack: snack });
    })
    .catch((err) => {
      next(err);
    });
};

exports.postSnack = (req, res) => {
  createSnack(req.body).then((snack) => {
    res.status(201).send({ snack: snack });
  });
};
