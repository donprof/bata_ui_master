<template>
<span>
    <div id="example">
        <no-ssr>
        <carousel-3d :disable3d="true" :space="1280" :clickable="false" :controls-visible="true">
            <slide v-for="(slide, i) in slides" :key="i" :index="i">
                <figure>
                    <img src="https://placehold.it/1280x350">
                </figure>
                <span class="title">You know</span>
                <p>You know, being a test pilot isn't always the healthiest business in the world.</p>
            </slide>
        </carousel-3d>
        </no-ssr>
    </div>

</span>
</template>

<script>
export default {
    data() {
        return {
            slides: 7
        }
    },
    props:{
        sl: {
            required: true,
            type: Object
        }
    }
}
</script>

<style>

</style>

