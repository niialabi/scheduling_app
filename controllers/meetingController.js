import Meeting from "../models/meeting.js";

const MeetingController = {
  createMeeting: async (req, res) => {
    try {
      const { title, description, userId, startTime, endTime } = req.body;

      // Validate input
      if (!title || !userId || !startTime || !endTime) {
        return res.status(400).json({ error: 'Missing required fields' });
      }

      // Create meeting
      const meeting = await Meeting.create({ title, description, userId, startTime, endTime });
      console.log(`Notification: Meeting '${title}' created.`);
      res.status(201).json(meeting);
    } catch (err) {
      console.error("create meeting failed", err);
      res.status(500).json({ 'Failed to create meeting:': err });
    }
  },
  // Update a meeting (PUT /meetings/:meetingId)
  updateMeeting: async (req, res) => {
    try {
      const { meetingId } = req.params;
      const { title, description, userId, startTime, endTime } = req.body;

      // Validate input
      if (!title || !userId || !startTime || !endTime) {
        return res.status(400).json({ error: 'Missing required fields' });
      }

      // Find meeting by meetingId
      const meeting = await Meeting.findByPk(meetingId);
      if (!meeting) {
        return res.status(404).json({ error: 'Meeting not found' });
      }

      // Update meeting details
      meeting.title = title;
      meeting.description = description;
      meeting.userId = userId;
      meeting.startTime = startTime;
      meeting.endTime = endTime;

      await meeting.save();
      console.log(`Notification: Meeting '${title}' updated.`);
      res.status(200).json(meeting);
    } catch (err) {
      console.error("update meeting failed", err);
      res.status(500).json({ 'Failed to update meeting:': err });
    }
  },

  // Cancel a meeting (DELETE /meetings/:meetingId)
  cancelMeeting: async (req, res) => {
    try {
      const { meetingId } = req.params;

      // Find meeting by meetingId
      const meeting = await Meeting.findByPk(meetingId);
      if (!meeting) {
        return res.status(404).json({ error: 'Meeting not found' });
      }

      // Delete meeting
      await meeting.destroy();
      console.log(`Notification: Meeting '${meeting.title}' canceled.`);
      res.status(200).json({ message: 'Meeting canceled successfully' });
    } catch (err) {
      console.error("cancel meeting failed", err);
      res.status(500).json({ 'Failed to cancel meeting:': err });
    }
  }

};

export default MeetingController;