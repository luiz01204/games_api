const { where } = require("sequelize");
const Games = require("../model/Game");

const getAllGames = async (req,res) =>{
    try{
        const games = await Games.findAll();
        return res.status(200).json(games);
    }catch{
        return res.status(500).json({error: "Erro ao buscar jogos."})
    }
};

const getGameById = async (req,res) =>{
    try{
        var id = req.params.id;
        const game = await Games.findByPk(id);

        if(!game){
            return res.status(404).json({erro: "Jogo não encontrado."});
        }

        return res.status(200).json(game);
    }catch{
        return res.status(500).json({error: "Erro ao buscar jogos."})
    }
};

const createGame = async (req,res) =>{
    try{
        const { title, year, price } = req.body;

        if(!title || !year || !price){
            return res.status(400).json({erro: "Titulo, ano e preço são obrigatórios."})
        }

        const game = await Games.create({title: title, year: year, price: price});
        return res.status(201).json(game);
    }catch{
        return res.status(500).json({error: "Erro ao criar jogo."})
    }

};

const updateGame = async (req, res) =>{
    try{
        const { id } = req.params;
        const newData = req.body;

        const game = await Games.findByPk(id);
        
        if(!game){
            return res.status(404).json({erro: "Jogo não encontrado!"});
        }

        await Games.update(newData,{where: {id: id}})
        return res.status(200).json({message: "Jogo atualizado."})
    }catch{
        return res.status(500).json({error: "Erro ao editar um jogo."})
    }
};

const deleteGame = async (req,res) =>{
    try{
        const { id } = req.params;

        const game = Games.findByPk(id);

        if(!game){
            return res.status(404).json({erro: "Jogo não encontrado!"});
        }

        Games.destroy({where: {id: id}})
        return res.status(200).json({message: "Jogo Deletado."});
    }catch{
        return res.status(500).json({error: "Erro ao deletar um jogo."})
    } 
};

module.exports = { getAllGames, getGameById, createGame, updateGame, deleteGame };