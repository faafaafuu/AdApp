export default {
  state: {
    ads: [
      {
        title: '1st add',
        desctiption: 'm1',
        promo: false,
        imageSrc: '../assets/1.jpg',
        id: '123'
      },
      {
        title: '2nd add',
        desctiption: 'm1',
        promo: true,
        imageSrc: '../assets/2.jpg',
        id: '1234'
      },
      {
        title: '3rd add',
        desctiption: 'm1',
        promo: true,
        imageSrc: '../assets/3.jpg',
        id: '12345'
      }
    ]
  },
  mutations: {
    createAd (state, payload) {
      state.push(payload)
    }
  },
  actions: {
    // комит позваляет диспачить разоичные мутации, pl == ad
    createAd ({commit}, payload) {
      payload.id = Math.random().toString()
      commit('createAd', payload)
    }
  },
  getters: {
    ads (state) {
      return state.ads
    },
    promoAds (state) {
      return state.ads.filter((e) => {
        return e.promo
      })
    },
    myAds (state) {
      return state.ads
    },
    adById (state) {
      return adId => {
        return state.ads.find(e => e.ad === adId)
      }
    }
  }
}
