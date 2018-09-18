


<script src="https://www.gstatic.com/firebasejs/5.5.0/firebase.js"></script>
<script>
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyCTkZ-AT2nJupLKO3aE_bqFpgIGyp9Vpwg",
        authDomain: "train-scheduler-c8fca.firebaseapp.com",
        databaseURL: "https://train-scheduler-c8fca.firebaseio.com",
        projectId: "train-scheduler-c8fca",
        storageBucket: "",
        messagingSenderId: "851719372949"
    };
    firebase.initializeApp(config);
    /* Run Clock   */
  setInterval(function(){
    $('.current-time').html(moment().format('hh:mm:ss A'))
  }, 1000);


  $('.content').hide();


</script>

