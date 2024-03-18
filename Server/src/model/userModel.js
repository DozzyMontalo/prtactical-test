const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        unique: true
    },
    role: String,
    password: String,
    tokens: [{token: String}]
});

//user model
const User = mongoose.model('User', userSchema);

// Connect to MongoDB
mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true 
})
.then(() => {
    console.log('Connected to MongoDB');

    saveDummyUsers();
})
.catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});

const userInfo = [
    {
        name: "Edwin John",
        email: "edwinjohn@example.com",
        role: "superAdmin",
        password: "12345Pass"
    },
    {
        name: "Jackson Page",
        email: "jp@example.com",
        role: "admin",
        password: "1234567Pass"
    },
    {
        name: "Larry Adam",
        email: "ladam@example.com",
        role: "staff",
        password: "123456789Pass"
    }
];

// Saving dummyData to db
const saveDummyUsers = async () => {
    try {
        await User.insertMany(userInfo);
        console.log('users saved successfully');
    } catch (error) {
        console.error('Error saving users:', error);
        throw error;
    }
};

module.exports = User;
