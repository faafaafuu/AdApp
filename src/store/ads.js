import * as fb from 'firebase/app'

class Ad {
  constructor (ownerId, title, description, imageSrc = '', promo = false, id = null) {
    this.ownerId = ownerId
    this.title = title
    this.description = description
    this.imageSrc = imageSrc
    this.promo = promo
    this.id = id
  }
}

export default {
  state: {
    ads: [
      {
        title: 'First ad',
        description: 'Hello i am description',
        promo: false,
        imageSrc: 'https://timedotcom.files.wordpress.com/2014/05/wallpaperfx.jpg',
        id: '123'
      },
      {
        title: 'Second ad',
        description: 'Hello i am description',
        promo: true,
        imageSrc: 'https://timedotcom.files.wordpress.com/2014/05/vladstudio.jpg',
        id: '1234'
      },
      {
        title: 'Third ad',
        description: 'Hello i am description',
        promo: true,
        imageSrc: 'https://wallpaper.wiki/wp-content/uploads/2017/06/Wood-Bokeh-Retina-Wallpaper.jpg',
        id: '12345'
      }
    ]
  },
  mutations: {
    createAd (state, payload) {
      state.ads.push(payload)
    }
  },
  actions: {
    async createAd ({commit, getters}, payload) {
      commit('clearError')
      commit('setLoading', true)

      try {
        const newAd = new Ad(
          getters.user.id,
          payload.title,
          payload.description,
          payload.imageSrc,
          payload.promo
        )
        const ad = await fb.database().ref('ads').push(newAd)

        commit('setLoading', false)
        commit('createAd', {
          ...newAd,
          id: ad.key
        })
      } catch (error) {
        commit('setError', error.message)
        commit('setLoading', false)
        throw error
      }
    }
  },
  getters: {
    ads (state) {
      return state.ads
    },
    promoAds (state) {
      return state.ads.filter(ad => {
        return ad.promo
      })
    },
    myAds (state) {
      return state.ads
    },
    adById (state) {
      return adId => {
        return state.ads.find(ad => ad.id === adId)
      }
    }
  }
}

// для защиты базы данных, сейчас - { "rules": { ".read": true, ".write": true } }
// ".read": "(auth != null)", ".write":"(auth != null)",}
// this.subscription = yourservice.method()
//   .subcribe( data => {
//     this.mydata = data
//   });
//   ngDestroy () {
//     this.subcription.unsubscribe ();
//   }
