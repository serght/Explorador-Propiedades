Properties Explorer
Is a modern web application built with Next.js that allows users to explore detailed information about countries worldwide. It features a responsive design, interactive filters, and intuitive navigation.

The app fetches real-time data from the public REST Countries API and displays relevant information such as population, region, capital, currencies, languages, and neighboring countries.

🧹 Key Features

-Filter countries by name or region

-View detailed country profiles including:

--Flag,Native name,Population,Region and subregion,Capital city,Currencies and languages

-Clickable list of border countries

-Responsive layout for mobile and desktop

-Clean UI with custom color palette and styling

🚀 Technologies Used

| Area      | Technology                            |
| --------- | ------------------------------------- |
| Framework | Next.js (App Router)                  |
| Language  | TypeScript                            |
| Styling   | Tailwind CSS                          |
| State     | React useState + custom hooks         |
| API       | REST Countries API (v3.1)             |
| Routing   | File-based routing with dynamic pages |

⚙️ Setup Guide

1. Clone the repository
 git clone https://github.com/serght/Explorador-Propiedades.git

 cd prueba-tecnica

2. Install dependencies
   
npm install

3. Run the development server
   
npm run dev

Frontend will be available at:

http://localhost:3000

📁 Folder Structure

.
├── app/                  # Main routes (home and dynamic pages)
├── components/           # Reusable UI components (Navbar, Card, etc.)
├── hooks/                # Custom React hooks
├── public/               # Static assets (logo, favicon, etc.)
├── service/              # API integration logic
├── styles/               # Tailwind and global styles
├── types                 # TypeScript interfaces and type definitions
├── utils/                # Formatters and helpers
├── tailwind.config.js    # Tailwind configuration
└── README.md             # Project documentation



