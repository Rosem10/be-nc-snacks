exports.getStatus = (req, res) => {
  res.status(200).send({ msg: 'api up and running!' });
};
