import Interview from "../models/Interview.js";

// Create a new interview
export const createInterview = async (req, res) => {
    try {
        const interview = new Interview({
            ...req.body,
            user: req.user.id, // Store logged-in user's ID
        });

        await interview.save();
        res.status(201).json({ message: "Interview scheduled successfully", interview });
    } catch (error) {
        res.status(500).json({ error: "Error scheduling interview" });
    }
};



// Get all interviews
export const getAllInterviews = async (req, res) => {
    try {
        const interviews = await Interview.find({ user: req.user.id }); // Fetch only user-specific interviews
        res.status(200).json(interviews);
    } catch (error) {
        res.status(500).json({ error: "Error fetching interviews" });
    }
};



// Get interview by ID
export const getInterviewById = async (req, res) => {
    try {
        const interview = await Interview.findById(req.params.id);
        if (!interview) return res.status(404).json({ error: "Interview not found" });
        res.status(200).json(interview);
    } catch (error) {
        res.status(500).json({ error: "Error fetching interview" });
    }
};

// Update interview
export const updateInterview = async (req, res) => {
    try {
        const interview = await Interview.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!interview) return res.status(404).json({ error: "Interview not found" });
        res.status(200).json({ message: "Interview updated successfully", interview });
    } catch (error) {
        res.status(500).json({ error: "Error updating interview" });
    }
};

// Delete interview
export const deleteInterview = async (req, res) => {
    try {
        const interview = await Interview.findByIdAndDelete(req.params.id);
        if (!interview) return res.status(404).json({ error: "Interview not found" });
        res.status(200).json({ message: "Interview deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Error deleting interview" });
    }
};
