const firebase = require("firebase/app");
// Set the configuration for your app
// TODO: Replace with your project's config object
const config = {
    apiKey: 'AIzaSyBfY-LNc34nMmkKSPLttu02_CG4IC9nE3Y',
    storageBucket: 'gs://my-dog-b9579.appspot.com'
};
firebase.initializeApp(config);

// Get a reference to the storage service, which is used to create references in your storage bucket
const storage = firebase.storage();
