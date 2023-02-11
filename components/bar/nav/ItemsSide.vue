<script lang="ts" setup>
defineProps({
    clickFunction: Function,
});

const header = queryContent().where({ header: { $not: false } });
</script>

<template>
    <ContentNavigation v-slot="{ navigation }" :query="header">
        <ul>
            <li v-for="link of navigation" :key="link._path">
                <NuxtLink
                    :to="link._path"
                    @click="clickFunction ? clickFunction() : null">
                    {{ link.title }}
                </NuxtLink>
            </li>
        </ul>
    </ContentNavigation>
</template>

<style lang="sass" scoped>
ul
    list-style: none
    margin: 0
    padding: 0 1rem

    color: var(--header-text)
    font-size: var(--fontSize-md)
    font-weight: var(--font-weight-semibold)

    a
        display: flex
        align-items: center

        margin-top: 0.5rem
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
</style>
