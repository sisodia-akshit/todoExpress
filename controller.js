const TODO = require('./model')

exports.addList = async(req,res)=>{
    // console.log("hello")
    try {
        const {name,message,deadLine} = req.body;
    
        if(!name)return  res.status(400).json({status:'failed',msg:"name is required"});
        if(!message)return  res.status(400).json({status:'failed',msg:"message is required"});
        if(!deadLine)return  res.status(400).json({status:'failed',msg:"deadLine is required"});

        const newList = await TODO.addList(name,message,deadLine)

        res.status(201).json({
            status:'success',
            data:newList
        })
        
    } catch (error) {
        console.log(error.message);
    }
}

exports.getList = async (req,res)=>{
    try {
        console.log("works")
        const list = await TODO.find()
        res.status(200).json({
            status:"success",
            length:list.length
            ,data:list});
        
    } catch (error) {
        console.log(error.message);
    }
}