<template>
    <div id="app">
        <p  v-for="icon in items" :icon="icon" :key="icon">
            <editor-icon :icon="icon" ></editor-icon> - {{ icon }}
        </p>
        <editor-button icon="table"></editor-button>
        <editor-button icon="table" label="Insert table" :show-label="true"></editor-button>

    </div>
</template>

<script>
    import { EditorIcon } from './index'
    import { Icons} from './index'
    import EditorButton from './components/EditorButton'

    export default {
        name: 'app',
        components: {
            EditorButton,
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
