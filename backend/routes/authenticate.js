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

router.post('/', (req, res) => {
    firebase.auth().signInWithEmailAndPassword(req.body.email, req.body.password)
      .then((userResponse) => {
        var user = {
          uid: userResponse.uid,
          createdAt: userResponse.createdAt,
          displayName: userResponse.displayName,
          email: userResponse.email,
          emailVerified: userResponse.emailVerified,
          isAnonymous: userResponse.isAnonymous,
          lastLoginAt: userResponse.lastLoginAt,
          phoneNumber: userResponse.phoneNumber,
          photoURL: userResponse.photoURL
        };
        firebase.auth().currentUser.getIdToken()
          .then(token => {
            res.json({
              code: 'success',
              message: 'Successfully logged in',
              user: user,
              token: token
            });
          })
          .catch(err => {
            res.json(err);
          });
      })
      .catch((error) => {
        res.json(error);
      });
});

// router.post('/verify', (req, res) => {
//
// });

router.get('/user', (req, res) => {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          res.json(user);
        } else {
          // No user is signed in.
        }
    });
    // admin.auth().createUser({
    //   email: req.body.email,
    //   emailVerified: false,
    //   phoneNumber: req.body.phone,
    //   password: req.body.password,
    //   displayName: req.body.displayName,
    //   disabled: false
    // }).then((userRecord) => {
    //   res.json(userRecord);
    // }).catch((err) => {
    //   res.json(err);
    // });
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

router.get('/', (req, res) => {
    firebase.auth().currentUser.getIdToken()
      .then(token => {
        res.json(token);
      });
});

router.post('/verify', (req, res, next) => {
    admin.auth().verifyIdToken(req.body.token)
      .then((decodedToken) => {
        res.json({
          code: true
        });
        // ...
      }).catch((error) => {
        res.json(error.code);
    });
});

// router.post('/project', (req, res) => {
//     database.ref('')
// });


/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

module.exports = router;
