const db = require('../../utils/mysql')
const StoreRepository = require("../../repository/store-repository")
const storeRepository = new StoreRepository(db)

const mockCategoryData = {
  id: 7777777,
  name: 'awesome food'
}

const mockStoreData = {
  id: 999999999,
  category_id: mockCategoryData.id,
  name: "Burger King",
  phone: "1111-2222",
  latitude: "35.55",
  longitude: "127.01",
  address: "서울시 강남구 역삼동"
}

async function setUp(done) {
  const conn = await db.getConnection()
  const insertCategoryQuery = 'INSERT INTO category (id, name) VALUES (?, ?)'
  await conn.query(insertCategoryQuery, [mockCategoryData.id, mockCategoryData.name])

  const {
    id,
    category_id,
    name,
    phone,
    latitude,
    longitude,
    address
  } = mockStoreData
  const insertStoreQuery = `
    INSERT INTO store (id, category_id, name, phone, latitude, longitude, address)
    VALUE (?, ? ,? ,? ,? ,? ,?)
  `
  await conn.query(insertStoreQuery, [id, category_id, name, phone, latitude, longitude, address])
  conn.release()
  done()
}

async function tearDown(done) {
  const conn = await db.getConnection()
  const deleteStoreQuery = 'DELETE FROM store WHERE id = ?'
  await conn.query(deleteStoreQuery, [mockStoreData.id])

  const deleteCategoryQuery = 'DELETE FROM category WHERE id = ?'
  await conn.query(deleteCategoryQuery, [mockCategoryData.id])
  conn.release()
  done()
}

describe('StoreRepository', () => {
  describe('getStoreById', () => {
    beforeEach(async (done) => {
      await setUp(done)
    })

    afterEach(async (done) => {
      await tearDown(done)
    })

    it('store 테이블에 주어진 id, category_id에 해당하는 매장 record 가 있을 때, 해당 store의 정보를 리턴한다', async () => {
      const { id, category_id } = mockStoreData
      const store = await storeRepository.getStoreById(id, category_id)

      expect(store).toBeTruthy()
      expect(store.id).toEqual(id)
    })

    it('store 테이블에 주어진 id, category_id에 해당하는 매장 record 가 없으면, Not Found Error를 던진다', async () => {
      const invalidId = 88888888
      await expect(
        storeRepository.getStoreById(invalidId, mockStoreData.category_id)
      ).rejects.toThrow('Not Found')
    })
  })

  afterAll(async (done) => {
    db.end()
    done()
  })
})