<script lang="ts" setup>
defineProps({
    toClose: {
        type: Boolean,
        default: false,
    },
});
</script>

<template>
    <button :aria-label="`${toClose ? 'Close' : 'Open'} navigation`">
        <IconClose height="24" v-if="toClose" />
        <IconMenu height="24" v-else />
    </button>
</template>

<style lang="sass" scoped>
button
    display: block
    transition: var(--transition-text), var(--transition-filter)
    color: var(--header-text)

    &:hover, &:active, &:focus
        filter: drop-shadow(var(--shadow))
        color: var(--text)
</style>
