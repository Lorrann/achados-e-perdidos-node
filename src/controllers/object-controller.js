const mongoose = require('mongoose');
const Object = mongoose.model('Object');

exports.post = (req, res) => {
    var object = new Object(req.body);
    object.save()
        .then(x => {
            res.status(201).send({
                message: 'Objeto cadastrado com sucesso!'
            });
        })
        .catch(e => {
            res.status(400).send({
                message: 'Falha ao gravar produto',
                data: e
            });
        });
}