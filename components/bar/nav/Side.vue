<script lang="ts" setup>
const sideNavOpen = ref(false);

function menu() {
    sideNavOpen.value = !sideNavOpen.value;
    document.documentElement.style.overflowY = sideNavOpen.value ? 'hidden' : 'initial';

    // TODO: lock tabbing to open menu
    // TODO: Esc event listener, currently only works, if focus(!) is within open pane
}
</script>

<template>
    <BarButtonMenu :toClose="sideNavOpen" @click="menu" />

    <Teleport to="body">
        <nav :open="sideNavOpen" @keyup.esc="menu" @click.self="menu">
            <div class="container">
                <div>
                    <BarButtonMenu :toClose="sideNavOpen" @click="menu" />
                    <BarButtonLogo @click="menu" />
                </div>

                <BarNavItems :linkClick="menu" :isSide="true" />
            </div>
        </nav>
    </Teleport>
</template>

<style lang="sass" scoped>
nav
    display: none

    &[open="true"]
        display: flex

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
    align-items: flex-start

.container
    animation: menu-slide var(--anim-props)

    width: 100%
    max-width: var(--size-xs)
    min-height: 100%

    background-color: var(--bg)
    box-shadow: var(--shadow)

    div
        display: flex
        align-items: center
        justify-content: space-between

        height: var(--header-height)
        width: 100%
        padding: var(--padding)
        margin-bottom: 0.5rem

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
