const mockCategoryData = {
  id: 7777777,
  name: 'awesome food',
}

const mockStoreData = [
  {
    id: 999999999,
    category_id: mockCategoryData.id,
    name: 'Burger King',
    phone: '1111-2222',
    latitude: '35.55',
    longitude: '127.01',
    address: '서울시 강남구 역삼동',
  },
  {
    id: 999999998,
    category_id: mockCategoryData.id,
    name: 'Papa Johns',
    phone: '3434-4343',
    latitude: '36.25',
    longitude: '127.03',
    address: '서울시 서초구 양재동',
  },
  {
    id: 999999997,
    category_id: mockCategoryData.id,
    name: 'KFC',
    phone: '5566-6666',
    latitude: '37.02',
    longitude: '127.09',
    address: '서울시 관악구 봉천동',
  },
]

module.exports = {
  mockCategoryData,
  mockStoreData,
}
