<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>
            Review phim
            <!-- <v-app-bar-nav-icon @click="drawer = !drawer" :rotate-icon="false">
              <v-icon>mdi-chevron-left</v-icon>
            </v-app-bar-nav-icon> -->
          </v-list-item-title>

        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>

      <v-list dense>
        <v-list-item-group color="primary">
          <v-list-item v-for="(item, i) in items" :key="i" :to="item.link" link @click="closeDrawer">
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Review Phim</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    items: [
      { title: 'Login', icon: 'mdi-account', link: '/' },
      { title: 'Register', icon: 'mdi-account-plus', link: '/register' },
    ],
  }),
  methods: {
    closeDrawer() {
      this.drawer = false;
    },
  },
};
</script>
