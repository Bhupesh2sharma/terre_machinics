<script>
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
      duration: 800, // Customize the duration of animations
      once: true,    // Animation occurs only once on scroll
    });
  },
};
</script>
