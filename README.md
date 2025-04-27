# AI Safety Incident Dashboard

## Project Overview
This project is a **Frontend Intern Take-Home Assignment** for creating an interactive "AI Safety Incident Dashboard" using **Vite React**. The dashboard allows users to view, filter, sort, and report hypothetical AI safety incidents, aligning with HumanChain's mission to promote AI safety.

## Features
- Display a list of AI safety incidents with Title, Severity, and Reported Date.
- Filtering by Severity: "All", "Low", "Medium", "High".
- Sorting by Reported Date: Newest First, Oldest First.
- Toggleable "View Details" for each incident to show/hide the full description.
- A "Report New Incident" form to add new incidents with basic input validation.
- Responsive layout with clean styling.

## Setup Instructions
1. Clone the repository:
   ```bash
   git clone https://github.com/aditistuti/AI_Safety_Incident_Interface.git
   cd AI_Safety_Incident_Interface
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open the application in your browser at:
   ```
   http://localhost:5173
   ```

## Framework and Tools
- **Framework**: React (via Vite)
- **Language**: JavaScript
- **Styling**: CSS 

## Design Decisions
- **State Management**: Local component state was used to manage the list of incidents and form inputs, as the assignment specifies no backend integration.
- **Responsiveness**: Flexbox and Grid were used to ensure the layout adapts well to different screen sizes.
- **Validation**: Basic input validation ensures all fields are filled before submitting the "Report New Incident" form.
- **Mock Data**: The provided mock data structure was used to initialize the incident list.

## Challenges
- Managing the expanded/collapsed state for "View Details" required careful handling of individual incident states.
- Ensuring a clean and responsive design while keeping the styling minimal.

## Mock Data Example
```json
[
  { "id": 1, "title": "Biased Recommendation Algorithm", "description": "Algorithm consistently favored certain demographics...", "severity": "Medium", "reported_at": "2025-02-15T10:00:00Z" },
  { "id": 2, "title": "LLM Hallucination in Critical Info", "description": "LLM provided incorrect safety procedure information...", "severity": "High", "reported_at": "2025-04-01T14:30:00Z" },
  { "id": 3, "title": "Minor Data Leak via Chatbot", "description": "Chatbot inadvertently exposed non-sensitive user metadata...", "severity": "Low", "reported_at": "2025-03-20T09:15:00Z" }
]
```