const express = require('express');
const {
  getEmails,
  syncEmails,
  categorizeEmail,
  triggerSlackNotification,
} = require('../controllers/emailController');

const router = express.Router();

// Fetch emails
router.get('/', getEmails);

// Sync emails
router.post('/sync', syncEmails);

// Categorize email
router.post('/categorize', categorizeEmail);

// Trigger Slack notification
router.post('/notify', triggerSlackNotification);

module.exports = router;