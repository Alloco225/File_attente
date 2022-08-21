const router = require('express').Router();
const client = require('../models/Client');


/// creation de la route POST 

router.post('/newclient', async (req, res) => {
    const Clients = new client({
        username: req.body.username,
        demande: req.body.demande,
        details: req.body.details

    });
    await Clients.save();
    res.json({
        status: 'Task saved', Clients
    })
})

/// creation de la route pour afficher tout les donné

router.get('/clients', async (req, res) => {

    const Clients = await client.find({});

    res.send(Clients);


});


router.get('/lastclients', async (req, res) => {
    const Clients = await client.find({}).sort({ createdAt: -1 });
    res.send(Clients);
});


router.get('/currenttask', async (req, res) => {
    const currentClient = await (await client.find({})).filter((el) => {
        return el.status === "en cour";
    })
    if (currentClient) {
        return res.status(200).json(currentClient)
    }
    return res.status(503).json({message:"erreur de listing"})
})

router.get('/endtask', async (req, res) => {
    const currentClient = await (await client.find({})).filter((el) => {
        return el.status === "terminer";
    })
    if (currentClient) {
        return res.status(200).json(currentClient)
    }
    return res.status(503).json(currentClient)
})

router.delete("/delete/:id",async(req,res)=>{
   const id= req.params.id
   const result= await client.deleteOne({ _id:id})
   res.status(200).json({message:"element supprimé de la db"})
   
})


//////////////////////////////////////:sffff
router.patch('/blogs/:id', async (req, res) => {
    const Client = await client.findByIdAndUpdate(req.params.id);
    if (Client) {
        Client.status = 'terminer';
        const finish = Client.save();
        res.json({ message: 'client set', Client: finish });


    } else {


        return res.status(404).send({ message: 'erreur' });
    }


})


module.exports = router;



