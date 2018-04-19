<template>
  <svg class="svg-icon" :class="iconStyle" aria-hidden="true">
    <use :xlink:href="iconName"></use>
  </svg>
</template>

<script>
    export default {
        name: 'icon-svg',
        props: {
            iconClass: {
                type: [String, Array],
                required: true
            },
            iconStyle: String
        },
        computed: {
            iconName() {
                return `#${this.iconClass}`
            }
        }
    }
</script>
<style>
    .icon-style {
        width: 16px;
        height: 16px;
        vertical-align: -0.2em;
        color: #666;
        overflow: hidden;
    }
</style>
