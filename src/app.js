const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const fs = require('node:fs/promises');
app.use(bodyParser.json());
app.use((req, res, next) => {
  // Attach CORS headers
  // Required when using a detached backend (that runs on a different domain)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});
async function getContactData() {
  const rawFileContent = await fs.readFile('./data/data.json', { encoding: 'utf-8' });
  const data = JSON.parse(rawFileContent);
  return data;
}

function storeContactData(data) {
   return fs.writeFile('./data/data.json', JSON.stringify( data || [] ));
}

// exports.getStoredPosts = getStoredPosts;
// exports.storePosts = storePosts;
app.get('/api/contacts', async (req, res) => {
    const contactData = await getContactData();
    res.json({ contactData });
  });

app.get('/api/contacts/:regno', async(req,res)=>{
  const contactData = await getContactData();
  const reqData = contactData.find((data) => data.regno == req.params.regno);
  res.json({reqData});
})

app.post('/api/contacts', async (req,res)=>{
  const currentContactData = await getContactData();
  const sendContactData = req.body
  sendContactData.id = Math.random();
  console.log(req.body);
  const updatedContactData = [...currentContactData, sendContactData];
  await storeContactData(updatedContactData);
  res.status(201).json({ message: 'Stored new contact', data: sendContactData});
})

app.listen(8080,
    ()=>{
        console.log('listening on port 8080');
    })

    // [
    //   { "id": 1, "lastName": "Snow", "firstName": "Jon", "age": 35 },
    //   { "id": 2, "lastName": "Lannister", "firstName": "Cersei", "age": 42 },
    //   { "id": 3, "lastName": "Lannister", "firstName": "Jaime", "age": 45 },
    //   { "id": 4, "lastName": "Stark", "firstName": "Arya", "age": 16 },
    //   { "id": 5, "lastName": "Targaryen", "firstName": "Daenerys", "age": 30 },
    //   { "id": 6, "lastName": "Melisandre", "firstName": "Hello", "age": 150 },
    //   { "id": 7, "lastName": "Clifford", "firstName": "Ferrara", "age": 44 },
    //   { "id": 8, "lastName": "Frances", "firstName": "Rossini", "age": 36 },
    //   { "id": 9, "lastName": "Roxie", "firstName": "Harvey", "age": 65 }
    // ]