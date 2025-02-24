const { IncomingWebhook } = require('@slack/webhook');
const webhook = new IncomingWebhook(process.env.SLACK_WEBHOOK_URL);

// Send Slack notification
const sendSlackNotification = async (message) => {
  await webhook.send({ text: message });
};

// Categorize email (dummy implementation)
const categorizeEmail = (email) => {
  if (email.subject.includes('meeting')) return 'Meeting Booked';
  if (email.body.includes('interested')) return 'Interested';
  return 'Not Interested';
};

module.exports = { sendSlackNotification, categorizeEmail };