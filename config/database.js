const mongoose = require('mongoose')
mongoose.promise = global.Promise

mongoose.connect('mongodb://localhost:27017/to-do-list', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('Conectado ao MongoDB!'))
    .catch((err) => console.error(err))