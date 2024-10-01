<template>
  <section class="py-16 bg-gray-100">
    <div class="container mx-auto px-6">
      <!-- Title -->
      <div class="text-center mb-12">
        <h2 class="text-4xl font-bold text-[#0F364D]">Our Projects</h2>
        <p class="text-gray-500">Exciting projects are on the way. Stay tuned for updates!</p>
      </div>

      <!-- Coming Soon Section -->
      <div class="flex flex-col items-center justify-center">
        <div class="relative">
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="w-40 h-40 border-8 border-t-[#E69737] border-gray-300 rounded-full animate-spin"></div>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-lg text-center relative z-10">
            <h3 class="text-2xl font-bold text-[#0F364D] mb-4">Projects Coming Soon</h3>
            <p class="text-gray-500 mb-6">We are working on some exciting new projects that will be revealed soon. Check back here for updates!</p>
            <button class="py-2 px-6 bg-[#0F364D] text-white font-bold rounded-lg hover:bg-[#0D2D40] transition-colors duration-300 ease-in-out">
              Notify Me
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  max-width: 1200px;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.animate-spin {
  animation: spin 1s linear infinite;
}
</style>
