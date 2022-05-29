import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    cats: [], // тут хранятся все котики
    limit: 15, // это лимит котиков за одну загрузку
    page: 0, // Это номер страницы, при первой загрузки меняется на 1
    order: "DESC", // сортировка по уморчанию
    catsFaforits: [], // тут хранятся котики, которые нам нравятся
    loading: true, // флаг загрузки, тру пока грузит
  },
  getters: {
    /**
     * Получает котиков и сравниваем с избранными котами, в избранных котах ставим активное сердечко
     * @param {*} state
     * @returns Возвращает новый массив обьектов с модернизироваными котиками
     */
    getCats: (state) => {
      // Копируем, что бы не изменять исходные данные
      let favorits = state.catsFaforits; // Копирую стейт любимых котов
      let cats = state.cats; // копирую всех котиков
      // делаем обход всех котов, если встчечается любимый котик, изменяем его данные
      let newCats = cats.map((cat) => {
        favorits.forEach((favorit) => {
          cat = cat.id == favorit.id ? { ...cat, favorite: true } : cat; // Добавляем свойство указывающее на пренадлежность к избранным котам
        });
        return cat;
      });
      return newCats;
    },
    /**
     * Поолучаем массив обьектов с избранными котиками
     * @param {*} state
     * @returns избранные котики
     */
    getFavorits: (state) => {
      return state.catsFaforits;
    },
  },
  mutations: {
    // Меняет статус загрузки котиков из апи
    setLoading: (state, data) => {
      state.loading = data;
    },
    // Устанавливаем котиков в хранилище, добавляем новые если они есть
    setCats: (state, data) => {
      state.cats = [...state.cats, ...data];
    },
    // Сохраняем избранное в локальном хранилище
    setFaforits: (state) => {
      state.catsFaforits = JSON.parse(localStorage.favorite);
    },
    // Добавляем котиков в избранное
    addFavorite: (state, cart) => {
      let temp = state.cats.map((item) =>
        item.id == cart.id ? (item = cart) : item
      );
      let carts = state.catsFaforits;
      carts = [...carts, cart];
      state.catsFaforits = carts; // сохраняем в стейт
      localStorage.favorite = JSON.stringify(state.catsFaforits); // записываем в локальное хранилище

      state.cats = temp; // добавляем в стейт котов новый с изменениями (с данными об избранных котах)
    },
    // Удаляем их стейта и лолального хранилища котика
    deleteFavorite: (state, cart) => {
      let temp = state.cats;
      let tempFavorites = state.catsFaforits;
      temp.forEach((item) => {
        if (item.id == cart.id) {
          delete item.favorite;
        }
      });
      state.cats = temp;

      state.catsFaforits = tempFavorites.filter((item) => item.id !== cart.id);
      localStorage.favorite = JSON.stringify(state.catsFaforits); // записываем в хранилище локальное новую строку без удалённого котика
    },
  },
  actions: {
    // Загрузка котиков из BACKEND
    loadAction({ commit, state }) {
      commit("setLoading", true); // Меняем статус загрузки
      state.page += 1; // С каждой новой загрузкой меняем страницу на следующею
      // Получаем данные с параметрами
      axios({
        method: "get",
        url: "",
        params: {
          limit: state.limit,
          page: state.page,
          order: state.order,
          size: "thumb",
        },
        //data: {},
        //headers: {},
      })
        .then((response) => {
          if (response.status == 200) {
            commit("setCats", response.data); // Записываем в хранилище
            commit("setFaforits"); // Берём фаворитов из локального хранилища
          }
        })
        .catch((error) => {
          console.log("Это ошибки:", error);
        })
        .finally(() => {
          commit("setLoading", false); // Закрываем статус загрузки
        });
    },
    // Добавляем в избранное
    addFavoriteAction({ commit }, cart) {
      // Выполняем если котика нет в избранном
      if (cart.favorite !== true) {
        cart = { ...cart, favorite: true }; // изменяем обьект добавляя новое свойство
        commit("addFavorite", cart);
      }
    },
    // Удаляем котика из избранных
    deleteFavoriteAction({ commit }, cart) {
      // Если он есть в избранном
      if (cart.favorite === true) {
        commit("deleteFavorite", cart);
      }
    },
  },
  modules: {},
});
