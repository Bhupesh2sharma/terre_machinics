<template>
  <section class="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-[#223146] to-[#0F364D] py-16 px-6">
    <div class="container mx-auto max-w-screen-lg">
      <div class="text-center mb-12">
        <h2 class="text-4xl font-bold text-white mb-4">Get in Touch</h2>
        <p class="text-gray-200">We’d love to hear from you. Reach out to us through the form or contact information below.</p>
      </div>

      <!-- Contact Form and Information -->
      <div class="flex flex-col lg:flex-row lg:justify-between">
        <!-- Contact Form -->
        <div class="lg:w-1/2 mb-8 lg:mb-0">
          <form class="bg-white p-8 rounded-lg shadow-lg">
            <div class="mb-6">
              <label for="name" class="block text-gray-700 font-bold mb-2">Name</label>
              <input type="text" id="name" name="name" placeholder="Your Name" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F364D]"/>
            </div>
            <div class="mb-6">
              <label for="email" class="block text-gray-700 font-bold mb-2">Email</label>
              <input type="email" id="email" name="email" placeholder="Your Email" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F364D]"/>
            </div>
            <div class="mb-6">
              <label for="message" class="block text-gray-700 font-bold mb-2">Message</label>
              <textarea id="message" name="message" rows="5" placeholder="Your Message" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F364D]"></textarea>
            </div>
            <div class="text-center">
              <button type="submit" class="bg-[#0F364D] text-white px-6 py-2 rounded-full hover:bg-[#7C94A1] font-bold">Send Message</button>
            </div>
          </form>
        </div>

        <!-- Contact Information -->
        <div class="lg:w-1/2 flex flex-col justify-center">
          <!-- Phone -->
          <div class="mb-6 text-center lg:text-left">
            <h3 class="text-2xl font-bold text-white mb-2">Phone</h3>
            <p class="text-gray-300">+123 456 7890</p>
          </div>
          
          <!-- Email -->
          <div class="mb-6 text-center lg:text-left">
            <h3 class="text-2xl font-bold text-white mb-2">Email</h3>
            <p class="text-gray-300">info@example.com</p>
          </div>

          <!-- Address -->
          <div class="text-center lg:text-left">
            <h3 class="text-2xl font-bold text-white mb-2">Address</h3>
            <p class="text-gray-300">1234 Street Name, City, State, ZIP</p>
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
</style>
