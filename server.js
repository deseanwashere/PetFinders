const express = require('express');

const app = express();

// app.listen(PORT, () => 
//   { console.log(`Server is running on port ${PORT}`); 
// });  



app.get('/api/v1/pets', (req, res) => {
    res.send([
      { name: 'Cloud'},
      { name: 'Tifa'},
      {name: 'Barrett'},
   ])
})    

app.get('/api/v1/pets/:name' , (req ,res) => {
    const { petName } = req.params;
    console.log('petName', petName);
    res.send('pet');

})

app.get('/api/v1/pets/owner')

app.post('/animals' ,  (req,res) => {

})

app.listen(8080);