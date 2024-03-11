<script setup lang="ts">
import { useData } from "vitepress"
import { computed } from "vue"
import VPLink from "vitepress/dist/client/theme-default/components/VPLink.vue"

const { theme, page, frontmatter } = useData()

function getPageLink() {
    const pattern = theme.value.editLink?.pattern
    return typeof pattern === 'function' ? pattern(page.value) : pattern.replace(/:path/g, page.value.filePath)
}

// use the github.dev site for editing
const editLink = computed(() => getPageLink().replace("com", "dev"))
// attach "?plain=1" to the link to cause GitHub to display the source code *with* formatting
const viewLink = computed(() => getPageLink() + "?plain=1")
const sourceLink = computed(() => frontmatter.value.source_code_link)

const hasEditLink = computed(() => {
    return theme.value.editLink && frontmatter.value.editLink !== false
})

const hasViewLink = computed(() => {
    return theme.value.viewLink && frontmatter.value.viewLink !== false
})

const hasSourceLink = computed(() => {
    return theme.value.sourceLink && frontmatter.value.source_code_link
})

const editLinkText = computed(() => theme.value.editLinkText)
const viewLinkText = computed(() => theme.value.viewLinkText)
const sourceLinkText = computed(() => theme.value.sourceLinkText)

</script>


<template>
    <div class="link-box">
        <VPLink v-if="hasSourceLink" class="link-button" :href="sourceLink" :no-icon="true" :title="sourceLinkText">
            <span class="vpi-icon custom-source-link-icon" />
        </VPLink>
        <VPLink v-if="hasViewLink" class="link-button" :href="viewLink" :no-icon="true" :title="viewLinkText">
            <span class="vpi-icon custom-view-link-icon" />
        </VPLink>
        <VPLink v-if="hasEditLink" class="link-button" :href="editLink" :no-icon="true" :title="editLinkText">
            <span class="vpi-icon custom-edit-link-icon" />
        </VPLink>
    </div>
</template>


<style scoped>

.link-box {
    display: flex;
}

.link-button {
    display: flex;
    border: 0;
    line-height: 32px;
    font-size: 1.6rem;
    color: var(--vp-c-brand-1);
    transition: color 0.25s;
    margin-right: 0.6rem;
}

.link-button:hover {
    color: var(--vp-c-brand-2);
}

.custom-edit-link-icon {
    --icon: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10 20H6V4h7v5h5v3.1l2-2V8l-6-6H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h4zm10.2-7c.1 0 .3.1.4.2l1.3 1.3c.2.2.2.6 0 .8l-1 1l-2.1-2.1l1-1c.1-.1.2-.2.4-.2m0 3.9L14.1 23H12v-2.1l6.1-6.1z"></path></svg>')
}

.custom-view-link-icon {
    --icon: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17 18c.56 0 1 .44 1 1s-.44 1-1 1s-1-.44-1-1s.44-1 1-1m0-3c-2.73 0-5.06 1.66-6 4c.94 2.34 3.27 4 6 4s5.06-1.66 6-4c-.94-2.34-3.27-4-6-4m0 6.5a2.5 2.5 0 0 1-2.5-2.5a2.5 2.5 0 0 1 2.5-2.5a2.5 2.5 0 0 1 2.5 2.5a2.5 2.5 0 0 1-2.5 2.5M9.27 20H6V4h7v5h5v4.07c.7.08 1.36.25 2 .49V8l-6-6H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h4.5a8.15 8.15 0 0 1-1.23-2"></path></svg>')
}

.custom-source-link-icon {
    --icon: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16c0 1.11.89 2 2 2h12c1.11 0 2-.89 2-2V8zm4 18H6V4h7v5h5zm-8.46-4.35l2.09 2.09L10.35 19L7 15.65l3.35-3.35l1.28 1.26zm7.46 0L13.65 19l-1.27-1.26l2.09-2.09l-2.09-2.09l1.27-1.26z"></path></svg>')
}

</style>
