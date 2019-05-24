<template>
    <button type="button" class="lede-editor-button" :class="{'is-active': active}" :disabled="disabled"
            @click="$emit('click')" :title="label">
        <slot v-if="$slots.icon" name="icon"></slot>
        <editor-icon v-else :icon="icon"></editor-icon>
        <slot v-if="$slots.label" name="label">
        </slot>
        <span v-else-if="showLabel" v-text="label"></span>
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
            showLabel: Boolean,
            label: String,
            active: Boolean,
            disabled: Boolean,
        },
    }
</script>

<style lang="scss" scoped>
    .lede-editor-button {
        display: inline-flex;
        align-items: center;
    }
</style>
