<template>
    <v-app>
        <AppBar></AppBar>
        <!-- <DrawerSolo></DrawerSolo> -->
        <v-main>
                <router-view></router-view>
                <!-- <AppCustomizer/> -->
        </v-main>
    </v-app>
</template>

<script>
import AppBar from '../components/core/AppBar.vue'
// import AppCustomizer from "../@core/layouts/components/app-customizer/AppCustomizer.vue"
// import DrawerSolo from '../components/core/DrawerSolo'
export default {
    name: 'HomePage',
    components: {
        AppBar,
        // DrawerSolo,
    }
}
</script>
<!-- <style lang="scss">
.logo-banner {
  width: 40px;
  height: 40px;
}
.v-main {
  padding: 0;
  margin: 0;
  background-color: var(--background-family1);
}
</style> -->