import { Router } from "express";
import getEvents from "../services/events/getEvents.js";
import createEvent from "../services/events/createEvent.js";
import getEventById from "../services/events/getEventById.js";
import deleteEventById from "../services/events/deleteEventById.js";
import updateEventById from "../services/events/updateEventById.js";
import auth from "../middleware/auth.js";

const router = Router();

router.get("/", async (req, res) => {
  const { title, location } = req.query;
  const events = await getEvents(title, location);
  res.status(200).json(events);
});

router.post("/", auth, async (req, res) => {
  const {
    title,
    description,
    location,
    image,
    startTime,
    endTime,
    createdBy,
    categoryIds,
  } = req.body;
  const newEvent = await createEvent(
    title,
    description,
    location,
    image,
    startTime,
    endTime,
    createdBy,
    categoryIds
  );
  res.status(201).json(newEvent);
});

router.get("/:id", async (req, res, next) => {
  const { id } = req.params;

  try {
    const event = await getEventById(id);

    if (!event) {
      res.status(404).json({ message: `Event with id ${id} not found` });
    } else {
      res.status(200).json(event);
    }
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", auth, async (req, res, next) => {
  const { id } = req.params;
  try {
    const event = await deleteEventById(id);

    if (event) {
      res.status(200).send({
        message: `Event with id ${id} successfully deleted`,
        event,
      });
    } else {
      res.status(404).json({
        message: `Event with id ${id} not found`,
      });
    }
  } catch (error) {
    next(error);
  }
});

router.put("/:id", auth, async (req, res, next) => {
  const { id } = req.params;
  const {
    title,
    description,
    location,
    image,
    startTime,
    endTime,
    createdBy,
    categoryIds,
  } = req.body;

  try {
    const event = await updateEventById(id, {
      title,
      description,
      location,
      image,
      startTime,
      endTime,
      createdBy,
      categoryIds,
    });

    if (event) {
      res.status(200).send({
        message: `Event with id ${id} successfully updated`,
        event,
      });
    } else {
      res.status(404).json({
        message: `Event with id ${id} not found`,
      });
    }
  } catch (error) {
    next(error);
  }
});

export default router;
