<template>
  <button type="button" class="myButton">
    <slot></slot>
  </button>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.myButton {
  font-size: 14px;
  font-weight: 600;
  background: var(--fire-brick);
  border-radius: 50px;
  border: 2px solid var(--fire-brick);
  outline: none;
  padding: 0.5rem 1rem;
  color: var(--light-silver);
  transition: color 0.4s;
}

.myButton:hover {
  color: var(--fire-brick);
  background: none;
  border: 2px solid var(--fire-brick);
}
</style>
