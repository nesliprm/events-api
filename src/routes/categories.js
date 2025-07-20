import { Router } from "express";
import getCategories from "../services/categories/getCategories.js";
import createCategory from "../services/categories/createCategory.js";
import getCategoryById from "../services/categories/getCategoryById.js";
import deleteCategoryById from "../services/categories/deleteCategoryById.js";
import updateCategoryById from "../services/categories/updateCategoryById.js";
import auth from "../middleware/auth.js";
import winston from "winston";
const { error } = winston;

const router = Router();

router.get("/", async (req, res) => {
  const categories = await getCategories();
  res.status(200).json(categories);
});

router.post("/", auth, async (req, res) => {
  const { name } = req.body;
  const newCategory = await createCategory(name);
  res.status(201).json(newCategory);
});

router.get("/:id", async (req, res, next) => {
  const { id } = req.params;

  try {
    const category = await getCategoryById(id);

    if (!category) {
      res.status(404).json({ message: `Category with id ${id} not found` });
    } else {
      res.status(200).json(category);
    }
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", auth, async (req, res, next) => {
  const { id } = req.params;

  try {
    const category = await deleteCategoryById(id);

    if (category) {
      res.status(200).send({
        message: `Category with id ${id} successfully deleted`,
        category,
      });
    } else {
      res.status(404).json({
        message: `Category with id ${id} not found`,
      });
    }
  } catch (error) {
    next(error);
  }
});

router.put("/:id", auth, async (req, res, next) => {
  const { id } = req.params;
  const { name } = req.body;

  try {
    const category = await updateCategoryById(id, { name });

    if (category) {
      res.status(200).send({
        message: `Category with id ${id} successfully updated`,
        category,
      });
    } else {
      res.status(404).json({
        message: `Category with id ${id} not found`,
      });
    }
  } catch (error) {
    next(error);
  }
});

export default router;
