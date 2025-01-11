import { Router } from "express";
const appRouter = Router();
import MeetingController from "../controllers/meetingController.js";
import AvailableSlotsController from "../controllers/availableSlotsController.js";

// router.use("/meetings", meetingRoutes);


// router.get("/", MeetingController.createMeeting);
appRouter.post("/meetings", MeetingController.createMeeting);
appRouter.get("/users/:userId/available-slots", AvailableSlotsController.getAvailableSlots);
appRouter.put("/meetings/:meetingId", MeetingController.updateMeeting);
appRouter.delete("/meetings/:meetingId", MeetingController.cancelMeeting);




export default appRouter;