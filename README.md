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
git clone https://github.com/gmells/mellsbank.git
cd mellsbank
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named .env in the root of your project and add the following content:

```bash
#NEXT
NEXT_PUBLIC_SITE_URL=

#APPWRITE
NEXT_PUBLIC_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
NEXT_PUBLIC_APPWRITE_PROJECT=
APPWRITE_DATABASE_ID=
APPWRITE_USER_COLLECTION_ID=
APPWRITE_BANK_COLLECTION_ID=
APPWRITE_TRANSACTION_COLLECTION_ID=
APPWRITE_SECRET=

#PLAID
PLAID_CLIENT_ID=
PLAID_SECRET=
PLAID_ENV=
PLAID_PRODUCTS=
PLAID_COUNTRY_CODES=

#DWOLLA
DWOLLA_KEY=
DWOLLA_SECRET=
DWOLLA_BASE_URL=https://api-sandbox.dwolla.com
DWOLLA_ENV=sandbox
```

Replace the placeholder values with your actual respective account credentials. You can obtain these credentials by signing up on the [Appwrite](https://appwrite.io/), [Plaid](https://plaid.com/en-gb/) and [Dwolla](https://www.dwolla.com/)

**Running the Project**

```bash
npm run dev
```
