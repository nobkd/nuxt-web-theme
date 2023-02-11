<script lang="ts" setup>
const menuOpen = ref(false);

function menu(menuOpen: Boolean) {
    document.documentElement.style.overflowY = menuOpen ? 'hidden' : 'initial';
}

// TODO: lock tabbing to open menu
// TODO: Esc event listener, currently only works, if focus(!) is within open pane
</script>

<template>
    <BarButtonMenu :toClose="menuOpen" @click="menu((menuOpen = !menuOpen))" />

    <Teleport to="body">
        <nav v-if="menuOpen" @keyup.esc="menu((menuOpen = !menuOpen))">
            <div class="container">
                <div>
                    <BarButtonMenu
                        :toClose="menuOpen"
                        @click="menu((menuOpen = !menuOpen))" />
                    <BarButtonLogo @click="menu((menuOpen = !menuOpen))" />
                </div>

                <BarNavItemsSide :clickFunction="() => menu((menuOpen = !menuOpen))" />
            </div>
        </nav>
    </Teleport>
</template>

<style lang="sass" scoped>
nav
    animation: menu-bg var(--anim-props)

    position: fixed
    inset: 0
    width: 100%
    height: 100%
    z-index: 50

    background-color: var(--header-bg)
    backdrop-filter: var(--backdrop)
    color: var(--header-text)

    overflow-y: auto
    display: flex
    align-items: flex-start

.container
    animation: menu-slide var(--anim-props)

    width: 100%
    max-width: var(--size-xs)
    min-height: 100%

    background-color: var(--bg)
    box-shadow: var(--shadow)

    & > *
        padding: 0 1rem

    div
        display: flex
        align-items: center
        justify-content: space-between

        height: var(--header-height)
        width: 100%
        padding: var(--padding)

        position: sticky
        top: 0

        background-color: var(--header-bg)
        backdrop-filter: var(--backdrop)
        border-bottom: 1px solid transparent
        box-shadow: var(--shadow)

ul
    list-style: none
    margin: 0
    padding: 0
</style>
