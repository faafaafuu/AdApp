<template>
  <v-container>
    <v-layout row>
          <v-flex xs12 sm6 offset-sm3>
            <h1 class="text--secondary mb-3">My ads</h1>
            <v-card 
              class="elevation-6 mb-3"
              v-for="ad in ads"
              :key="ad.id"
            >
              <v-layout row>
                <v-flex xs4>
                  <v-card-media
                  height="160px"
                  :src="ad.imageSrc"
                  >
                  </v-card-media>
                </v-flex>
                <v-flex xs8>
                  <v-card-text
                  
                  >
                    <h2 class="text--primary">{{ad.title}}</h2>
                    <p>{{ad.desctiption}}</p>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn 
                      class="info"
                      :to="'/ad/' +ad.id"
                    >Open</v-btn>
                  </v-card-actions>
                </v-flex>
              </v-layout>
            </v-card>
          </v-flex>
      </v-layout> 
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
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
      }
    }
  }
</script>
