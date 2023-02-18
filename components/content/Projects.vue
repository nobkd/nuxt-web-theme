<script lang="ts" setup>
const path = useRoute().path;

const { data: pages } = await useAsyncData(`projects-${path}`, () =>
    queryContent(path + '/')
        .only(['title', '_path', 'description'])
        .find()
);
</script>

<template>
    <Grid>
        <NuxtLink v-for="page in pages" :key="page._path" :to="page._path">
            <Card>
                <template #title>{{ page.title }}</template>
                <template #description>
                    <span>
                        <span class="clamp">{{ page.description }}</span>
                    </span>
                </template>
            </Card>
        </NuxtLink>
    </Grid>
</template>

<style lang="sass" scoped>
// TODO: change when not a WD anymore
.clamp
    display: -webkit-box
    overflow: hidden
    -webkit-box-orient: vertical
    -webkit-line-clamp: 2
    text-overflow: ellipsis
</style>
