<script setup lang="ts">
import { ref, computed, watchEffect, onMounted } from 'vue'
import { useData } from "vitepress"

const { theme, page, frontmatter, lang } = useData()

function capitalizeFirstLetter(string: string): string {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function convertTimeToWords(time: number): string {
    const seconds = Math.abs(time) / 1000
    const minutes = seconds / 60
    const hours = minutes / 60
    const days = hours / 24
    const weeks = days / 7
    const months = days / 30
    const years = days / 365

    if (days < 1) return theme.value.timeDict.today

    let ballpark: string

    if (days < 2) ballpark = theme.value.timeDict.day
    else if (days < 7) ballpark = theme.value.timeDict.days.replace("%d", String(Math.round(days)))
    else if (weeks < 1.5) ballpark = theme.value.timeDict.week
    else if (weeks < 4) ballpark = theme.value.timeDict.weeks.replace("%d", String(Math.round(weeks)))
    else if (days < 45) ballpark = theme.value.timeDict.month
    else if (days < 365) ballpark = theme.value.timeDict.months.replace("%d", String(Math.round(months)))
    else if (years < 1.5) ballpark = theme.value.timeDict.year
    else ballpark = theme.value.timeDict.years.replace("%d", String(Math.round(years)))

    return ballpark + " " + theme.value.timeDict.ago
}

function compareDatesTerm(old: Date, current: Date = new Date()): string {
    return convertTimeToWords(Math.abs(current.getTime() - old.getTime()))
}

const hasUpdatedDate = computed(() => {
    return page.value.lastUpdated && frontmatter.value.lastUpdated !== false
})

const updatedDate = computed(
  () => new Date(frontmatter.value.lastUpdated ?? page.value.lastUpdated)
)

const pageLoadedDate = computed(() => new Date())

const updatedISODatetime = computed(() => updatedDate.value.toISOString())

const updatedText = computed(() => theme.value.lastUpdated?.text || theme.value.lastUpdatedText || 'Last updated')

const updatedDatetime = ref('')

// set time on mounted hook to avoid hydration mismatch due to
// potential differences in timezones of the server and clients
onMounted(() => {
  watchEffect(() => {
    updatedDatetime.value = new Intl.DateTimeFormat(
      theme.value.lastUpdated?.formatOptions?.forceLocale ? lang.value : undefined,
      theme.value.lastUpdated?.formatOptions ?? {
        dateStyle: 'short',
        timeStyle: 'short'
      }
    ).format(updatedDate.value)
  })
})

const updatedRelativeDate = computed(() => capitalizeFirstLetter(compareDatesTerm(updatedDate.value, pageLoadedDate.value)))

</script>

<template>
    <div v-if="hasUpdatedDate" class="last-updated">
        <span class="edit-link-button" :datetime="updatedISODatetime" :title="updatedText + ': ' + updatedDatetime">
            <span class="vpi-icon last-updated-icon" />
        </span>
        <time :datetime="updatedISODatetime" >
            {{ updatedRelativeDate }}
        </time>
    </div>
    <!-- <div v-if="false" class="created">
        <span class="edit-link-button" :datetime="createdISODatetime" :title="createdText + ': ' + createdDatetime">
            <span class="vpi-icon created-icon" />
        </span>
        <time :datetime="createdISODatetime" >
            {{ createdRelativeDate }}
        </time>
    </div> -->
</template>

<style scoped>

.last-updated {
    display: inline-flex;
    gap: 0.5rem;
    margin-right: 0.5rem;
    color: var(--vp-c-text-2);
}

.edit-link-button {
    display: flex;
    border: 0;
    font-size: 1.4rem;
    transition: color 0.25s;
    margin-right: 0.2rem;
}


.last-updated-icon {
    --icon: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21 13.1c-.1 0-.3.1-.4.2l-1 1l2.1 2.1l1-1c.2-.2.2-.6 0-.8l-1.3-1.3c-.1-.1-.2-.2-.4-.2m-1.9 1.8l-6.1 6V23h2.1l6.1-6.1zM12.5 7v5.2l4 2.4l-1 1L11 13V7zM11 21.9c-5.1-.5-9-4.8-9-9.9C2 6.5 6.5 2 12 2c5.3 0 9.6 4.1 10 9.3c-.3-.1-.6-.2-1-.2s-.7.1-1 .2C19.6 7.2 16.2 4 12 4c-4.4 0-8 3.6-8 8c0 4.1 3.1 7.5 7.1 7.9l-.1.2z"/></svg>')
}

</style>
