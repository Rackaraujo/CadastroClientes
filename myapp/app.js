const express = require('express');
const bodyParser = require('body-parser');
const customerRoutes = require('./routes/customers');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'app/views'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/customers', customerRoutes);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
