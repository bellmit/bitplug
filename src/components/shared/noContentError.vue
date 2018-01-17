<template>
    <h3 class="text-center no-content" 
        style="margin-top: 100px;" >
        <i class="icon" :class="icon || 'ion-ios-list-outline'"></i>
        <br/>
        <slot/>
    </h3> 
</template>

<script>
    export default {
        name: 'no-content-error',
        props: ['icon'],
    }
</script>

<style scoped>
.no-content i {
    font-size: 60px;
}
</style>