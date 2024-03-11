<script setup lang="ts">
import { useData, useRouter } from "vitepress"
import { usePrevNext } from "vitepress/dist/client/theme-default/composables/prev-next"
import { onKeyStroke } from "@vueuse/core"
import VPLink from "vitepress/dist/client/theme-default/components/VPLink.vue"
import CodeLinks from "./CodeLinks.vue"
import FooterGitTimestamps from "./FooterGitTimestamps.vue"

const { theme } = useData()

const control = usePrevNext()
const router = useRouter()

// Don't run keybinds if the focused element already takes keypresses.
// Prevents changing tab while in the search menu.
function shouldOperateChangeTabKeybind() {
    var tagName = document.activeElement?.tagName;
    return tagName === null || !(tagName == 'INPUT' || tagName == 'SELECT' || tagName == 'TEXTAREA')
}

// add keydown event listener
onKeyStroke([",", "ArrowLeft"], (e) => {
    if (!shouldOperateChangeTabKeybind()) return
    e.preventDefault()
    if (control.value.prev?.link) router.go(control.value.prev.link)
});

onKeyStroke([".", "ArrowRight"], (e) => {
    if (!shouldOperateChangeTabKeybind()) return
    e.preventDefault()
    if (control.value.next?.link) router.go(control.value.next?.link)
});

</script>

<template>
    <footer class="VPDocFooter">
        <slot name="doc-footer-before" />

        <div class="edit-info">
            <FooterGitTimestamps />
            <CodeLinks />
        </div>

        <nav v-if="control.prev?.link || control.next?.link" class="prev-next">
            <div class="pager">
                <VPLink v-if="control.prev?.link" class="pager-link prev" :href="control.prev.link">
                    <span class="desc" v-html="theme.docFooter?.prev || 'Previous page'"></span>
                    <span class="title" v-html="control.prev.text"></span>
                </VPLink>
            </div>
            <div class="pager">
                <VPLink v-if="control.next?.link" class="pager-link next" :href="control.next.link">
                    <span class="desc" v-html="theme.docFooter?.next || 'Next page'"></span>
                    <span class="title" v-html="control.next.text"></span>
                </VPLink>
            </div>
        </nav>
    </footer>
</template>

<style scoped>
.VPDocFooter {
    margin-top: 64px;
}

.edit-info {
    padding-bottom: 18px;
}

@media (min-width: 640px) {
    .edit-info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 14px;
    }
}

.prev-next {
    border-top: 1px solid var(--vp-c-divider);
    padding-top: 24px;
    display: grid;
    grid-row-gap: 8px;
}

@media (min-width: 640px) {
    .prev-next {
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 16px;
    }
}

.pager-link {
    display: block;
    border: 1px solid var(--vp-c-divider);
    border-radius: 8px;
    padding: 11px 16px 13px;
    width: 100%;
    height: 100%;
    transition: border-color 0.25s;
}

.pager-link:hover {
    border-color: var(--vp-c-brand-1);
}

.pager-link.next {
    margin-left: auto;
    text-align: right;
}

.desc {
    display: block;
    line-height: 20px;
    font-size: 12px;
    font-weight: 500;
    color: var(--vp-c-text-2);
}

.title {
    display: block;
    line-height: 20px;
    font-size: 14px;
    font-weight: 500;
    color: var(--vp-c-brand-1);
    transition: color 0.25s;
}
</style>
