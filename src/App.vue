<template>
  <v-app>
    <v-navigation-drawer
      app
      temporary
      v-model="drawer"
    >
      <v-list>
        <v-list-tile
          v-for="link of links"
          :key="link.title"
          :to="link.url"
        >
          <v-list-tile-action>
            <v-icon>{{link.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="link.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile
          @click="onLogout"
          v-if="isUserLogIn"
        >
          <v-list-tile-action>
            <v-icon>exit_to_app</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="'Logout'"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar app dark color="teal lighten-2">
      <v-toolbar-side-icon
        @click="drawer = !drawer"
        class="hidden-md-and-up"
      ></v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link to="/" tag="span" class="pointer">ADAP</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
          v-for="link in links"
          :key="link.title"
          :to="link.url"
          flat
        >
          <v-icon left>{{link.icon}}</v-icon>
          {{link.title}}
        </v-btn>
        <v-btn
          flat
          @click="onLogout"
          v-if="isUserLogIn"
        >
        <v-icon>exit_to_app</v-icon>
        Logout
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>


    <v-content>
      <router-view></router-view>
    </v-content>
    <template v-if="error">
        <v-snackbar
          color="error"
          @input="closeError"
          :multi-line="true"
          :timeout="5000"
          :value="true"
        >
          {{error}}
        <v-btn
          color="white"
          flat
          @click="closeError"
        >
        &#10006;
      </v-btn>
    </v-snackbar>
    </template>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      drawer: false
    }
  },
  methods: {
    closeError () {
      return this.$store.dispatch('clearError')
    },
    onLogout () {
      this.$store.dispatch('logoutUser')
      this.$router.push('/')
    }
  },
  computed: {
    error () {
      return this.$store.getters.error
    },
    isUserLogIn () {
      return this.$store.getters.isUserLogIn
    },
    // проверяю залогинен ли пользователь
    links () {
      if (this.isUserLogIn) {
        return [
          {title: 'Orders', icon: 'bookmark_border', url: '/orders'},
          {title: 'New ad', icon: 'note_add', url: '/new'},
          {title: 'My ads', icon: 'list', url: '/list'}
        ]
      }

      return [
        {title: 'Login', icon: 'lock', url: '/login'},
        {title: 'Registration', icon: 'face', url: '/registration'}
      ]
    }
  }
}
</script>

<style scoped>
  .pointer {
    cursor: pointer;
  }
</style>
