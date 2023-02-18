<template>
    <div>
        <ContentSlot :use="$slots.default" unwrap="p" />
    </div>
</template>

<style lang="sass" scoped>
div
    display: grid
    justify-content: center
    gap: 0.25rem

    grid-template-columns: 1fr
    margin: 0.25rem 0

    @media (min-width: 475px)
        grid-template-columns: 1fr 1fr
</style>
