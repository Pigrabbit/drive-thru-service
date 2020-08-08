const Pool = require('../utils/mysql');

// Get all store
async function getAllStores(req, res, next) {
    const connection = await Pool.getConnection();
    try {

        const [results] = await connection.query("SELECT * FROM test.storetable;")
        res.json({
            status: 200,
            arr: results
        })
    } catch (error) {
        next(error)
    } finally {
        connection.release();
    }
}

// Get store by Id
async function getStoreById(req, res, next) {
    const connection = await Pool.getConnection();
    try {
        const id = req.params.id;
        const [results] = await connection.query("SELECT * FROM test.storetable WHERE id=?",[id])
        res.json({
            status: 200,
            arr: results
        })
    } catch (error) {
        next(error)
    } finally {
        connection.release();
    }

}

async function getStoreAddressById(req, res, next) {
    const connection = await Pool.getConnection();
    try {
        const id = req.params.id;
        const [results] = await connection.query("SELECT adress FROM test.storetable WHERE id=?",[id])
        res.json({
            status: 200,
            arr: results
        })
    } catch (error) {
        next(error)
    } finally {
        connection.release();
    }

}
async function getStorePhoneById(req, res, next) {
    const connection = await Pool.getConnection();
    try {
        const id = req.params.id;
        const [results] = await connection.query("SELECT phone FROM test.storetable WHERE id=?",[id])
        res.json({
            status: 200,
            arr: results
        })
    } catch (error) {
        next(error)
    } finally {
        connection.release();
    }

}

async function updateStoreInfo(req, res, next) {
    const connection = await Pool.getConnection();
    try {
        // user table 필드들을 body로 받는다
        const { phone, address } = req.body;
        const id = req.params.id;

        const query = "UPDATE test.storetable SET phone = ? WHERE id = ?";


       await connection.query(query, [ phone, id ]);
        
       res.json({
            status: 200,
            message: "success update info"
        })
    } catch (error) {
        next(error)
    } finally {
        connection.release();
    }

}

module.exports = {
    getAllStores,
    getStoreById,
    getStoreAddressById,
    getStorePhoneById,
    updateStoreInfo
}