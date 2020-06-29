<template>
  <!-- Begin | Navbar [[ Find at scss/framework/components/navbar/navbar.scss ]] -->
  <nav class="navbar">
    <ul class="navbar-nav" data-scrollable="true">
      <li class="nav-item nav-header">Browse Music</li>

      <li v-for="list in sideList" :key="list.name" class="nav-item">
        <a
          :href="list.link"
          :class="[currentPage === '/' + list.link ? isActive : '', 'nav-link']"
          ><i :class="list.icon"></i><span>{{ list.name }}</span></a
        >
      </li>
      <li class="nav-item nav-header">Your Music</li>

      <li v-for="music in yourmusics" :key="music.name" class="nav-item">
        <a
          :href="music.link"
          :class="[
            currentPage === '/' + music.link ? isActive : '',
            'nav-link'
          ]"
          ><i :class="music.icon"></i><span>{{ music.name }}</span></a
        >
      </li>
      <li class="nav-item nav-header">Music Events</li>
      <li class="nav-item">
        <a href="events.html" class="nav-link"
          ><i class="la la-calendar"></i><span>Events</span></a
        >
      </li>
    </ul>
  </nav>
  <!-- End | Navbar -->
</template>

<script>
export default {
  data: function() {
    return {
      isActive: "active",
      sideList: [
        { name: "Genres", icon: "la la-diamond", link: "genres" },
        { name: "Free Music", icon: "la la-music", link: "free-music" },
        { name: "Artists", icon: "la la-microphone", link: "artists" }
      ],
      yourmusics: [
        { name: "Analytics", icon: "la la-bar-chart", link: "analytics" },
        { name: "Favorites", icon: "la la-heart-o", link: "favorites" },
        { name: "History", icon: "la la-history", link: "history" }
      ]
    };
  },
  computed: {
    currentPage() {
      return this.$route.path;
    }
  },
  created() {
    console.log(this.$route.path);
  }
};
</script>

<style></style>
