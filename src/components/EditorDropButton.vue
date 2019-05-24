<template>
    <div class="editor-drop-button" ref="button" :class="{'is-opened' : opened}">
        <editor-button :icon="icon" :label="label" :active="active" :disabled="disabled"
                       @click="toggleOpen"></editor-button>
        <div class="button-drop" v-if="opened" ref="drop">
            <div class="button-drop-inner">
                <slot></slot>
            </div>
            <div class="drop-arrow" x-arrow></div>
        </div>
    </div>
</template>

<script>
    import EditorButton from './EditorButton.vue'
    import Popper from 'popper.js'

    export default {
        name: 'EditorDropButton',
        components: {EditorButton},
        props: {
            icon: {
                type: String,
            },

            label: String,
            active: Boolean,
            disabled: Boolean,
        },

        data() {
            return {
                opened: false,
            }
        },

        methods: {
            toggleOpen() {
                if (this.opened) {
                    this.close()
                } else {
                    this.open()
                }

            },

            open() {
                if (!this.opened) {
                    this.opened = true
                    this.$nextTick(() => {
                        this.popper = new Popper(this.$refs.button, this.$refs.drop, {
                            placement: 'bottom',

                        })
                    })
                    document.addEventListener('mousedown', this.checkExit)
                    this.$emit('open')
                }

            },

            checkExit(event) {
                if (!this.$refs.button.contains(event.target)) {
                    this.close()
                }
            },

            close() {
                if (this.opened) {
                    this.popper.destroy()
                    this.popper = null
                    this.opened = false
                    document.removeEventListener('mousedown', this.checkExit)
                    this.$emit('closed')
                }

            },
        },
    }
</script>

<style lang="scss">
    .editor-drop-button {
        position: relative;

        [x-arrow] {
            border-color: #ccc;
        }

        .button-drop {
            z-index: 100;

            .button-drop-inner {
                background: #fff;
                border: 1px solid #ccc;
                padding: 5px;
                border-radius: 4px;
            }

            &[x-placement="bottom"],
            &[x-placement="bottom-end"],
            &[x-placement="bottom-start"] {
                padding-top: 8px;

                [x-arrow] {

                    top: -10px;
                    border-right-color: transparent;
                    border-left-color: transparent;
                    border-top-color: transparent;
                }
            }

            &[x-placement="top"] {

                [x-arrow] {
                    bottom: -10px;

                    border-right-color: transparent;
                    border-left-color: transparent;
                    border-bottom-color: transparent;
                }
            }

        }

        .drop-arrow {
            position: absolute;
            border-width: 10px;
            border-style: solid;
        }

    }

</style>
