const db = require('../config/db');

const createNews = async (req, res) => {

    const { title, image, categoryID } = req.body;

    try {

        const query = 'insert into news (title, image, categoryID) values (?, ?, ?)'
        const result = await db.query(query, [title, image, categoryID])

        res.status(201).send({
            success: true,
            message: 'News Created...',
            result
        })

    } catch (error) {

        res.status(500).send({
            success: false,
            message: 'Error Occured...',
            error
        })

    }
}

const getAllNews = async (req, res) => {

    try {

        const response = await db.query("SELECT news.*, categories.name FROM news join categories on news.categoryID = categories.id");

        if(!response) {
            res.status(404).send({
                success: false,
                message: 'Data Not Found...'
            })
        }
        res.status(200).send({
            success: true,
            message: 'News Fetched...',
            news: response[0]
        })

    } catch (error) {

        res.status(500).send({
            success: false,
            message: 'Error Occured...',
            error
        })

    }

}

const getNewsByCategoryID = async (req, res) => {

    const {id} = req.params;

    try {

        const response = await db.query(`select * from news join categories on news.categoryID = categories.id where news.categoryID=${id}`);

        if(!response) {
            res.status(404).send({
                success: false,
                message: 'Data Not Found...'
            })
        }
        res.status(200).send({
            success: true,
            message: 'News Fetched...',
            news: response[0]
        })

    } catch (error) {

        res.status(500).send({
            success: false,
            message: 'Error Occured...',
            error
        })

    }

}

module.exports = {createNews, getAllNews, getNewsByCategoryID}