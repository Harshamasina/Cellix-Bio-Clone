const mongoose = require('mongoose');


const DB = 'mongodb+srv://root:root@cellixbio.wa5aa69.mongodb.net/Cellix-Bio-Asests?retryWrites=true&w=majority';
// const DB = process.env.DATABASE;

mongoose.connect(DB, {
    // useNewUrlParser: true,
    // useCreateIndex: true,
    // useUnifiedTopology: true,
    // useFindAndModify: false
}).then(() => {
    console.log('DB is Successfully Connected');
}).catch((err) => console.log('No Connection'))
