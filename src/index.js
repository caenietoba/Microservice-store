const app = require('./config/server');

require('./app/routes/product')(app);

app.listen(app.get('port'), () => {
    console.log('server on port ', app.get('port'));
});

