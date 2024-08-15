<template>
  <div v-html="landing?.content"></div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

definePageMeta({
  layout: 'custom'
})

const { find } = useStrapi4()
const route = useRoute()
const landing = ref(null)

onMounted(async () => {
  try {
    const matchingLanding = await find("landings", {
      filters: { slug: route.params.slug },
      populate: 'deep'
    })

    if (matchingLanding.data && matchingLanding.data.length > 0) {
      landing.value = matchingLanding.data[0].attributes

      console.log('landing', landing.value)

      // Dynamically inject styles
      if (landing.value.css) {
        const styleElement = document.createElement('style')
        styleElement.innerHTML = landing.value.css
        document.head.appendChild(styleElement)
      }

      // Dynamically inject scripts
      if (landing.value.js) {
        const scriptElement = document.createElement('script')
        scriptElement.innerHTML = landing.value.js
        document.body.appendChild(scriptElement)
      }

      useHead({
        title: landing.value.title,
        meta: [
          { name: 'og:title', content: landing.value.title },
          // Add more meta tags as needed
        ],
      })
    } else {
      console.error('Landing page not found')
    }
  } catch (error) {
    console.error('Error fetching landing page:', error)
  }
})
</script>
