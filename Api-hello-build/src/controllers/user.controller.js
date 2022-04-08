import User from '../models/user'

export const getAllUser = async (req,res) => {
    const user = await User.find()
    res.json(user);
}

export const postUser = async(req, res) => {
    const newUser = new User({firstName:req.body.firstName, lastName:req.body.lastName, emal:req.body.emal, cellphone:req.body.cellphone, password:req.body.password})
    const userSave = await newUser.save();
    res.json(userSave)
}

export const getOneUser = async(req, res) => {
    const user = await User.findById(req.params.id)
    res.json(user)
}

export const deletUSer = async(req, res) => {
    await User.findByIdAndDelete(req.params.id)    
    res.json({
        message: "${id} user were deleted succesfully",
    });

}