const express = require('express');
const router = express.Router();
const multer = require('multer');

// Configure Multer for memory storage (we don't need to save files to disk for this demo)
const storage = multer.memoryStorage();
const upload = multer({
    storage: storage,
    limits: { fileSize: 10 * 1024 * 1024 }, // 10MB limit
    fileFilter: (req, file, cb) => {
        if (file.mimetype === 'application/pdf' ||
            file.mimetype === 'application/vnd.ms-powerpoint' ||
            file.mimetype === 'application/vnd.openxmlformats-officedocument.presentationml.presentation') {
            cb(null, true);
        } else {
            cb(new Error('Invalid file type. Only PDF and PPT files are allowed.'), false);
        }
    }
});

// Mock AI Analysis Function
const generateMockAnalysis = (filename) => {
    // Generate semi-random scores based on filename length to simulate variety
    const baseScore = 70 + (filename.length % 20);

    return {
        overallScore: baseScore,
        summary: "This pitch deck shows strong potential but lacks clarity in the go-to-market strategy. The problem statement is well-defined, but the solution scaling needs more concrete data.",
        sections: [
            {
                name: "Problem & Solution",
                score: baseScore + 5,
                status: "Strong",
                feedback: "Excellent articulation of the market pain point. The solution mapping is clear."
            },
            {
                name: "Market Size",
                score: baseScore - 10,
                status: "Needs Improvement",
                feedback: "TAM/SAM/SOM calculations feel slightly inflated. Consider citing more conservative sources."
            },
            {
                name: "Business Model",
                score: baseScore - 5,
                status: "Good",
                feedback: "Revenue streams are identified, but unit economics (CAC/LTV) are missing."
            },
            {
                name: "Traction",
                score: baseScore + 2,
                status: "Good",
                feedback: "Early pilot results are promising. Highlight the month-over-month growth more prominently."
            },
            {
                name: "Team",
                score: 95,
                status: "Excellent",
                feedback: "Strong founding team with relevant domain expertise."
            }
        ],
        investorReadiness: baseScore > 80 ? "High" : "Medium"
    };
};

// POST /api/audit/analyze
router.post('/analyze', upload.single('file'), (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ success: false, message: 'No file uploaded' });
        }

        // Simulate AI Processing Delay (2-3 seconds)
        setTimeout(() => {
            const analysis = generateMockAnalysis(req.file.originalname);
            res.json({
                success: true,
                filename: req.file.originalname,
                analysis: analysis
            });
        }, 2500);

    } catch (error) {
        console.error('Audit Error:', error);
        res.status(500).json({ success: false, message: 'Analysis failed' });
    }
});

module.exports = router;
