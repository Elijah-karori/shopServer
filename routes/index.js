const router = require('express').Router({strict:true})


router.get('/',(req, res)=>{
    res.json({history:history})
})