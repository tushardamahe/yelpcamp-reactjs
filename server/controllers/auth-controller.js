const home = async (req, res) => {
  try {
    res.status(200).send("Welcome to Home");
  } catch (error) {
    console.log(error);
  }
};

const register = async (req, res) => {
  try {
    res.status(200).json("Welcome to Register from AC");
  } catch (error) {
    res.status(400).json({ msg: "Page Not Found" });
  }
};

module.exports = { home, register };
