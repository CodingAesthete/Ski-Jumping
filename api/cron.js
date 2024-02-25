import cron from 'cron';
import https from 'https';

const backendUrl = '/api/user/test'; // Specify your backend URL here

const job = new cron.CronJob('*/14 * * * *', function () {
  console.log('Restarting server');

  https.get(backendUrl, (res) => {
    if (res.statusCode === 200) {
      console.log('Server restarted');
    } else {
      console.error('Failed!');
    }
  })
    .on('error', (err) => {
      console.error('Error:', err.message);
    });
});

export default job;