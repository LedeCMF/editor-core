<template>
    <button type="button" class="lede-editor-button" :class="{'is-active': active}" :disabled="disabled"
            @click="$emit('click')">
        <slot v-if="$slots.icon"></slot>
        <editor-icon v-else :icon="icon"></editor-icon>
    </button>
</template>

<script>
    import EditorIcon from './EditorIcon.vue'

    export default {
        name: 'EditorButton',
        components: {EditorIcon},
        props: {
            icon: {
                type: String,
            },

            label: String,
            active: Boolean,
            disabled: Boolean,
        },
    }
</script>

<style scoped>

</style>
