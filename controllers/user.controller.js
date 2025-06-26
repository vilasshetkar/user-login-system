const { MongoClient } = require("mongodb");
// Replace the uri string with your connection string
const uri = "mongodb+srv://mongotest:mongotest@cluster0.9xy565v.mongodb.net/";

const { createToken } = require('../middlewares/jwttoken');

const RegisterUser = async (req, res) => {
    let userDetails = req.body;

    const client = new MongoClient(uri);
    const database = client.db('eCommerce');
    const User = database.collection('User');

    const result = await User.insertOne(userDetails);
    console.log(
        `A document was inserted with the _id: ${result.insertedId}`,
    );

    res.json({ message: "Registered Successfully.", user: result });
}

const LoginUser = async (req, res) => {
    let userCredentials = req.body;

    const client = new MongoClient(uri);
    const database = client.db('eCommerce');
    const User = database.collection('User');

    const user = await User.findOne(userCredentials);
    console.log(user);

    if (user) {
        let token = createToken(user);
        res.json({ status: "success", message: "Login Successfully.", token });
    } else {
        res.json({ status: "error", message: "Unauthorize User." });
    }

}

const GetProfile = async (req, res) => {

    const client = new MongoClient(uri);
    try {

        // console.log(req.headers)
        // let valid = verifyToken(req.headers.authorization);

        // console.log(valid);

        const database = client.db('eCommerce');
        const User = database.collection('User');
        // Queries for a movie that has a title value of 'Back to the Future'
        const query = { mobile: req.user.mobile };
        const user = await User.findOne(query);
        console.log(user);
        res.json({ message: "Profile Successfully.", user });
    } catch (error) {
        console.log(error);
        res.json({ message: "Unauthorize User." });
    }

    finally {
        await client.close();
    }

}


const EditProfile = async (req, res) => {

    const client = new MongoClient(uri);
    try {

        const userInputs = req.body;

        const database = client.db('eCommerce');
        const User = database.collection('User');
        // Queries for a movie that has a title value of 'Back to the Future'
        const query = { mobile: req.user.mobile };

        const updateFields = {
            $set: {
                ...userInputs
            },
        }

        const user = await User.updateOne(query, updateFields);
        console.log(user);
        res.json({ message: "Profile Successfully.", user });
    } catch (error) {
        console.log(error);
        res.json({ message: "Unauthorize User." });
    }

    finally {
        await client.close();
    }

}

module.exports = {
    RegisterUser,
    LoginUser,
    GetProfile,
    EditProfile
}