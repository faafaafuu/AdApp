<template>
  <div>
    <v-container fluid>
    <!-- Использование flex-direction property -->
      <v-layout row>
            <v-flex xs12>
              <v-carousel hide-controls>
                <v-carousel-item
                  v-for="ad in ads"
                  :key="ad.id"
                  :src="ad.imageSrc"
                >
                <div class="car-link">
                  <v-btn class="error" :to="'/ad/' + ad.id">{{ad.title}}</v-btn>  
                </div> 
                </v-carousel-item>
              </v-carousel>
            </v-flex>
        </v-layout>
    </v-container>
    <!-- <v-container grid-list-lg> -->
    <v-container grid-list-lg>
      <v-layout row wrap>
        <v-flex 
          xs16 
          sm6
          md4
          v-for="ad in ads"
          :key="ad.id"
          >
          <v-card>
            <v-card-media
              :src="ad.imageSrc"
              height="200px"
            ></v-card-media>
            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">{{ad.title}}</h3>
                <div>{{ad.description}} </div>
              </div>
            </v-card-title>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn flat primary="" :to="'/ad/' + ad.id">Open</v-btn>
              <v-btn raised class="primary" >Buy</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout> 
    </v-container>
  </div>
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

<style scoped>
.car-link {
  position: absolute;
  bottom: 50px;
  left: 50%;
  background: rgba(0, 0, 0, 0.5);
  transform: translate(-50%,0);
  padding: 5px 10px;
  border-top-left-radius: 5px;
  border-top-left-radius: 5px;
}
</style>
