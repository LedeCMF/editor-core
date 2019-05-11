<template>
    <div id="app">
        <editor-icon v-for="icon in items" :icon="icon"></editor-icon>
    </div>
</template>

<script>
    import { EditorIcon } from './index'
    import { Icons} from './index'

    export default {
        name: 'app',
        components: {
            EditorIcon,
        },

        data() {
            return {
                items: Icons.names(),
            }
        },

        methods: {

        },
    }
</script>

<style lang="scss">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        color: #2c3e50;
        margin: 60px auto 0;
        width: 600px;
    }

</style>
