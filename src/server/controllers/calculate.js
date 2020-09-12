exports.add = (req, res) => {
  const { num1, num2 } = req.body;

  if (typeof num1 === "string" || typeof num2 === "string") {
    return res.json({ status: "error", message: "Invalid data types" });
  }

  if (num1 > 1000000 || num2 > 1000000) {
    return res.json({ status: "error", message: "Overflow" });
  }

  return res.json({
    status: "success",
    message: "the sum of given two numbers",
    sum: num1 + num2,
  });
};

exports.sub = (req, res) => {
  const { num1, num2 } = req.body;

  if (typeof num1 === "string" || typeof num2 === "string") {
    return res.json({ status: "error", message: "Invalid data types" });
  }

  if (num1 < 1000000 || num2 < 1000000) {
    return res.json({ status: "error", message: "Underflow" });
  }

  return res.json({
    status: "success",
    message: "the difference of given two number",
    sum: num1 - num2,
  });
};

exports.multiply = (req, res) => {
  const { num1, num2 } = req.body;

  if (typeof num1 === "string" || typeof num2 === "string") {
    return res.json({ status: "error", message: "Invalid data types" });
  }

  if (num1 > 1000000 || num2 > 1000000) {
    return res.json({ status: "error", message: "Overflow" });
  }

  return res.json({
    status: "success",
    message: "The product of given numbers",
    result: num1 * num2,
  });
};

exports.division = (req, res) => {
  const { num1, num2 } = req.body;

  if (num2 === 0) {
    return res.json({ status: "error", message: "Cannot divide by zero" });
  }

  return res.json({
    status: "success",
    message: "The division of given numbers",
    result: num1 / num2,
  });
};
