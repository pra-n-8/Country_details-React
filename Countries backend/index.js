const express = require("express");
const axios = require("axios");
const app = express();
const port = 3600;

const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions))


// Set up a route to handle incoming requests
app.get('/country/:name', async (req, res) => {
    try {
      const countryName = req.params.name;
      const response = await axios.get(`https://restcountries.com/v2/name/${countryName}`);
  
      // Send back the response from the external API to the client
      res.send(response.data);
    //   console.log(req);
    } catch (error) {
      // If there's an error, send back an error message to the client
      res.status(500).send(error.message);
    }
  });

app.get("/all",async (req,res)=>{
    try{
        const response = await axios.get("https://restcountries.com/v3.1/all");
        
    //   console.log(req);
        res.send(response.data);
    }
    catch(error){
        res.status(500).send(error.message);
    }
});

app.listen(port,()=>console.log("server is on"))