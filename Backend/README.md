Email Onebox Project

Overview

The Email Onebox Project is a feature-rich email aggregator that synchronizes multiple IMAP email accounts in real-time. It provides a seamless, searchable, and AI-powered email management experience. The project includes a backend built with Node.js and Express.js and a frontend built with React.js. Emails are stored in MongoDB and indexed in Elasticsearch for fast and efficient searching.

Features

Real-Time Email Synchronization

Sync multiple IMAP accounts in real-time using IDLE mode.

Fetch the last 30 days of emails.

Searchable Storage

Emails are stored in Elasticsearch for fast and efficient searching.

Filter emails by folder and account.

AI-Based Email Categorization

Automatically categorize emails into labels such as:

Interested

Meeting Booked

Not Interested

Spam

Out of Office

Slack & Webhook Integration

Send Slack notifications for new Interested emails.

Trigger webhooks for external automation.

Frontend Interface

Simple UI to display emails, filter by folder/account, and show AI categorization.

Basic email search functionality powered by Elasticsearch.

AI-Powered Suggested Replies

Use RAG (Retrieval-Augmented Generation) with an LLM to suggest replies to emails.

Technologies Used

Backend: Node.js, Express.js, MongoDB, Elasticsearch, IMAP

Frontend: React.js

AI: Hugging Face Transformers (or any LLM), RAG

Other Tools: Slack API, Webhooks, Docker

Setup Instructions

Prerequisites

Ensure you have the following installed:

Node.js (v16 or higher)

npm (v8 or higher)

MongoDB (running locally or remotely)

Elasticsearch (running locally via Docker)

IMAP Credentials (email account credentials for synchronization)

Slack Webhook URL (for notifications)

Backend Setup

Clone the repository:

git clone https://github.com/your-username/email-onebox.git
cd email-onebox/backend

Install dependencies:

npm install

Create a .env file in the backend directory and add the following environment variables:

MONGO_URI=mongodb://localhost:27017/email-onebox
IMAP_USER=your-email@example.com
IMAP_PASSWORD=your-password
IMAP_HOST=imap.example.com
SLACK_WEBHOOK_URL=https://hooks.slack.com/services/your/webhook/url

Start the backend server:

npm start

Frontend Setup

Navigate to the frontend directory:

cd ../frontend

Install dependencies:

npm install

Start the React app:

npm start

Elasticsearch Setup

Ensure Docker is installed and running on your system.

Start Elasticsearch using Docker:

docker run -d -p 9200:9200 -e "discovery.type=single-node" docker.elastic.co/elasticsearch/elasticsearch:7.10.0

Usage

Sync Emails

Use the following API endpoint to sync emails from your IMAP accounts:

POST /api/emails/sync

Search Emails

Search emails using the following API endpoint:

GET /api/emails?query=your-search-term

Categorize Emails

Categorize emails using AI:

POST /api/emails/categorize

Slack Notifications

Send Slack notifications for new emails:

POST /api/emails/notify

Frontend Interface

Access the React app at:

http://localhost:3000

API Endpoints

Endpoint

Method

Description

/api/emails

GET

Fetch emails (with search option)

/api/emails/sync

POST

Sync emails from IMAP accounts

/api/emails/categorize

POST

Categorize emails using AI

/api/emails/notify

POST

Send Slack notifications

Project Structure

email-onebox/
├── backend/               # Backend code (Node.js + Express.js)
│   ├── config/            # Configuration files
│   ├── controllers/       # API controllers
│   ├── models/            # MongoDB models
│   ├── routes/            # API routes
│   ├── services/          # Business logic (IMAP, Elasticsearch, AI)
│   ├── index.js           # Entry point
│   └── .env               # Environment variables
├── frontend/              # Frontend code (React.js)
│   ├── public/            # Static assets
│   ├── src/               # React components
│   ├── package.json       # Frontend dependencies
│   └── README.md          # Frontend documentation
├── .gitignore             # Files to ignore in Git
└── README.md              # Project documentation

Contributing

Contributions are welcome! Please follow these steps:

Fork the repository.

Create a new branch:

git checkout -b feature/your-feature

Commit your changes:

git commit -m 'Add some feature'

Push to the branch:

git push origin feature/your-feature

Open a pull request.

License

This project is licensed under the MIT License. See the LICENSE file for details.

Contact

For any questions or feedback, feel free to reach out:

Email:kumarrajesh89354@gmail.com

GitHub:https://github.com/RAJESHKUMAR65