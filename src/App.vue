<script setup lang="ts">
import { ref } from 'vue'
import { useRouter, RouterLink, RouterView } from 'vue-router'
import { version } from '../package.json'
import TabMenu from 'primevue/tabmenu'

const router = useRouter()
type MenuItem = {
  label: string
  route: string
  icon: string
}
const routes = ref<MenuItem[]>(
  router
    .getRoutes()
    .map((r) => ({ label: r.name as string, route: r.path, icon: r.meta.icon as string }))
)
</script>

<template>
  <div class="flex flex-col h-screen">
    <!-- Header -->
    <header class="flex flex-row bg-primary text-white p-4">
      <img
        alt="AA Projekts logo"
        class="mr-4"
        src="@/assets/aa-projekts-logo-min.jpg"
        width="50"
        height="50"
      />

      <nav class="flex-1">
        <TabMenu class="flex-1" :model="routes">
          <template #item="{ item, props }">
            <router-link v-slot="{ href, navigate }" :to="item.route" custom>
              <a v-ripple :href="href" v-bind="props.action" @click="navigate">
                <span v-bind="props.icon" />
                <span v-bind="props.label">{{ item.label }}</span>
              </a>
            </router-link>
          </template>
        </TabMenu>
      </nav>
    </header>

    <!-- Main Content -->
    <main class="flex-1 p-4">
      <RouterView />
    </main>

    <!-- Footer -->
    <footer class="bg-primary text-white py-2 px-4">
      <span class="text-">v{{ version }}</span>
    </footer>
  </div>
</template>

<style scoped></style>
