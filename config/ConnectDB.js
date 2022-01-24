

const mongoose = require('mongoose')


const ConnectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_PATH)
        console.log('Your database is connected')
    } catch (error) {
        console.log({msg: 'Database not connected', error})

    }
}

module.exports = ConnectDB