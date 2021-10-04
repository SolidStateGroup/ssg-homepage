
require('dotenv').config();

const env = process.env.SERVICE_KEY;
const admin = require('firebase-admin');

if (!admin.apps.length) {
    const creds = JSON.parse(env);
    console.log(creds);
    // Initialize Firestore.
    admin.initializeApp({
        databaseURL: 'https://ssg-prospects.firebaseio.com',
        credential: admin.credential.cert(creds),
    });
}

export default admin;
