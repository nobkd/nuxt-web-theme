<script lang="ts" setup>
const { toc } = useContent();
</script>

<template>
    <section>
        <a href="#" class="title">Navigation</a>
        <ul v-for="heading of toc.links" :key="heading.id">
            <li>
                <a :href="`#${heading.id}`">{{ heading.text }}</a>
            </li>
        </ul>
    </section>
</template>

<style lang="sass" scoped>
section
    position: sticky
    top: var(--header-height)

    padding: 0.25rem
    width: 100%
    max-width: var(--size-xs)

    @media (min-width: 768px)
        position: absolute
        right: 0

.title
    font-weight: bold

ul
    padding: 0.25rem 0.5rem
</style>
