import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAsihgSn38-HkjsGAIL5RaiQsDv3fKiJT4",
    authDomain: "nba-app-625d9.firebaseapp.com",
    databaseURL: "https://nba-app-625d9-default-rtdb.firebaseio.com/",
    projectId: "nba-app-625d9",
    storageBucket: "nba-app-625d9.appspot.com",
    messagingSenderId: "171326015937",
    appId: "1:171326015937:web:a09bb119dd78571cabc740"
};

firebase.initializeApp(config);

const firebaseDB = firebase.database();
const firebaseArticles = firebaseDB.ref('articles');
const firebaseTeams = firebaseDB.ref('teams');
const firebaseVideos = firebaseDB.ref('videos');

const firebaseLooper = (snapshot) => {
    const data = [];
    snapshot.forEach((childSnapshot)=>{
        data.push({
            ...childSnapshot.val(),
            id:childSnapshot.key
        })
    });
    return data;
}


export {
    firebase,
    firebaseDB,
    firebaseArticles,
    firebaseVideos,
    firebaseTeams,
    firebaseLooper
}