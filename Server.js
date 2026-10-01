require("dotenv").config();
const express = require("express");
const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY
});
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static("public"));

app.use(express.static(path.join(__dirname)));

app.post("/api/chat", (req, res) => {
  const message = req.body.message.toLowerCase();

    let reply;

    if (
        message.includes("college") ||
        message.includes("about") ||
        message.includes("government polytechnic") ||
        message.includes("kalyandurg")
    ) {
        reply = `Government Polytechnic, Kalyandurg is located at Borampalli,
Kalyandurg Mandal, Anantapur District, Andhra Pradesh.

The college is affiliated with the State Board of Technical Education
and Training (SBTET), Andhra Pradesh.

Courses offered:
1. Artificial Intelligence & Machine Learning (AIML)
2. Civil Engineering
3. Electronics & Communication Engineering (ECE)

Facilities include:
- Advanced computer laboratories
- ECE laboratories
- Civil Engineering laboratories
- Advanced Physics laboratory
- Advanced Chemistry laboratory
- College hostel
- Library

The college also conducts annual sports activities with
mandal-level and district-level competitions.

Eligible students can receive scholarships and fee-reimbursement
schemes.

For 2024-25, reported placement rates were:
- AIML: 100%
- Civil Engineering: 75%
- ECE: 78.33%

The college also has industry connections through various MoUs.`;
    } else if (message.includes("course") || message.includes("branch")) {
        reply = `Government Polytechnic, Kalyandurg offers:
1. Artificial Intelligence & Machine Learning (AIML)
2. Civil Engineering
3. Electronics & Communication Engineering (ECE)`;
    } else if (message.includes("facility") || message.includes("lab")) {
        reply = `Our college has advanced computer labs, ECE labs,
Civil Engineering labs, advanced Physics and Chemistry labs,
a library, and its own hostel.`;
    } else if (message.includes("hostel")) {
        reply = `Yes. Government Polytechnic, Kalyandurg has its own college hostel.`;
    } else if (message.includes("library")) {
        reply = `Yes. The college has a library for students.`;
    } else if (message.includes("sports")) {
        reply = `The college conducts an annual sports meet,
including mandal-level and district-level competitions.`;
    } else if (message.includes("placement")) {
        reply = `For 2024-25, reported placement rates were:
AIML: 100%, Civil Engineering: 75%, and ECE: 78.33%.`;
    } else if (message.includes("scholarship") || message.includes("fee")) {
        reply = `Eligible students can receive scholarships and
fee-reimbursement schemes.`;
    } else {
        reply = `I'm GPT.KLD, the AI College Information Assistant.
Ask me about our college, courses, facilities, hostel, library,
sports, scholarships, or placements.`;
    }

    res.json({ reply });
});

app.listen(PORT, () => {
    console.log(`GPT.KLD server running at http://localhost:${PORT}`);
});
