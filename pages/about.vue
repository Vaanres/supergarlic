<template>
  <section>
    <div class="container my-5">
      <h1>Giới thiệu về siêu tỏi</h1>
      <p>Coming soon...</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'About',
  head() {
    return {
      title: `Giới thiệu ${process.env.site_name}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `Giới thiệu ${process.env.site_description}`
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped></style>
