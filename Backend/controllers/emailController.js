const client = require('../config/elasticsearch');
const Email = require('../models/Email');
const { fetchEmails, categorizeEmail } = require('../services/imapService');
const { sendSlackNotification } = require('../services/aiService');

// Fetch emails from Elasticsearch
const getEmails = async (req, res) => {
  try {
    const { query } = req.query;
    const result = await client.search({
      index: 'emails',
      body: { query: { match: { body: query } } },
    });
    res.json(result.hits.hits);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Sync emails from IMAP to Elasticsearch
const syncEmails = async (req, res) => {
  try {
    const emails = await fetchEmails();
    await Email.insertMany(emails); // Store in MongoDB
    await client.index({ index: 'emails', body: emails }); // Index in Elasticsearch
    res.json({ message: 'Emails synced successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Categorize email using AI
const categorizeEmail = async (req, res) => {
  try {
    const { emailId, category } = req.body;
    const email = await Email.findById(emailId);
    email.category = category;
    await email.save();
    res.json({ message: 'Email categorized successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Trigger Slack notification
const triggerSlackNotification = async (req, res) => {
  try {
    const { message } = req.body;
    await sendSlackNotification(message);
    res.json({ message: 'Slack notification sent successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getEmails, syncEmails, categorizeEmail, triggerSlackNotification };