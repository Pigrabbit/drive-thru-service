const db = require('../../utils/mysql')
const StoreRepository = require('../../repository/store-repository')
const storeRepository = new StoreRepository(db)

const { mockCategoryData, mockStoreData } = require('../../utils/mockData')

async function setUp(done) {
  const conn = await db.getConnection()
  const insertCategoryQuery = 'INSERT INTO category (id, name) VALUES (?, ?)'
  await conn.query(insertCategoryQuery, [mockCategoryData.id, mockCategoryData.name])

  const inputValues = mockStoreData.map((store) => Object.values(store))
  const insertStoreQuery = `
    INSERT INTO store (id, category_id, name, phone, latitude, longitude, address)
    VALUE ?
  `
  await conn.query(insertStoreQuery, [inputValues])
  conn.release()
  done()
}

async function tearDown(done) {
  const conn = await db.getConnection()
  const storeIdList = mockStoreData.reduce((acc, cur) => acc.concat(cur.id), [])
  const deleteStoreQuery = 'DELETE FROM store WHERE id IN (?)'
  await conn.query(deleteStoreQuery, [storeIdList])

  const deleteCategoryQuery = 'DELETE FROM category WHERE id = ?'
  await conn.query(deleteCategoryQuery, [mockCategoryData.id])
  conn.release()
  done()
}

describe('StoreRepository', () => {
  beforeEach(async (done) => {
    await setUp(done)
  })

  afterEach(async (done) => {
    await tearDown(done)
  })

  afterAll(async (done) => {
    db.end()
    done()
  })

  describe('getStoreById', () => {
    it(`store 테이블에 주어진 id, category_id에 해당하는 매장 record 가 있을 때,
         해당 store의 정보를 리턴한다`, async () => {
      const { id, category_id } = mockStoreData[0]
      const store = await storeRepository.getStoreById(id, category_id)

      expect(store).toBeTruthy()
      expect(store.id).toEqual(id)
    })

    it(`store 테이블에 주어진 id, category_id에 해당하는 매장 record 가 없으면,
         Not Found Error를 던진다`, async () => {
      const invalidId = 88888888
      await expect(
        storeRepository.getStoreById(invalidId, mockStoreData[0].category_id)
      ).rejects.toThrow('Not Found')
    })
  })

  describe('getAllStoreByCategory', () => {
    it(`store 테이블에 주어진 category_id에 해당하는 매장 record들이 있을 때, 
        offset과 limit을 넣어주지 않으면,
        해당 category의 최대 20개 매장 정보를 리턴한다`, async () => {
      const { id } = mockCategoryData
      const stores = await storeRepository.getAllStoreByCategory({ category_id: id })

      expect(stores).toBeTruthy()
      expect(stores.length)
        .toEqual(mockStoreData.filter((store) => store.category_id === id).length)
      expect(stores.length).toBeLessThanOrEqual(20)
    })

    it(`store 테이블에 주어진 category_id에 해당하는 매장 record들이 있을 때, 
        limit을 넣어주면,
        해당 category의 최대 limit개 매장 정보를 리턴한다`, async () => {
      const { id } = mockCategoryData
      const limit = 2
      const stores = await storeRepository.getAllStoreByCategory({ category_id: id, limit })

      expect(stores).toBeTruthy()
      expect(stores.length).toBeLessThanOrEqual(limit)
    })

    it(`store 테이블에 주어진 category_id에 해당하는 매장 record가 없으면, 
        Not Found Error를 던진다`, async () => {
      const invalidCategoryId = 666666
      await expect(
        storeRepository.getAllStoreByCategory({ category_id: invalidCategoryId })
      ).rejects.toThrow('Not Found')
    })
  })
})
