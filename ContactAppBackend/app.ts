import { Request, Response } from "express";

type ContactType = {
  id: string;
  regno: string;
  lastName: string;
  firstName: string;
  age: number;
  email: string;
  github: string;
}

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const fs = require('node:fs/promises');
app.use(bodyParser.json());
app.use((req: Request, res: Response, next: any) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});
async function getContactData() {
  const rawFileContent = await fs.readFile('./data/data.json', { encoding: 'utf-8' });
  const data = JSON.parse(rawFileContent);
  return data;
}

function storeContactData(data: Object) {
   return fs.writeFile('./data/data.json', JSON.stringify( data || [] ));
}

app.get('/api/contacts', async (req: Request, res: Response) => {
    const contactData = await getContactData();
    res.json({ contactData });
  });

app.get('/api/contacts/:id', async(req: Request ,res: Response)=>{
  const contactData = await getContactData();
  const reqData = contactData.find((data: ContactType) => data.id == req.params.id);
  res.json({reqData});
})

app.post('/api/contacts', async (req: Request, res: Response)=>{
  const currentContactData = await getContactData();
  const sendContactData = req.body
  sendContactData.id = Math.random();
  console.log(req.body);
  const updatedContactData = [...currentContactData, sendContactData];
  await storeContactData(updatedContactData);
  res.status(201).json({ message: 'Stored new contact', data: sendContactData});
})

app.put('/api/contacts/:id', async(req: Request, res: Response)=>{
  const contactData = await getContactData();
  const sendContactData = req.body

  let flag = false;
  for(let i=0; i<contactData.length; i++){
    if(contactData[i].id == req.params.id){
      contactData[i] = sendContactData;
      flag = true;
    }
  }
  if(flag){
  await storeContactData(contactData);
  res.status(200).json({ message: 'Updated existing contact', data: sendContactData});
  }else{
    res.status(404).json({message: "Not Found"});
  }
})

app.delete('/api/contacts/:id', async (req: Request, res: Response) => {
  let contactData = await getContactData();
  const updatedContactData = contactData.filter((data: ContactType) => data.id != req.params.id);
  await storeContactData(updatedContactData);
  res.status(200);
});

app.listen(8080,
    ()=>{
        console.log('listening on port 8080');
    })
