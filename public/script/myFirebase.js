

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCX89JeiE2dcSVcDrcCgYqYE9DPlG1vMPA",
    authDomain: "pomonawebgame.firebaseapp.com",
    projectId: "pomonawebgame",
    storageBucket: "pomonawebgame.appspot.com",
    messagingSenderId: "1010804082816",
    appId: "1:1010804082816:web:268bdc9990665bb6207e65",
    measurementId: "G-2GYMK1ENK2"
  };
  
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

function saveScore(name,score,year){

    db.collection("scores").add({
        name: name,
        score: score,
        year: year
    })
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });

  }

async function getTopScores() {
    scores = db.collection("scores")
    const snapshot = await scores.orderBy("score", "desc").limit(1).get()
    return snapshot.docs.map(doc => doc.data());
      
}

