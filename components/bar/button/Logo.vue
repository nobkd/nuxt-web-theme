<template>
    <NuxtLink to="/" aria-label="Logo zur Startseite">
        <IconLogo height="24" />
    </NuxtLink>
</template>

<style lang="sass" scoped>
a
    display: block
    transition: var(--transition-text), var(--transition-filter)
    color: var(--header-text)

    &:hover, &:active, &:focus
        filter: drop-shadow(var(--shadow))
        color: var(--text)
</style>
