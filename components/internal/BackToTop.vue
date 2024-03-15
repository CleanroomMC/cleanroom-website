<template>
    <Transition name="fade">
        <div v-show="show" class="go" @click="scrollToTop">
            <svg class="icon" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor"
                stroke-width="4" stroke-linecap="butt" stroke-linejoin="miter">
                <path d="M39.6 30.557 24.043 15 8.487 30.557"></path>
            </svg>
        </div>
    </Transition>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useScroll } from '@vueuse/core';

const props = withDefaults(
    defineProps<{
        threshold: number
    }>(),
    { threshold: 300 }
)

const { y } = useScroll(window, { throttle: 200 });

const show = computed(() => y.value > props.threshold);

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}
</script>

<style scoped>
.go {
    z-index: 114514;
    width: 36px;
    height: 36px;
    line-height: 36px;
    padding: 0;
    text-align: center;
    border-radius: 50%;
    background-color: var(--vp-c-default-soft);
    cursor: pointer;
    position: fixed;
    bottom: 2rem;
    right: 2.5rem;
}

.go:hover {
    background-color: var(--vp-c-gray-3);
}

.go .icon {
    width: 1em;
    height: 1em;
    font-size: 14px;
    display: inline-block;
}

@media (max-width: 959px) {
    .go-to-top {
        display: none;
    }
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>
