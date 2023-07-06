import HDKhaiThac from "../model/HDKhaiThac";

const getAll = async (req, res) => {
  try {
    const data = await HDKhaiThac.findAll();
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
