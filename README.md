# Mellsbank

  _Horizon is a real-time, multi-bank digital wallet for seamless transfers and smart money management._

## <a name="introduction">:star2: Introduction</a>

This banking app was built to connect multiple bank accounts, provides real-time transaction updates, enables peer-to-peer transfers between users, and offers comprehensive financial management tools.


## <a name="tech-stack">:gear: Tech Stack</a>

- Appwrite
- Chart.js
- Dwolla
- Next.js
- Plaid
- React Hook Form
- ShadCN
- TailwindCSS
- TypeScript
- Zod

## <a name="features">:star_struck: Features</a>

👉 **🔐 Authentication**: Secure SSR authentication with robust validation and role-based authorization.

👉 **🏦 Bank Connections**: Link multiple accounts seamlessly via Plaid for unified financial management.

👉 **💸 Funds Transfer**: Send money to other users through Dwolla with verified recipient details.

👉 **📊 Dashboard**: Overview of total balances, recent activity, and categorized spending insights.

👉 **🏛️ My Banks**: List of all connected banks with real-time balances and account details.

👉 **📂 Transactions**: Filterable, paginated history of all transactions across linked accounts.

👉 **🔄 Real-Time Sync**: Instant updates reflected across all views after bank actions or transfers.

👉 **📱 Responsive Design**: Optimized for seamless use across desktop, tablet, and mobile devices.

👉 **🧱 Scalable Architecture**: Modular, reusable codebase built for growth and maintainability.


## <a name="learning-tasks">:nerd_face: Learning Tasks</a>
- [x] 📔 **🔐 Ultra-Secure Authentication**: I learnt how to implement SSR authentication with validation, authorization, and secure user sessions.
- [x] 📔 **🏦 Bank Account Integration**: I integrated Plaid to enable users to securely connect and manage multiple bank accounts.
- [x] 📔 **💸 Seamless Funds Transfer**: I implemented Dwolla for safe and verified peer-to-peer money transfers between users.
- [x] 📔 **🏛️ Bank Management Interface**:  Learnt how to show connected banks with live balances and detailed account insights.
- [x] 📔 **📂 Smart Transaction History**:  implemented paginated and filterable transaction logs across all connected institutions.
- [x] 📔 **🔄 Real-Time Data Sync**: Also learnt to reflect data updates instantly across the platform after bank connections or fund transfers.
- [x] 📔 **🧱 Scalable Code Architecture**: Built a modular and reusable codebase using Next.js, TypeScript, and ShadCN for long-term maintainability.



## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
https://github.com/gmells/trnc-home-spotter-system.git
cd trnc-home-spotter-system
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Running the Project**

```bash
npm run dev


# COMMIT INFORMATION
Created a project structure/tree defining the project structure by reorganizing directories to include separate folders for components, pages, and services.


# Project structure

```bash
./
 TRNC Home Spotter Project Structure
|-- api
|   |-- controllers
|   |   |-- auth.controller.js
|   |   |-- chat.controller.js
|   |   |-- comment.controller.js
|   |   |-- message.controller.js
|   |   |-- property.controller.js
|   |   |-- user.controller.js
|   |-- models
|   |   |-- chat.model.js
|   |   |-- comment.model.js
|   |   |-- message.model.js
|   |   |-- property.model.js
|   |   |-- user.model.js
|   |-- routes
|   |   |-- auth.route.js
|   |   |-- chat.route.js
|   |   |-- comment.route.js
|   |   |-- message.route.js
|   |   |-- property.route.js
|   |   |-- user.route.js
|   |   |-- redux
|   |-- utility
|   |   |-- error.js
|   |   |-- verification.js
|   |-- index.js
|-- client
|   |-- src
|   |   |-- assets
|   |   |   |-- images
|   |   |   |   |-- home.png
|   |   |-- components
|   |   |   |-- Comments.jsx
|   |   |   |-- Contacts.jsx
|   |   |   |-- Header.jsx
|   |   |   |-- Logo.jsx
|   |   |   |-- OAuth.jsx
|   |   |   |-- Privacy.jsx
|   |   |   |-- PropertyCard.jsx
|   |   |-- pages
|   |   |   |-- About.jsx
|   |   |   |-- CreateProperty.jsx
|   |   |   |-- Home.jsx
|   |   |   |-- Profile.jsx
|   |   |   |-- Property.jsx
|   |   |   |-- Search.jsx
|   |   |   |-- SignIn.jsx
|   |   |   |-- SignUp.jsx
|   |   |   |-- UpdateProperty.jsx
|   |   |   |-- ViewChat.jsx
|   |   |-- redux
|   |   |   |-- user
|   |   |   |   |-- userSlice.js
|   |   |   |-- store.js
|   |   |-- App.js
|   |   |-- firebase.js
|   |   |-- index.css
|   |   |-- main.jsx
|   |-- .eslintrc.cjs
|   |-- .gitignore
|   |-- README.md
|   |-- index.html
|   |-- package-lock.json
|   |-- package.json
|   |-- postcss.config.js
|   |-- tailwind.config.js
|   |-- vite.config.js
|-- documents
|   |-- gradiiposter.pdf
|   |--graduationproject2_201402373 doc.docx
|-- .gitignore
|-- README.md
|-- package-lock.json
|-- package.json



```
