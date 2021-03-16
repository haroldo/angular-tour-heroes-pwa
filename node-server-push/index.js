const express = require('express');
const bodyParse = require('body-parser');
const cors = require('cors');
const webpush = require('web-push');

// VAPID keys should only be generated only once.
const vapidKeys = {
  publicKey: 'BK9dLZX9ztdlkPNNO_GcwpNwEGvgEIHsekeqJADYgbvYiSFUTO851P5nSciP3x_0W6Y7uQ8f9_eOSpDRTweE434',
  privateKey: '-dFgycXyh93Oety8dkiQfqMYhP0QsDuuw601Ji3pO_Y'
}

webpush.setVapidDetails(
  'teste@gmail.com',
  vapidKeys.publicKey,
  vapidKeys.privateKey
)

const app = express();
app.use(bodyParse.json());
app.use(cors({origin:true, credentials: true}));

app.route('/api/newsletter').post(sendNewsletter);
s
 function sendNewsletter(req, res) {

  const allSubscriptions = "";

  console.log('Total subscriptions', allSubscriptions.length);

  const notificationPayload = {
      "notification": {
          "title": "Angular News",
          "body": "Newsletter Available!",
          "icon": "assets/main-page-logo-small-hat.png",
          "vibrate": [100, 50, 100],
          "data": {
              "dateOfArrival": Date.now(),
              "primaryKey": 1
          },
          "actions": [{
              "action": "explore",
              "title": "Go to the site"
          }]
      }
  };

  Promise.all(allSubscriptions.map(sub => webpush.sendNotification(
      sub, JSON.stringify(notificationPayload) )))
      .then(() => res.status(200).json({message: 'Newsletter sent successfully.'}))
      .catch(err => {
          console.error("Error sending notification, reason: ", err);
          res.sendStatus(500);
      });
}


const HOST = 'localhost';
const PORT = 9000;

const httpServer = app.listen(PORT,HOST, () => {
  console.log(`Servidor rodando em http://${HOST}:${PORT}`);
});
