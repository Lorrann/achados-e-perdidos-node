const mongoose = require('mongoose');
const User = mongoose.model('User');

exports.get = (req, res) => {
    User.find({})
        .then(data => {
            res.status(200).send(data);
        })
        .catch(e => {
            res.status(500).send(e);
        });
}

exports.post = (req, res) => {
    var user = new User(req.body);
    user.save()
        .then(x => {
            res.status(201).send({
                message: 'Usuário cadastrado com sucesso!'
            });
        })
        .catch(e => {
            res.status(500).send({
                message: 'Falha ao registrar uauário',
                data: e
            });
        });
}