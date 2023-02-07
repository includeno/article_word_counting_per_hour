<template>
  <div class="center">
    <slot></slot>
  </div>
</template>

<style>
.center {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>