import UnitsUsed from "../model/UnitsUsed";

const getAll = async (req, res) => {
  try {
    const data = await UnitsUsed.findAll();
    if (data)
      return res.status(200).json({
        message: "Success",
        data,
      });

    res.status(400).json({
      message: "Error",
    });
  } catch (err) {
    res.status(500).json({
      message: "Server error",
    });
  }
};

export { getAll };
