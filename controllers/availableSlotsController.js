

// Mock data
const mockAvailableSlots = {
  1: [
    { startTime: "2025-01-13T09:00:00Z", endTime: "2025-01-13T10:00:00Z" },
    { startTime: "2025-01-13T11:00:00Z", endTime: "2025-01-13T12:00:00Z" },
  ],
  2: [
    { startTime: "2025-01-14T13:00:00Z", endTime: "2025-01-14T14:00:00Z" },
    { startTime: "2025-01-14T15:00:00Z", endTime: "2025-01-14T16:00:00Z" },
  ],
};

const AvailableSlotsController = {
  getAvailableSlots: (req, res) => {
    try {
      const { userId } = req.params;
      console.log("userId", userId);
      console.log("mockAvailableSlots", mockAvailableSlots[1]);
      const availableSlots = mockAvailableSlots[userId]
      if (!availableSlots) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.status(200).json(availableSlots);
    } catch (err) {
      console.error("get available slots failed", err);
      res.status(500).json({ 'Failed to get available slots:': err });
    }

  }

};

export default AvailableSlotsController;