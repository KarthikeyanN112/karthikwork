// Validate student input
const validateStudent = (req, res, next) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({
      error: "Validation failed: name and email are required."
    });
  }

  next();
};

module.exports = validateStudent;
