const router = require('express').Router();
const client = require('../models/Client');


/// creation de la route POST 

router.post('/newclient',async (req,res)=>{
    const Clients = new  client({
        username:req.body.username,
        demande:req.body.demande,
        details:req.body.details

    });
     await Clients.save();
     res.json({
         status:'Task saved',Clients
     })
})

/// creation de la route pour afficher tout les donné

router.get('/clients',async (req,res)=>{

    const Clients= await client.find({});

    res.send(Clients);
    

});


router.get('/currentclient',async (req,res)=>{

    //const Clients= await client.find({});
    //const currentClient = await client.find({}, {}, { sort: { 'created_at' : 1 } }, 
    const currentClient = await client.find({}).sort({
        createdAt:-1
    }).limit(1);
    res.send(currentClient)

})

module.exports=router;



