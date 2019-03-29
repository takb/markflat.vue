<template>
  <div id="app" style="width: 60%; margin: auto;">
    <center>
      <img alt="Vue logo" src="./assets/logo.png">
      <h1>markflat.vue test</h1>
    </center>
    <textarea v-model="markflat" rows="8" style="width: 100%;"></textarea><br />
    <markflat :mb="markflat" style="border: 1px solid #888; padding: 12px;"/>
  </div>
</template>

<script>
export default {
  data: ()=> ({
    markflat: "# Title - Artist\n1. first verse {F} lyrics\n~Chorus {a7}lyrics of {C}chorus"
  })
}
</script>
