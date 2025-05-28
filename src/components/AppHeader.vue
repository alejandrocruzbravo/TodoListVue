<template>
  <header>
    <h1><span class="icon" aria-hidden="true">✅</span> To do</h1>
    <p>Building Real-world Web Applications with Vue.js 3</p>
    <p>Practica de Framework para Front-End</p>
    <p>Hecho por: <strong>Alejandro Cruz Bravo</strong></p>
  </header>
</template>

<style scoped>
header {
  border-bottom: #181818 1px solid;
  background-color: #181818;
}
header::after {
  content: '';
  display: block;
  height: 1px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
}
h1 {
  font-size: 3rem;
}
h1 .icon {
  font-size: 3rem;
  vertical-align: middle;
}
</style>
