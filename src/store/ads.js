export default {
  state: {
    ads: [
      {
        title: '1st add',
        desctiption: 'm1',
        promo: false,
        imageSrc: 'https://c.pxhere.com/photos/97/b8/landscape_mountain_range_mountains_nature_outdoors_rocky_mountains_scenic_sky-1030513.jpg!d',
        id: '123'
      },
      {
        title: '2nd add',
        desctiption: 'm1',
        promo: true,
        imageSrc: 'https://wallup.net/wp-content/uploads/2015/12/243115-nature-trees-forest-landscape-mountain-evening-water-lake-snow-snowy_peak-stars-clouds-pine_trees-hill-long_exposure.jpg',
        id: '1234'
      },
      {
        title: '3rd add',
        desctiption: 'm1',
        promo: true,
        imageSrc: 'http://dreamypixel.com/wp-content/uploads/2015/09/mountain-pass-vrsic-print-featured.jpg',
        id: '12345'
      }
    ]
  },
  methods: {},
  actions: {},
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
    }
  }
}
