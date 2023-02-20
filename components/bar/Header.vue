<template>
    <header>
        <div>
            <section class="left">
                <BarButtonLogo />
            </section>
            <section class="center">
                <BarNav />
            </section>
            <section class="right">
                <LazyBarNavSide />
            </section>
        </div>
    </header>
</template>

<style lang="sass" scoped>
header
    backdrop-filter: var(--backdrop)
    background-color: var(--header-bg)
    position: sticky
    top: 0
    width: 100%
    height: var(--header-height)
    z-index: 10

    border-bottom: 1px solid var(--header-border)
    box-shadow: var(--shadow)

div
    display: flex
    flex-direction: row-reverse
    align-items: center
    justify-content: space-between

    margin: 0 auto
    padding: var(--padding)
    height: 100%
    width: 100%
    max-width: var(--content-width)

section
    display: grid
    align-items: center
    justify-content: center

    &.center
        display: none

@media (min-width: 768px)
    div
        display: grid
        grid-template-columns: repeat(20, minmax(0px, 1fr))
        gap: 2rem

    section
        &.left, &.right
            grid-column: span 2 / span 2

        &.center
            display: inherit
            grid-column: span 16 / span 16

        &.right
            display: none
</style>
