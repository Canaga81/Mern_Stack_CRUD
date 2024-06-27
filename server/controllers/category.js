const db = require('../config/db');

const getAllCategories = async (req, res) => {

    try {
        const response = await db.query("select * from categories")
        if(!response) {
            res.status(404).send({
                success: false,
                message: 'Data Not Found...'
            })
        }
        res.status(200).send({
            success: true,
            message: 'Catgories Fetched...',
            categories: response[0]
        })
    } catch (error) {
        res.status(500).send({
            success: false,
            message: 'Error Occured...',
            error
        })
    }

}

module.exports = {getAllCategories}