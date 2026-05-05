const validate = (schema) => {
  return (req, res, next) => {
    const data = req.body;
    const result = schema.safeParse(data);
    if (!result.success) {
      res.status(400).json({ err: result.error.errors });
    } else {
      next();
    }
  };
};

export default validate;
