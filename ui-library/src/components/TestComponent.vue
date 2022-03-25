<script setup lang="ts">
  import { ref } from 'vue'
  import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'

  const clicked = ref(0)
</script>

<template>
  <Disclosure>
    <DisclosureButton>Open test component</DisclosureButton>
    <DisclosurePanel>
      <button @click="clicked++">Clicked {{ clicked }} times.</button>
    </DisclosurePanel>
  </Disclosure>
</template>