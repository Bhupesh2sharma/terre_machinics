<template>
  <div class="bg-[#0F364D] h-20 flex items-center justify-between px-6 text-white animate-fade-in">
    <!-- Contact Details -->
    <div class="text-sm">
      <p class="mb-1 text-xl font-bold tracking-wide">
        <a href="tel:+1234567890" class="hover:underline no-underline text-white hover:text-[#E69737] transition-colors duration-300 ease-in-out">
          +1 (234) 567-890
        </a>
      </p>
      <p class="mb-1 text-xl font-bold tracking-wide">
        <a href="mailto:contact@example.com" class="hover:underline no-underline text-white hover:text-[#E69737] transition-colors duration-300 ease-in-out">
          contact@example.com
        </a>
      </p>
    </div>

    <!-- Social Media Icons -->
    <div class="flex space-x-4">
      <!-- Add your social media icons here -->
    </div>
  </div>

  <header class="bg-white">
    <div class="container mx-auto px-4">
      <div class="flex justify-between items-center py-4">
        <!-- Logo -->
        <div class="flex items-center">
          <a href="index.html" class="text-3xl font-bold text-[#7C94A1]">
            <img :src="logo" alt="Logo" class="h-14"/>
          </a>
        </div>

        <nav class="hidden md:flex space-x-9 font-sans bg-white shadow-md p-4 rounded-lg">
          <router-link to="/" class="nav-item active text-[#0F364D] hover:text-[#768C9C] no-underline font-bold text-xl">
            Home
          </router-link>
          <router-link to="/services" class="nav-item text-[#0F364D] hover:text-[#768C9C] no-underline font-bold text-xl">
            Services
          </router-link>
          <router-link to="/about" class="nav-item text-[#0F364D] hover:text-[#768C9C] no-underline font-bold text-xl">
            About
          </router-link>
          <router-link to="/projects" class="nav-item text-[#0F364D] hover:text-[#768C9C] no-underline font-bold text-xl">
            Projects
          </router-link>
          <router-link to="/contact" class="nav-item text-[#0F364D] hover:text-[#768C9C] no-underline font-bold text-xl">
            Our Updates
          </router-link>
        </nav>

        <!-- Mobile Menu Button -->
        <div class="md:hidden">
          <button @click="toggleMenu" class="text-[#0F364D] focus:outline-none">
            <i class="fa fa-bars text-2xl"></i>
          </button>
        </div>

        <!-- Contact Button for Desktop -->
        <div class="hidden md:flex items-center space-x-4">
          <a href="#" class="bg-[#0F364D] text-white px-4 py-2 rounded-full hover:bg-[#7C94A1] no-underline font-sans font-bold text-xl">
            Contact Us
          </a>
        </div>
      </div>

      <!-- Mobile Navigation Menu -->
      <div v-if="isMenuOpen" class="md:hidden">
        <nav class="flex flex-col space-y-4">
          <router-link to="/" class="text-[#0F364D] hover:text-[#768C9C] no-underline font-sans font-bold text-lg">Home</router-link>
          <router-link to="/services" class="text-[#0F364D] hover:text-[#768C9C] no-underline font-sans font-bold text-lg">Services</router-link>
          <router-link to="/about" class="text-[#0F364D] hover:text-[#768C9C] no-underline font-sans font-bold text-lg">About</router-link>
          <router-link to="/projects" class="text-[#0F364D] hover:text-[#768C9C] no-underline font-sans font-bold text-lg">Projects</router-link>
          <router-link to="/Contact" class="text-[#0F364D] hover:text-[#768C9C] no-underline font-sans font-bold text-lg">Contact</router-link>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
import logo from '../assets/images/terrelogo.jpg'

export default {
  name: "NavBar",
  data() {
    return {
      logo,
      isMenuOpen: false // Initialize the state for the mobile menu
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    }
  }
};
</script>

<style>

.nav-color {
  color: #002b45;
}
.font-sans {
  font-family: Arial, Helvetica, sans-serif;
}

</style>
