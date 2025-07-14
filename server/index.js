 
const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

require('dotenv').config()

const app = express();
const port = process.env.PORT || 5000;

const corsOptions ={
    origin: [
      'http://localhost:5173', 
      'http://localhost:5174',
    ],
    credentials: true,
    optionSuccessStatus: 200,
}


// middlewares
app.use(cors(corsOptions));
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.bgilkf0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;


// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {

    const foodCollection = client.db('deshiFood').collection('foods')
 
    // get all foods data for home page
    app.get('/foods', async(req, res)=>{
     const result = await foodCollection.find().toArray()
     res.send(result)
    })
    
    // get a single job data from bd for FoodDetails page
    app.get('/food/:id', async(req, res)=>{
      const id = req.params.id 
      const query = {_id : new ObjectId(id)}
      const result = await foodCollection.findOne(query)
      res.send(result)
    })





    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    
  }
}
run().catch(console.dir);


app.get('/', (req, res) => {
    res.send('DeshiFood Server is running....');
})

app.listen(port, () => {
    console.log(`Server is running on port, ${port}`);
})