<script lang="ts" setup>
defineProps({
    linkClick: {
        type: Function,
        default: () => {},
    },
    isSide: {
        type: Boolean,
        default: false,
    },
});

const header = queryContent().where({ header: { $not: false } });
</script>

<template>
    <ContentNavigation v-slot="{ navigation }" :query="header">
        <ul :side="isSide">
            <li v-for="link of navigation" :key="link._path">
                <NuxtLink :to="link._path" @click="linkClick()">
                    {{ link.title }}
                </NuxtLink>
            </li>
        </ul>
    </ContentNavigation>
</template>

<style lang="sass" scoped>
ul
    display: flex
    flex-direction: column
    align-items: center
    justify-content: center
    gap: 0.5rem

    overflow: hidden
    text-overflow: ellipsis
    white-space: nowrap

    list-style: none
    width: 100%
    margin: 0
    padding: var(--padding)

    color: var(--header-text)
    font-size: var(--fontSize-md)
    font-weight: var(--font-weight-semibold)

    li, a
        display: inline-flex
        align-items: center
        width: 100%

    a
        padding: 0.5rem 1rem

        border-radius: var(--radii-md)
        outline: none
        transition: var(--transition-text), var(--transition-bg), border-color var(--transition-props)

        border: 2px transparent groove

        &:hover, &:active, &:focus
            background-color: var(--header-border)
            color: var(--text)
            border-color: var(--color-primary-500)

        &.router-link-active
            text-shadow: var(--text-shadow)
            box-shadow: var(--inset-shadow)
            background-color: var(--header-border)

ul[side="false"]
    flex-direction: row
    li, a
        justify-content: center
</style>
