<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
// const user = ''
// const stack = computed(() => {
//     return store.state.stack
// })

</script>

<template>
    <router-view class="p-8"></router-view>
</template>

<!-- <style lang="scss">
#app {
    @apply h-screen bg-gray-50;
}

nav {
    a.active {
        &::after {
            @apply block w-full bg-green-500;
            content: '';
            height: 1.5px;
        }
    }
}
</style> -->
<style>
#app {
  font-family: Roboto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.highcharts-credits {
  display: none;
}
</style>
