import { Router } from "express";
import { MessagesController } from "./controllers/MessagesController";
import { SettingsController } from "./controllers/SettingsController";
import { UsersController } from "./controllers/UsersController";

const routes = Router();

const settingsControler = new SettingsController();
routes.post("/settings", settingsControler.create);
routes.get("/settings/:username", settingsControler.findByUsername);
routes.put("/settings/:username", settingsControler.update);

const usersController = new UsersController();
routes.post("/users", usersController.create);

const messagesController = new MessagesController();
routes.post("/messages", messagesController.create);
routes.get("/messages/:id", messagesController.showByUser);

export { routes };