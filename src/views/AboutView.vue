<script setup>
import Card from 'primevue/card'
</script>

<template>
  <Card class="flex-1">
    <template #header>
      <img alt="cat" src="@/assets/cat.jpg" width="400" />
    </template>
    <template #title>Raivis Ulsts</template>
    <template #subtitle>Front-end developer</template>
    <template #content>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error
        repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa
        ratione quam perferendis esse, cupiditate neque quas!
      </p>
    </template>
    <template #footer>
      <div><a href="tel:+37126050297">+371 26050297</a></div>
      <div>
        <a class="text-blue-700" href="https://www.linkedin.com/in/raivis-ulsts/"
          >https://www.linkedin.com/in/raivis-ulsts/</a
        >
      </div>
      <div><a href="mailto: raivisulsts@gmail.com">raivisults@gmail.com</a></div>
    </template>
  </Card>
</template>
