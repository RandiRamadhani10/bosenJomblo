import DataLocal from './temp';
const Models = {
  addBookmark(data) {
    value = [];
    value.push(data);
    storeData(value);
    return value;
  },
  getDataLocal() {
    return getData();
  },
  deleteBookmark(id) {
    const value = getData();
    const index = bookmark.findIndex(user => user.id === value);
    value.splice(index, 1);
    storeData(value);
    return value;
  },
};
export default Models;
