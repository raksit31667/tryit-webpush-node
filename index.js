const webpush = require('web-push');

const publicKey = '<your-public-key-here>';
const privateKey = '<your-private-key-here>';

webpush.setVapidDetails('mailto:example@yourdomain.org', publicKey, privateKey);

// From frontend
const subscription = {
    endpoint: '...',
    expirationTime: null,
    keys: {
        p256dh: '...',
        auth: '...'
    }
};

const payload = { 
    notification: { 
        title: 'My notification title', 
        body: 'My notification body',
        vibrate: [100, 50, 100], 
        data: { 
            url: 'https://google.com'
        }
    }
};

webpush.sendNotification(subscription, JSON.stringify(payload), {
    proxy: '<your-proxy-here>'
}).catch(error => console.error(error));

