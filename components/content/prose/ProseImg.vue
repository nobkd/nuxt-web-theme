<template>
    <div>
        <!--<NuxtImg format="webp" quality="90" v-bind="$attrs" />-->
        <img v-bind="$attrs" />
    </div>
</template>

<style lang="sass" scoped>
div
    display: flex
    align-items: center
    justify-content: center
    width: 100%

img
    border-radius: var(--radii-xs)
    //box-shadow: var(--shadow)

    @media (prefers-color-scheme: dark)
        filter: var(--img-dark-filter)
</style>
