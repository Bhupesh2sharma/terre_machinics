
<template>
  <section class="bg-white dark:bg-gray-900">
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div class="max-w-screen-md mb-8 lg:mb-16">
        <h2
          class="text-[#0F364D] hover:text-[#768C9C] no-underline font-sans font-bold text-3xl"
          data-aos="fade-up"
        >
          Our Services
        </h2>
        <p class="text-gray-500 sm:text-lg dark:text-gray-400" data-aos="fade-up">
          We offer a range of specialized services to meet your needs, from design and development to strategy and consulting. Explore what we can do for you.
        </p>
      </div>

      <!-- Using ServiceCard component here instead of manually writing the cards -->
      <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3" data-aos="fade-up">
        <ServiceCard
          title="Consulting & Strategy"
          description="We provide expert consulting services to help you navigate complex challenges and develop effective strategies."
          icon="M12 8c1.657 0 3-.895 3-2s-1.343-2-3-2-3 .895-3 2 1.343 2 3 2z"
        />
        <ServiceCard
          title="Design & Development"
          description="Our team excels in creating modern, user-friendly designs and developing high-quality applications."
          icon="M3 7h18M3 12h18m-9 5h9"
        />
        <ServiceCard
          title="Product Management"
          description="We guide your product from concept to launch, ensuring it meets market demands and achieves success."
          icon="M3 5h18M3 10h18m-7 5h7m-7 5h7"
        />
        <ServiceCard
          title="Digital Marketing"
          description="Our digital marketing services help you reach your audience effectively, with data-driven strategies and creative campaigns."
          icon="M4 6h16M4 10h16M4 14h16M4 18h16"
        />
        <ServiceCard
          title="Data Analytics"
          description="We provide comprehensive data analytics services, offering insights that drive smarter business decisions."
          icon="M13 5l7 7-7 7M5 5l7 7-7 7"
        />
        <ServiceCard
          title="Support & Maintenance"
          description="Our support and maintenance services ensure your systems remain up-to-date and run smoothly, with minimal downtime."
          icon="M11 17l4-4-4-4m0 8v-8"
        />
      </div>
    </div>
  </section>
</template>


<script>
// Import AOS for scroll animations
import AOS from "aos";
import "aos/dist/aos.css";
export default {
  components: {
    ServiceCard: {
      props: ["title", "description", "icon"],
      template: `
        <div
          class="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300 ease-in-out"
          data-aos="fade-up"
        >
          <div class="flex justify-center items-center w-12 h-12 mb-4 bg-[#0F364D] rounded-full">
            <svg class="w-6 h-6 text-white" :xlink:href="icon"></svg>
          </div>
          <h3 class="mb-2 text-xl text-[#0F364D] font-bold">{{ title }}</h3>
          <p class="text-gray-500 dark:text-gray-400">{{ description }}</p>
        </div>
      `,
    },
  },
  mounted() {
    AOS.init({
      duration: 800, // Animation duration
      once: true, // Animation happens only once
    });
  },
};
</script>

<style scoped>
/* Optional custom styling */
</style>
