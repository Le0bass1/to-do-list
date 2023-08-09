const express = require('express');
const checkListRouter = require('./src/routes/checklistRoute')
const indexRouter = require('./src/routes/indexRoute')
const path = require('path')

require('./config/database')

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(express.static(path.join(__dirname, 'public')))

app.set('views', path.join(__dirname, 'src/views'))
app.set('view engine', 'ejs')


app.use('/', indexRouter)
app.use('/checklists', checkListRouter)

app.listen(3000, () => {
    console.log('Servidor iniciado!')
})