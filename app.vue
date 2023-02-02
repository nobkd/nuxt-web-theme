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
    width: 100%
    max-width: var(--content-width)
    hyphens: auto
    text-align: justify
</style>

<style lang="sass">
*, ::before, ::after
  box-sizing: border-box
  border-width: 0
  border-style: solid
  border-color: currentColor

html
  line-height: 1.5
  -webkit-text-size-adjust: 100%
  -moz-tab-size: 4
  tab-size: 4
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"
  scrollbar-gutter: stable

body
  margin: 0
  line-height: inherit

hr
  height: 0
  color: inherit
  border-top-width: 1px

abbr:where([title])
  text-decoration: underline dotted

h1, h2, h3, h4, h5, h6
  font-size: inherit
  font-weight: inherit

a
  color: inherit
  text-decoration: inherit

b, strong
  font-weight: bolder

code, kbd, samp, pre
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace
  font-size: 1em

small
  font-size: 80%

sub, sup
  font-size: 75%
  line-height: 0
  position: relative
  vertical-align: baseline

sub
  bottom: -0.25em

sup
  top: -0.5em

table
  text-indent: 0
  border-color: inherit
  border-collapse: collapse

button, input, optgroup, select, textarea
  font-family: inherit
  font-size: 100%
  line-height: inherit
  color: inherit
  margin: 0
  padding: 0

button, select
  text-transform: none

button, [type='button'], [type='reset'], [type='submit']
  -webkit-appearance: button
  background-color: transparent
  background-image: none

:-moz-focusring
  outline: auto

:-moz-ui-invalid
  box-shadow: none

progress
  vertical-align: baseline

::-webkit-inner-spin-button, ::-webkit-outer-spin-button
  height: auto

[type='search']
  -webkit-appearance: textfield
  outline-offset: -2px

::-webkit-search-decoration
  -webkit-appearance: none

::-webkit-file-upload-button
  -webkit-appearance: button
  font: inherit

summary
  display: list-item

blockquote, dl, dd, h1, h2, h3, h4, h5, h6, hr, figure, p, pre
  margin: 0

fieldset
  margin: 0
  padding: 0

legend
  padding: 0

ol, ul, menu
  list-style: none
  margin: 0
  padding: 0

textarea
  resize: vertical

input::placeholder, textarea::placeholder
  opacity: 1
  color: #9ca3af

button, [role="button"]
  cursor: pointer

:disabled
  cursor: default

img, svg, video, canvas, audio, iframe, embed, object
  display: block
  vertical-align: middle

img, video
  max-width: 100%
  height: auto

[hidden]
  display: none

// Anthony's addition
.dark
  color-scheme: dark

  & ::-moz-selection
    background: #444

  & ::selection
    background: #444

div[col=""]
  display: flex
  flex-direction: column

div[row=""]
  display: flex
  flex-direction: row

div[block=""]
  display: block

// My Additions
html
  scroll-behavior: smooth

h1, h2, h3, h4, h5, h6
  &::before
    // Fixes that active anchor links dont scroll behind header
    content: ""
    display: block
    height: calc(1rem + var(--header-height))
    margin-top: calc(-1rem - var(--header-height))

  a
    display: block

#__nuxt
  background-color: var(--bg)
  color: var(--text)
  width: calc(100vw - (100vw - 100%))
  min-height: 100vh

  display: grid
  grid-auto-flow: row
  grid-template-rows: auto 1fr auto

  .document-driven-page
    width: 100%
    height: 100%

@media (prefers-color-scheme: dark)
  *
    color-scheme: dark

  ::-moz-selection
    background: #444

  ::selection
    background: #444

@media print
  *
    background-color: transparent

  header, nav, footer
    display: none

  h1, h2, h3, h4, h5, h6
    svg.icon
      display: none

  :not(h1, h2, h3, h4, h5, h6) > a::after
    content: " [" attr(href) "] "
    font-size: 0.7rem
</style>

<style lang="sass">
:root
    --content-width: 70rem
    --padding: 0 1rem
    --padding-main: 0 1.5rem

    --img-dark-filter: brightness(70%)
    --backdrop: saturate(200%) blur(var(--size-8))

    --anim-props: 0.2s forwards normal ease-in-out
    --transition-props: 0.2s ease 0s
    --transition-text: color var(--transition-props)
    --transition-bg: background-color var(--transition-props)
    --transition-filter: filter var(--transition-props)

    --inset-shadow: rgba(0, 0, 0, var(--opacity-bright)) 0 2px 4px 0 inset
    --shadow: 0 0 0.1rem grey
    --text-shadow: 0 0 1px var(--text)

    --primary: #00a3b9
    --secondary: #0e6cc4
    --tertiary: #0b4293

    --text: black
    --bg: white

    --header-bg: #efefefcc
    --header-text: rgb(82 82 91)
    --header-border: #eee
    --header-height: 60px

    --footer-height: 40px

    @media (prefers-color-scheme: dark)
        --text: rgb(250 250 250)
        --bg: rgb(27 27 27)

        --header-bg: #0c0d0ccc
        --header-text: rgb(209 203 199)
        --header-border: #18181b

@keyframes menu-slide
    from
        transform: translateX(-100%)

@keyframes menu-bg
    from
        background-color: transparent
        backdrop-filter: none
</style>
