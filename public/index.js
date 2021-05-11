const app = new Vue({
  el: "#app",
  data: {
    navIsOpen: true
  },
  methods: {
    toggleNav() {
      this.navIsOpen = !this.navIsOpen
    }
  },
  created() {
    if (window.innerWidth < 1024) {
      this.navIsOpen = false;
    }
  }
});