var express = require('express');
var router = express.Router();
var admin = require('firebase-admin');
var firebase = require('firebase');
var provider = new firebase.auth.GoogleAuthProvider();
var database = firebase.database();

const firebaseMiddleware = require('express-firebase-middleware');

router.use((req, res, next) => {
  next();
});

router.use('/api', firebaseMiddleware.auth);

// router.post('/post', (req, res) => {
//     database.ref('/').set({
//       username: "angelo",
//       email: "test@email.com"
//     });
// });

router.post('/login', (req, res) => {
    firebase.auth().signInWithEmailAndPassword(req.body.email, req.body.password)
      .then((response) => {
        firebase.auth().currentUser.getIdToken()
          .then(token => {
            res.json({
              message: {
                title: 'success',
                message: 'Successfully logged in',
              },
              token: token,
            });
          });

      })
      .catch((error) => {
        res.json(error);
      });
});

router.post('/user', (req, res) => {
    admin.auth().createUser({
      email: req.body.email,
      emailVerified: false,
      phoneNumber: req.body.phone,
      password: req.body.password,
      displayName: req.body.displayName,
      disabled: false
    }).then((userRecord) => {
      res.json(userRecord);
    }).catch((err) => {
      res.json(err);
    });
});

router.get('/logout', (req, res) => {
    firebase.auth().signOut()
      .then((response) => {
        res.json({
          message: {
            title: 'success',
            message: 'Successfully logged out'
          }
        });
      })
      .catch((error) => {
        res.json(error);
      });
});

router.get('/req', (req, res) => {
    res.json(req.headers);
});

router.get('/user', (req, res) => {
    var user = firebase.auth().currentUser;
    res.json(user);
});

// router.post('/project', (req, res) => {
//     database.ref('')
// });


/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

module.exports = router;
