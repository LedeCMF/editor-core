<template>
    <span class="editor-icon" :class="'editor-icon-' + icon" v-html="svg">
    </span>
</template>

<script>
    import icons from '../icons.js'

    export default {
        name: 'EditorIcon',
        props: {
            icon: {
                type: String,
                required: true,
            },
        },

        computed: {
            svg() {
                return icons.get(this.icon)
            },
        },
    }
</script>

<style lang="scss">
    .editor-icon {
        display: inline-block;
        width: 24px;
        height: 24px;
        svg {
            max-width: 100%;
            max-height: 100%;
        }
    }
</style>
