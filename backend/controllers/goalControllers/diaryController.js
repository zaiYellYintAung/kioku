const Diary = require("../../models/goalModels/diaryModel");

// Controller methods for diaries
const getAllDiaries = async (req, res) => {
  try {
    const items = await Diary.find();
    res.status(200).json(items);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getDiaryById = async (req, res) => {
  try {
    const diary = await Diary.findById(req.params.id);
    if (!diary) {
      res.staus(404).json({ message: "Not found" });
    }
    res.status(200).json(diary);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const createDiary = async (req, res) => {
  const { title, body } = req.body;

  try {
    const newDiary = new Diary({ title, body });
    res.status(200).json(newDiary);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const updateDiary = async (req, res) => {
  const { title, body } = req.body;
  try {
    diary = Diary.findByIdAndUpdate(
      req.params.id,
      { title, body },
      { new: true }
    );
    if (!diary) {
      res.staus(404).json({ message: "Not found" });
    }
    res.status(200).json(diary);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const deleteDiary = async (req, res) => {
  const { title, body } = req.body;
  try {
    diary = Diary.findByIdAndDelete(req.params.id);
    if (!diary) {
      res.staus(404).json({ message: "Not found" });
    }
    res.status(200).json(diary);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  getAllDiaries,
  getDiaryById,
  createDiary,
  updateDiary,
  deleteDiary,
};
