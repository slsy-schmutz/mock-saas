<template>
  <div>
    <div class="nav">
      <a href="https://hono-vue3.tschmutz.workers.dev/individuals/create"
        >=> Vue 3</a
      >
      <a href="https://mock-saas.vercel.app">=> SAAS</a>
    </div>
    <div class="content">
      <h2>Je suis le SAAS actuel</h2>
      <br />
      <p>
        le cloudflare Worker m'a redirigé ici car l'URL demandée n'intègre pas
        vue3
      </p>
    </div>
  </div>
</template>

<style>
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  min-height: 100vh;
}
.nav {
  width: 100vw;
  height: 80px;
  display: flex;
  align-items: center;
  background-color: antiquewhite;
}
.nav a {
  display: block;
  margin-left: 20px;
}
.content {
  padding: 30px;
}
</style>
