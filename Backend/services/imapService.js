const Imap = require('imap');
const { inspect } = require('util');

const fetchEmails = () => {
  return new Promise((resolve, reject) => {
    const imap = new Imap({
      user: process.env.IMAP_USER,
      password: process.env.IMAP_PASSWORD,
      host: process.env.IMAP_HOST,
      port: 993,
      tls: true,
    });

    imap.once('ready', () => {
      imap.openBox('INBOX', true, (err, box) => {
        if (err) reject(err);
        const emails = [];
        const fetch = imap.seq.fetch('1:10', { bodies: '' });
        fetch.on('message', (msg) => {
          let email = {};
          msg.on('body', (stream) => {
            let buffer = '';
            stream.on('data', (chunk) => (buffer += chunk.toString('utf8')));
            stream.on('end', () => (email.body = buffer));
          });
          msg.once('end', () => emails.push(email));
        });
        fetch.once('end', () => {
          imap.end();
          resolve(emails);
        });
      });
    });

    imap.connect();
  });
};

module.exports = { fetchEmails };