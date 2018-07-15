<template>
  <v-container>
    <v-layout row>
          <v-flex xs12>
              <v-card>
                <v-card-media
                  src="http://dreamypixel.com/wp-content/uploads/2015/09/mountain-pass-vrsic-print-featured.jpg"
                  height="300"
                ></v-card-media>
                <v-card-text>
                  <h1 class="text--primary">Some title</h1>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.<br> Mollitia, ad? Quos asperiores laboriosam temporibus necessitatibus cum. <br>Aliquid aut ipsam harum atque quas architecto voluptas iste?</p>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn class="warning" flat>Edit</v-btn>
                  <v-btn class="success">Buy</v-btn>
                </v-card-actions>
              </v-card>
          </v-flex>
      </v-layout> 
  </v-container>
</template>

<script>
  export default {
    data () {
      return {}
    }
  }
</script>

