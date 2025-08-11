Planets Fact Site

A responsive and interactive educational website built with React, TypeScript, Vite, React Router, and Tailwind CSS. It showcases detailed facts about the planets in our Solar System, including overview, internal structure, and surface geology.
Features

    Responsive Layout: Adaptable design for mobile, tablet, and desktop views.

    Data-Driven: Loads planet data from a data.json file.

    Client-Side Routing: Navigate between planets using React Router.

    Dynamic Content: Toggle between Overview, Structure, and Surface modes with state management.

    Reusable Components: Modular design for planet details and description switches.

Tech Stack
Technology Purpose
React + TS Frontend framework & typing
Vite Fast development build tool
React Router Routing between planet pages
Tailwind CSS Utility-first styling
data.json Holds planet information
Installation

    Clone the repo:

git clone https://github.com/Bletfen/Planets-Fact-Site.git
cd Planets-Fact-Site

Install dependencies:

npm install

Run the app:

    npm run dev

    Open http://localhost:3000 in your browser.

Folder Structure

public/ # Static assets (e.g., index.html, images)
src/
├─ components/ # Reusable UI components
├─ pages/
│ └─ Planet.tsx # Planet detail page
├─ layout/ # App layout & routing
├─ data.json # Planetary data
└─ index.css # Global and Tailwind CSS

Development Insights

    State Lifting: activeDescription moves between Layout and Planet page via React Router’s Outlet context.

    CSS Variables + Tailwind: Responsive width, height, and margin styles are managed using inline CSS custom properties.

    Stable Background: The stars background covers the full viewport, while content is centered within a max-w-[144rem] container.

    UX Optimizations: Invisible description blocks ensure consistent layout and prevent jumpiness when toggling content.

Future Improvements

    Smooth transitions between tabs (e.g., content height or image fade).

    Add accessibility enhancements (keyboard navigation, label focus states).

    Explore using React Context or state management libraries for cleaner prop passing.

    Implement animations using Framer Motion or CSS transitions.

Thanks for checking out the project! Let me know if you'd like help optimizing layout transitions or responsive behavior.
