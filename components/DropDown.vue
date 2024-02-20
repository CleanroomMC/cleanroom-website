<template>
    <div ref="dropdown" class="vp-doc custom-block info">
        <div @click="show = !show" style="display: flex;align-items: center; cursor: pointer;padding-bottom: 0.5em;">
            <slot name="label" />
            <svg style="height: 1em;margin-left: 0.5em;fill: var(--vp-c-text-3);" viewBox="0 0 24 24" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M13 9C13 8.44772 12.5523 8 12 8C11.4477 8 11 8.44772 11 9V11H9C8.44772 11 8 11.4477 8 12C8 12.5523 8.44772 13 9 13H11V15C11 15.5523 11.4477 16 12 16C12.5523 16 13 15.5523 13 15V13H15C15.5523 13 16 12.5523 16 12C16 11.4477 15.5523 11 15 11H13V9ZM2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12Z" />
            </svg>
        </div>
        <div v-if="show">
            <slot name="content" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import autoAnimate from "@formkit/auto-animate";

const dropdown = ref();
const show = ref(false);

onMounted(() => {
    autoAnimate(dropdown.value);
});
</script>