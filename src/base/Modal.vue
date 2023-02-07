<template>
  <div class="modal">
    <slot></slot>
  </div>
</template>


<style scoped>
.modal {
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 999;
  background-color: darkgray;
  top: 0;
  left: 0;
}
</style>