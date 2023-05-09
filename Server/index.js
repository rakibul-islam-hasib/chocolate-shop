const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;


// !  MIDDLEWARE -------------------- START
app.use(cors());
app.use(express.json());
// !  MIDDLEWARE -------------------- END


const uri = `mongodb+srv://chocolateManager:3vA6jGMBfFO7v7WS@cluster0.zioaowq.mongodb.net/?retryWrites=true&w=majority`;

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
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();

        const chocolates = client.db('chocolateDB').collection('chocolates')
        // ! POST data to mongodb server  
        app.post('/chocolates' ,async (req , res) => { 
            const data = req.body ; 
            const result = await chocolates.insertOne(data); 
            res.send(result)
        })
        // ! READ data from mongodb 
        app.get('/chocolates' ,async (req , res) => { 
            const cursor = chocolates.find(); 
            const result = await cursor.toArray(); 
            res.send(result)
        })
        //  ! DELETE a data from MongoDB 
        app.delete('/chocolates/:id' ,async (req , res)=> { 
            const id = req.params.id ;
            const query = {_id : new ObjectId(id)} 
            const result =await chocolates.deleteOne(query); 
            res.send(result)
        })

        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);


app.get('/', (req, res) => {
    res.send('CHOCOLATE MANAGEMENT SERVER IS RUNNING')
})

app.listen(port, () => {
    console.log(`SERVER IS RUNNING AT PORT : ${port}`)
})