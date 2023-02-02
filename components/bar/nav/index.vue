<script lang="ts" setup>
const header = queryContent().where({ header: { $not: false } });
</script>

<template>
    <nav>
        <ContentNavigation v-slot="{ navigation }" :query="header">
            <ul>
                <li v-for="link of navigation" :key="link._path">
                    <NuxtLink :to="link._path">{{ link.title }}</NuxtLink>
                </li>
            </ul>
        </ContentNavigation>
    </nav>
</template>

<style lang="sass" scoped>
ul
    display: flex
    align-items: center
    justify-content: center
    overflow: hidden
    text-overflow: ellipsis
    white-space: nowrap

    color: var(--header-text)
    font-size: var(--fontSize-md)
    font-weight: var(--font-weight-semibold)

    & > li + li
        margin-left: 0.5rem

    li
        display: inline-flex
        gap: 0.25rem

    a
        display: flex
        align-items: center

        margin-top: 0.5rem
        padding: 0.5rem 1rem

        border-radius: var(--radii-md)
        outline: none
        transition: var(--transition-text), var(--transition-bg)

        &:hover, &:active, &:focus
            background-color: var(--header-border)
            color: var(--text)

        &.router-link-active
            text-shadow: var(--text-shadow)
            box-shadow: var(--inset-shadow)
            background-color: var(--header-border)
</style>
