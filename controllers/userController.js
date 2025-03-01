require("dotenv").config();
const { where } = require("sequelize");
const Users = require("../model/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const secretKey = process.env.SECRET_KEY;

const creatUser = async (req,res) =>{
    try{
        const { email, password} = req.body;

        if(!email || !password){
            return res.status(403).json({error: "E-mail e senha são obrigatórios!!"});
        }

        var userExist = await Users.findOne({where: {email: email}})

        if(userExist){
            return res.status(403).json({error: "E-mail já cadastrado!"});
        }

        var salt = await bcrypt.genSalt(10);
        var hash = await bcrypt.hashSync(password,salt);

        const user = await Users.create({
            email: email,
            password: hash
        });

        return res.status(201).json({user: user});

    }catch(error){
        console.log(error);
        return res.status(500).json({error: "Erro ao criar um usuario."})
    }
}

const authenticateUser = async (req,res) =>{
    try{
        const { email , password } = req.body;

        if(!email || !password){
            return res.status(403).json({error: "E-mail e senha são obrigatórios!!"});
        }

        var userExist = await Users.findOne({where: {email: email}})

        if(!userExist){
            return res.status(403).json({error: "E-mail não cadastrado!"});
        }

        var isCorrect = await bcrypt.compareSync(password, userExist.password)

        if(!isCorrect){
            return res.status(403).json({error: "Senha invalida!"});
        }

        const token = jwt.sign(
            { id: userExist.id, email: userExist.email },
            secretKey,
            { expiresIn: "2h" } // Token válido por 2 horas
        );

        return res.status(200).json({ message: "Login realizado com sucesso!", token: token });

    }catch(error){
        console.log(error);
        return res.status(500).json({error: "Erro ao autenticar usuario!"})
    }
}

module.exports = {creatUser, authenticateUser};