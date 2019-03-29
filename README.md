# markflat.vue
Vue plugin to integrate [markflat.showdown](/takb/markflat.showdown).

## install
```sh
npm install takb/markflat.vue
```
## use 
In your Vue application's main.js file: 
```javascript
import MarkFlat from 'markflat.vue'
Vue.use(MarkFlat, {
  mbAddStyle: true, 
  mbEnableZoom: true
})
```

This installs a `$markflat` property to the Vue prototype for use in javascript code: 
```html
<script>
export default {
  props: ['mb'],
  computed: {
    content() {
      return this.$markflat.makeHtml(this.mb);
    }
  }
};
</script>
```
And it registers a global component `markflat`, which takes one property `mb` and generates a div with computes its innerHTML with a computed method (in fact, the one above): 
```html
<template>
  <div id="app" style="width: 60%; margin: auto;">
    <h1>markflat.vue test</h1>
    <markflat :mb="markflat" style="border: 1px solid #888; padding: 12px;"/>
  </div>
</template>

<script>
export default {
  data: ()=>({
    markflat: "# Title - Artist\n1. first verse {F} lyrics\n~Chorus {a7}lyrics of {C}chorus"
  })
}
</script>
```
## demo app
`git clone` this repo, then run 
```sh
npm install
npm run serve 
```
then open http://localhost:8080/ in a browser.
