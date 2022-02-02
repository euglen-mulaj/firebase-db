//*******************INTERNATIONAL DATABASE*********************/
const firebaseConfig = {
  apiKey: "AIzaSyAUQ8ntfiBMKiKPvmX94u_ZXDCzjNd0-AU",
  authDomain: "db-callcenter.firebaseapp.com",
  databaseURL: "https://db-callcenter-default-rtdb.firebaseio.com",
  projectId: "db-callcenter",
  storageBucket: "db-callcenter.appspot.com",
  messagingSenderId: "434413320332",
  appId: "1:434413320332:web:f2c7fc16cb09f2843ba3a9"
};
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);



//*********************EUGLEN DATABASE***************************/
/*const firebaseConfig = {
  apiKey: "AIzaSyAnRN9shwbvTgth9CKHyDgt-9ow0-tFkhw",
  authDomain: "js-firebase-data-storage.firebaseapp.com",
  databaseURL: "https://js-firebase-data-storage-default-rtdb.firebaseio.com",
  projectId: "js-firebase-data-storage",
  storageBucket: "js-firebase-data-storage.appspot.com",
  messagingSenderId: "353978440658",
  appId: "1:353978440658:web:7057ff6030809ed901060b",
  measurementId: "G-NTKK7HR3EL"
};*/

  var nameV, lastNameV, nationV, emailV;
  console.log("hyri"+ nameV);
  function Ready(){
    
      nameV = document.getElementById('namebox').value;
      lastNameV = document.getElementById('lnbox').value;
      nationV = document.getElementById('telefono').value;
      
  }

  
  function insert(){
      Ready();
      console.log("step0");
      firebase.initializeApp(firebaseConfig);
      console.log("hyri");
      firebase.database().ref('CONTACT/'+nameV+'-'+lastNameV+'-'+nationV).set({
          Name: nameV,
          LastName: lastNameV,
          Phone: nationV
         
      })
    }

    
  function sayHi(){
    alert("GRAZIE PER LA SUA RICHIESTA! UN NOSTRO ESPERTO FINANZIARIO LA CONTATTERÀ ENTRO LA GIORNATA");
  }

  function reload(){
    document.getElementById('namebox').value = '';
    document.getElementById('lnbox').value = '';
    document.getElementById('telefono').value = '';
    

  }

  function insertAndClick(){
    insert();
    sayHi();
    reload();
  }
