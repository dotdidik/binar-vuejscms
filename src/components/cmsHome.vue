<template>
    <div>
        <div class="full-widht">
            <div class="left-menu-20">
                <left-menu></left-menu>
            </div>
            <div class="right-full-80">
                <right-menu></right-menu>
            </div>
        </div>
    </div>
</template>

<script>
import leftMenu from './LeftMenu.vue'
import rightMenu from './RightMenu.vue'
export default {
    components: {
        leftMenu, rightMenu
    }
};
</script>

<style>
</style>
