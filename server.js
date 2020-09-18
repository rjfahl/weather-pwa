const express = require("express");
const app = express();
const path = require('path');
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const cors = require('cors')
const webpush = require('web-push')
dotenv.config()

app.use(cors())
app.use(bodyParser.json())

webpush.setVapidDetails(process.env.WEB_PUSH_CONTACT, process.env.PUBLIC_VAPID_KEY, process.env.PRIVATE_VAPID_KEY)

app.use(express.static(path.join(__dirname, 'build/')))

app.get('*', function(req, res) {
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'))
});

app.post('/notifications/subscribe', (req, res) => {
  const subscription = req.body

  const payload = JSON.stringify({
    title: 'Hello!',
    body: 'It works.',
  })

  webpush.sendNotification(subscription, payload)
    .then(result => console.log(result))
    .catch(e => console.log(e.stack))

  res.status(200).json({'success': true})
});

app.post('/notifications', (req, res) => {
  const subscription = req.body

  const payload = JSON.stringify({
    title: 'Alert!',
    body: 'Notification per request',
  });

  webpush.sendNotification(subscription, payload)
    .then(result => console.log(result))
    .catch(e => console.log(e.stack))

  res.status(200).json({'success': true})
});

app.listen(process.env.PORT || 3000, () => {
    console.log(`server started on port ${process.env.PORT | 3000}`);
});