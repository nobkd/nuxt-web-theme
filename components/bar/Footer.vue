<script lang="ts" setup>
const footer = queryContent().where({ footer: true });
</script>

<template>
    <footer>
        <div class="container">
            <ContentNavigation v-slot="{ navigation }" :query="footer">
                <ul>
                    <li v-for="link of navigation" :key="link._path">
                        <NuxtLink :to="link._path">{{ link.title }}</NuxtLink>
                    </li>
                </ul>
            </ContentNavigation>
        </div>
    </footer>
</template>

<style lang="sass" scoped>
.container
    display: grid
    gap: 2rem
    height: var(--footer-height)
    width: 100%
    max-width: var(--content-width)
    margin-left: auto
    margin-right: auto
    padding: 0 1rem

ul
    display: flex
    align-items: center
    justify-content: center
    overflow: hidden
    text-overflow: ellipsis
    white-space: nowrap

    & > li + li
        margin-left: 0.5rem

        &::before
            content: "\2022" // &bull;
            margin-right: 0.5rem

li
    display: inline-flex
</style>
