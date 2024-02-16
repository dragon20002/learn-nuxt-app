<template>
  <div>
    <!-- @input으로 값을 부모로 올려줌 -->
    <input
      type="text"
      :value="searchKeyword"
      @input="$emit('inputEvt', $event.target.value)"
    />
    <button type="button" @click="$emit('search')">search</button>
  </div>
</template>

<script>
export default {
  // model: {},
  props: {
    // 부모에서 내려온 값 (search-keyword)
    searchKeyword: {
      type: String,
      default: () => '',
    },
  },
}
</script>

<style lang="scss" scoped></style>
