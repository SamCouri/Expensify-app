import * as firebase from 'firebase';
import moment from 'moment';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  //  appId: "1:798236621508:web:5c6ca85b2876c093636791",
  //  measurementId: "G-J7JHX21DKQ"
  };

// Initialize Firebase
firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {firebase, googleAuthProvider, database as default};

// //child_removed
// database.ref('expenses').on('child_removed', (snapshot)=> {
//     console.log('expense removed:', snapshot.key, snapshot.val());
// });

// //child_changed
// database.ref('expenses').on('child_changed', (snapshot)=> {
//     console.log('expense changed:', snapshot.key, snapshot.val());
// });

// //child_added
// database.ref('expenses').on('child_added', (snapshot)=> {
//     console.log('expense added:', snapshot.key, snapshot.val());
// });


// const onValueChange = database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];
//     snapshot.forEach( (childSnapshot)=> {
//     expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//     })
//     });
//     console.log(expenses);
//     }, (e) => {
//     console.log("Error with Data fetchinhg", e)
// });



/*

database.ref('expenses')
.once('value')
.then((snapshot) => {
const expenses = [];
snapshot.forEach( (childSnapshot)=> {
expenses.push({
    id: childSnapshot.key,
    ...childSnapshot.val()
})
});
console.log(expenses);
});
*/

/*
database.ref('expenses').push({
    description: 'Gum',
    note: '',
    amount: 195,
    createdAt: moment().subtract(4, 'days').valueOf()
});
*/

/*
database.ref('expenses').push({
     description: "Rent",
     note: "rent for the month of August",
     amount: 109500,
     createdAt: moment().subtract(2, 'days').valueOf()
 });
 
 database.ref('expenses').push({
    description: "Phone Bill",
    note: "Mobile expenses",
    amount: 3900,
    createdAt: moment().add(4, 'days').valueOf()
});

 database.ref('expenses').push({
    description: "Food",
    note: "Food items",
    amount: 1200,
    createdAt: moment().add(2, 'days').valueOf()
});
*/

/*
//database.ref('notes/-ND5IdFeUQUFH_UQI6F0').remove();
// database.ref('notes').push(
//     {
//     title: "To Do",
//     body: 'Go for a run'
//     });

//     database.ref('notes').push(
//         {
//         title: "Course Topics",
//         body: 'React Native, Angular, Python'
//         });
    



// const firebaseNotes = {
//     notes: {
//         apoijasdf: {
//             title: "First note",
//             body: 'This is my note'
//         },
//         sdgfdd: {
//             title: "Another note",
//             body: 'This is my another note'
//         }
//     }
// };


// const notes = [{
// id: '12',
// title: "First note",
// body: 'This is my note'
// },{
// id: '761 ase',
// title: "Another note",
// body: 'This is my another note'
// }];

// database.ref('notes').set(notes);


// const onValueChange = database.ref().on('value', (snapshot) => {
// const val = snapshot.val();
// console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`)
// });

// setTimeout(() => {
//     database.ref('name').set('Mike');
// }, 3500);

// setTimeout(() => {
//     database.ref('job/company').set('Google')
// }, 5000);

// setTimeout(() => {
//     database.ref().off('value', onValueChange);
// }, 7500);

// setTimeout(() => {
//     database.ref('job/title').set('Manager')
// }, 10500);

// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// }, (e) => {
//     console.log("Error with Data fetchinhg", e)
// });

// setTimeout(() => {
//     database.ref('age').set(29)
// }, 3500);


// setTimeout(() => {
//     database.ref().off(onValueChange);
// }, 7000);

// setTimeout(() => {
//     database.ref('age').set(30)
// }, 10500);


// database.ref('location/city')
// .once('value')
// .then((snapshot) => {
// const val = snapshot.val();
// console.log(val);
// })
// .catch( (e) => {
// console.log('Error fetching data', e)
// })



// database.ref().set ({
// name: 'Samir Khoury',
// age: 26,
// stresslevel: 6,
// job : { 
//     title: "Software developper",
//     company: 'Google'
// },
// isSingle: false, 
//  location: {
//     city: 'toronto',
//     country: 'Canada',
//     }
//  }).then(() => {
//  console.log('Data is saved.');
//  }).catch((e) => {
//  console.log("Adding data has failed.", e);
//  });

// database.ref().update({
// stresslevel: 9,
// 'job/company': 'Amazon',
// 'location/city': 'Seattle'
// });
 
//  database.ref().update({
// job: "manager",
// 'location/city': 'Boston'
//  });

// database.ref().update({
//     name: 'Mike',
//     age: 29,
//     job: 'Software developper',
//     isSingle: null
// });


// database.ref('isSingle').remove().then( ()=> {
//     console.log('isSingle removed');
// }).catch( (e)=> {
// console.log('Failed to remove isSingle', e)
// });


// database.ref().set('this is my data');
// database.ref('age').set(27).then(()=> {
//     console.log('Age is updated.');
// }).catch((e)=> {
//     console.log("Updating age has faild.", e)
// });

// database.ref('location/city').set('Montreal').then(()=> {
//     console.log('City is updated.');
// }).catch( (e)=> {
//     console.log("Updating city has faild.", e)
// });

// database.ref('attributes').set({
//     Height: 184,
//     Weight: 90
// }).then( ()=> {
//     console.log("Height and Weight are added.")    
// }).catch( (e)=> {
//     console.log("adding height and weight has failed.",e);
// });
*/