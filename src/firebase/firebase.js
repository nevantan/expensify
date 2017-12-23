import * as firebase from 'firebase';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export {firebase, database as default };

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
//     console.log(expenses);
//   });

// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('value', (snapshot) => {
//   const expenses = [];
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });
//   console.log(expenses);
// });

// database.ref('expenses').push({
//   description: 'Expense #1',
//   note: 'Test note #1',
//   amount: 5500,
//   createdAt:0
// });

// database.ref('notes/-L1-LS2D8PQTIvqyyj7J').remove();

// database.ref('notes').push({
//   title: 'Course Topics',
//   body: 'React Native, Angular, Python'
// });

// database.ref().on('value', (snapshot) => {
//   const data = snapshot.val();
//   console.log(`${data.name} is a ${data.job.title} at ${data.job.company}`);
// }, (err) => {
//   console.log('Error: ', err);
// });

// database.ref('location/city')
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log('Error fetching data', e);
//   });

// database.ref().set({
//   name: 'Nevan Tan',
//   age: 22,
//   stressLevel: 6,
//   job: {
//     title: 'Software developer',
//     company: 'Google'
//   },
//   location: {
//     city: 'Guelph',
//     country: 'Canada'
//   }
// }).then(() => {
//   console.log('Data is saved!');
// }).catch((e) => {
//   console.log('This failed.', e);
// });

// database.ref().update({
//   stressLevel: 9,
//   'job/company':'Amazon',
//   'location/city':'Seattle'
// });

// database
//   .ref()
//   .remove()
//   .then(() => {
//     console.log('Data removed.');
//   })
//   .catch((e) => {
//     console.log('Error: ', e);
//   })