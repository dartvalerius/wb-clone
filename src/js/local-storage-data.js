// получить данные из localStorage
const getData = (key) => JSON.parse(localStorage.getItem(key)) ?? [];

// добавить данные в localStorage
const setData = (key, data) => localStorage.setItem(key, JSON.stringify(data));

export {
    getData,
    setData
}