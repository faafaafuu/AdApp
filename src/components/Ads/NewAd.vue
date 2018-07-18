<template>
  <v-container>
    <v-layout row>
        <v-flex xs12 sm6 offset-sm3>
          <h1 class="text--secondary mb-3">Create new ad</h1>
          <v-form v-model="valid" ref="form" validation class="mb-3">
            <v-text-field 
              name="title" 
              label="Ad title" 
              type="text"
              required
              :rules="[v => !!v || 'Title is required']"
              v-model="title"
            ></v-text-field>
            <v-textarea  
              multi-line
              name="discription" 
              label="Ad discription" 
              type="text"
              v-model="description"
              :rules="[v => !!v || 'Discription is required']"
            ></v-textarea>
          </v-form>
          <v-layout row class="mb-3">
            <v-flex xs12>
              <v-btn
                color="blue-grey"
                class="white--text"
              >
                Upload
              <v-icon right dark>cloud_upload</v-icon>
              </v-btn>
            </v-flex>
          </v-layout>
          <v-layout row class="ml-3">
            <v-flex xs12>
              <img src="" height="100"/>
            </v-flex>
          </v-layout>
          <v-layout row class="ml-3">
            <v-flex xs12>
              <v-switch
                label="Add to promo?"
                v-model="promo"
              ></v-switch>
            </v-flex>
          </v-layout>
          <v-layout row class="ml-3">
            <v-flex xs12>
              <v-spacer></v-spacer>
              <v-btn 
              class="success" 
              @click="createAd"
              :disabled="!valid"
              >CreateAd</v-btn>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout> 
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        title: '',
        description: '',
        promo: false,
        valid: false

      }
    },
    methods: {
      createAd () {
        if (this.$refs.form.validate()) {
          const ad = {
            title: this.title,
            description: this.description,
            promo: this.promo,
            imageSrc: 'https://gadgetmac.com/s/12-inch-retina-macbook-fall-leaves-wallpaper.jpg'
          }
          // Диспачит вызываемый экшн
          this.$store.dispatch('createAd', ad)
        }
      }
    }
  }
</script>
