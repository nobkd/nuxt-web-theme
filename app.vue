<template>
    <BarHeader />
    <main>
        <NuxtPage />
    </main>
    <BarFooter />
</template>

<style lang="sass" scoped>
main
    margin: 0 auto
    padding: var(--padding-main)
    min-width: 0
    width: 100%
    max-width: var(--content-width)
    hyphens: auto
    text-align: justify
</style>
