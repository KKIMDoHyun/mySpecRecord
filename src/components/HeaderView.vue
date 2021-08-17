<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="/">My Spec</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="/">기본 정보</b-nav-item>
          <b-nav-item href="/awards">수상 내역</b-nav-item>
          <b-nav-item href="/certification">자격증 / 수료증</b-nav-item>
          <b-nav-item href="/internationalActivity">대외 활동</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
</style>