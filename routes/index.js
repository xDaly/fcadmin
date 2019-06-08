var express = require('express');
var router = express.Router();
var mongo = require('mongodb').MongoClient;
var objectid = require('mongodb').ObjectID;



var url = 'mongodb://localhost:27017/prospects';
router.get('/get-data', function (req, res) {
    res.render('admin', { nom: 'ns3', items: [] });
});

router.get('/login', function (req, res) {
    res.render('login', { nom: 'ns3', items: [] });
});
/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { nom: 'ns3', items: [] });
});

router.get('/get-data', function (req, res, next) {
    var resultArray = [];
    mongo.connect(url, function (err, client) {
        if (err) throw err
        var db = client.db('prospects')
        var cursor = db.collection('prospect').find();
        cursor.forEach(function (doc, err) {
            if (err) throw err
            resultArray.push(doc);
        }, function () {
            res.render('admin', { nom: 'crud app', items: resultArray });
        });
    });
});








router.post('/update', function (req, res) {
    let nom = req.body.nom;
    let prenom = req.body.prenom;
    let telephone = req.body.telephone;
    var id = req.body.id;

    mongo.connect(url, function (err, client) {
        console.log(client)
        if (err) throw err

        var db = client.db('prospects')
        console.log(db)


        db.collection('prospects').updateOne({ "_id": objectid(id) }, { $set: { nom, prenom, telephone } }, function (err, result) {
            if (err) throw err

            console.log(result)
        })
        res.redirect('/')

    })


})



router.get('/get-data', function (req, res) {
    res.render('admin', { nom: 'ns3', items: [] });
});

router.get('/login', function (req, res) {
    res.render('login', { nom: 'ns3', items: [] });
});




router.post('/delete', function (req, res) {
    let nom = req.body.nom;
    let prenom = req.body.prenom;
    let telephone = req.body.telephone;
    let departement = req.body.departement;
    let adresse = req.body.adresse;
    let ville = req.body.ville;
    let cp = req.body.cp;
    let maison = req.body.maison;
    let typedecomble = req.body.typedecomble;
    let surfacecomble = req.body.surfacecomble;
    let surfacesoussol = req.body.surfacesoussol;
    let typechauffage = req.body.typechauffage;
    let nombredepersonne = req.body.nombredepersonne;
    var id = req.body.id;

    mongo.connect(url, function (err, client) {
        console.log(client)
        if (err) throw err

        var db = client.db('prospects')
        console.log(db)


        db.collection('prospects').deleteOne({ "_id": objectid(id) }, function (err, result) {
            if (err) throw err

            console.log(result)
        })
        res.redirect('/')

    })


})












router.post('/insert', function (req, res) {
    let nom = req.body.nom;
    let prenom = req.body.prenom;
    let telephone = req.body.telephone;
    let departement = req.body.departement;
    let adresse = req.body.adresse;
    let ville = req.body.ville;
    let cp = req.body.cp;
    let maison = req.body.maison;
    let typedecomble = req.body.typedecomble;
    let surfacecomble = req.body.surfacecomble;
    let surfacesoussol = req.body.surfacesoussol;
    let typechauffage = req.body.typechauffage;
    let nombredepersonne = req.body.nombredepersonne;
    let mrf = req.body.mrf;
    let rdv = req.body.rdv;
    let nf = req.body.nf;



    mongo.connect(url, function (err, client) {
        console.log(client)
        if (err) throw err

        var db = client.db('prospects')
        console.log(db)


        db.collection('prospect').insertOne({ mrf, rdv, nf, nom, prenom, telephone, departement, adresse, ville, cp, maison, typedecomble, surfacecomble, surfacesoussol, typechauffage, nombredepersonne }, function (err, result) {
            if (err) throw err

            console.log(result)
        })
    })



    res.redirect('/');


});














module.exports = router;
