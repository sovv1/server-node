import mongoose from 'mongoose';
import config from '../config';


const dbURI = "mongodb://" +
    encodeURIComponent(config.db.username) + ":" +
    encodeURIComponent(config.db.password) + "@" +
    config.db.host + ":" +
    config.db.port + "/" +
    config.db.name;

mongoose
    .connect(dbURI)
    .then(res => console.log("DB CONNECTED"))
    .catch(err => { throw err });

mongoose.connection.on('error', function(err) {
    if(err) throw err;
});

mongoose.Promise = global.Promise;

