
const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

const corsOptions = {
  origin: [
    'http://localhost:5173',
    'http://localhost:5174',
  ],
  credentials: true,
  optionSuccessStatus: 200,
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());

// MongoDB URI
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.bgilkf0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// MongoDB client
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    const foodCollection = client.db('deshiFood').collection('foods');
    const userCollection = client.db('deshiFood').collection('users');

    // Login for user
    app.post('/login', async (req, res) => {
      try {
        const { email, password } = req.body;

        // Check if email and password are provided
        if (!email || !password) {
          return res.status(400).json({ error: 'Email and password are required' });
        }

        // Check if user exists
        const user = await userCollection.findOne({ email });

        if (!user) {
          return res.status(401).json({ error: 'Invalid email or password' });
        }

        // Compare passwords (no hashing in your case, just plain-text)
        if (user.password !== password) {
          return res.status(401).json({ error: 'Invalid email or password' });
        }

        // Success
        res.json({
          message: 'Login successful',
          user: {
            id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
          }
        });

      } catch (err) {
        console.error('Login error:', err);
        res.status(500).json({ error: 'Login failed due to server error' });
      }
    });


    // Register for user 
    app.post('/register', async (req, res) => {
      try {
        const user = req.body;
        const result = await userCollection.insertOne(user);
        res.json(result);
      } catch (err) {
        console.error("Register error:", err);
        res.status(500).json({ error: 'Failed to register user' });
      }
    });


    // Get all foods
    app.get('/foods', async (req, res) => {
      const result = await foodCollection.find().toArray();
      res.send(result);
    });

    // Get a single food by ID
    app.get('/food/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await foodCollection.findOne(query);
      res.send(result);
    });

    // Add new food
    app.post('/food', async (req, res) => {
      const foodData = req.body;
      const result = await foodCollection.insertOne(foodData);
      res.send(result);
    });

    await client.db("admin").command({ ping: 1 });
    console.log("✅ MongoDB connected successfully");
  } catch (err) {
    console.error("❌ MongoDB error:", err);
  }
}

run().catch(console.dir);

// Default route
app.get('/', (req, res) => {
  res.send('DeshiFood Server is running....');
});

// Start server
app.listen(port, () => {
  console.log(`🚀 Server is running on port ${port}`);
});
