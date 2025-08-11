🌍 Planets Fact Site

A responsive multi-page site that displays facts about each planet in our solar system. Built with React, TypeScript, and React Router, following a mobile-first approach. Data is loaded from a local JSON file.
🚀 Live Site

🔗 https://planets-fact-site-sage-theta.vercel.app/Earth

📁 Project Structure

Planets-Fact-Site/
├── public/
│ ├── planets/ # Planet images and assets
│ └── index.html # Base HTML
├── src/
│ ├── components/ # UI components (Navbar, Planet details, etc.)
│ ├── pages/ # Route pages
│ ├── data.json # Planet data
│ ├── App.tsx # Main app file
│ ├── main.tsx # Entry point
│ └── index.css # Global styles
├── package.json
└── README.md

🛠️ Features

    Mobile-first responsive design with a hamburger menu on small screens and a horizontal menu on desktop.

    Dynamic routing with React Router — click a planet name to see its facts.

    Data-driven rendering from data.json.

    SVG planet images for crisp scaling.

    Hover and active states for navigation items.

    TypeScript for type safety and maintainable code.

💻 Technologies Used

    React (Vite)

    TypeScript

    React Router

    Tailwind CSS for styling

    ESLint & Prettier for code formatting and linting

📦 Installation & Usage

    Clone the repository:

git clone https://github.com/Bletfen/Planets-Fact-Site.git

Navigate into the project folder:

cd Planets-Fact-Site

Install dependencies:

npm install

Start the development server:

    npm run dev

📜 License

This project is open-source and available under the MIT License.
