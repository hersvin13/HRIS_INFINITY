const router = require("express").Router();
const Position = require("../db/models/position.model"); // Import the Position model

// READ
router.route("/").get(async (req, res) => {
  try {
    const positions = await Position.findAll();
    if (positions && positions.length > 0) {
      res.status(200).json({ success: true, positions });
    } else {
      res.status(404).json({ success: false, message: "No positions found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
});

// CREATE
router.route("/add").post(async (req, res) => {
  const { positionName } = req.body;

  if (!positionName) {
    return res.status(400).json({ error: "Position name is required" });
  }

  try {
    const position = await Position.create({ col_positionName: positionName });
    return res.status(200).json({ success: true, position });
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ success: false, error: "Internal server error" });
  }
});

// UPDATE
router.route("/update/:id").put(async (req, res) => {
  const positionId = req.params.id;
  try {
    const [updatedCount, updatedPositions] = await Position.update(
      { col_positionName: req.body.positionName },
      { where: { col_id: positionId }, returning: true }
    );

    if (updatedCount > 0) {
      return res
        .status(200)
        .json({ success: true, position: updatedPositions[0] });
    } else {
      return res
        .status(404)
        .json({ success: false, message: "Position not found" });
    }
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ success: false, error: "Internal server error" });
  }
});

// DELETE
router.route("/delete/:id").delete(async (req, res) => {
  const positionId = req.params.id;
  try {
    const deletedCount = await Position.destroy({
      where: { col_id: positionId },
    });
    if (deletedCount > 0) {
      return res
        .status(200)
        .json({ success: true, message: "Position deleted successfully" });
    } else {
      return res
        .status(404)
        .json({ success: false, message: "Position not found" });
    }
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ success: false, error: "Internal server error" });
  }
});

module.exports = router;
