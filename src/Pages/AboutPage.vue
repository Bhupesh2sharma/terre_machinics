<template>
    <section class="bg-gray-100 dark:bg-gray-800 py-16 border-t-4 border-gray-700">
      <div class="gap-16 items-center px-7 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:px-6 border rounded-lg border-gray-300 dark:border-gray-700">
        <!-- Left Column -->
        <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          <h1 class="text-white font-sans font-bold text-4xl mb-8">
            Welcome to Terre Mechanics
          </h1>
          <p class="mb-6">
            Terre Mechanics is a Sikkim-based Geo-tech firm where we redefine the possibilities of geotechnical engineering. Established with a vision to innovate and excel, we stand at the forefront of geotechnical solutions, ensuring the stability, safety, and sustainability of your projects.
          </p>
  
          <!-- Accordion -->
          <div class="border-b border-gray-300 dark:border-gray-700 mb-6">
            <!-- Accordion Item: Our Mission -->
            <button class="flex justify-between w-full py-4 text-lg font-medium text-white hover:text-[#768C9C]" @click="toggleAccordion('accordion-mission')">
              Our Mission
              <span class="text-gray-500">+</span>
            </button>
            <div id="accordion-mission" class="hidden">
              <p class="py-2 text-gray-400 dark:text-gray-300">
                Our mission is to deliver exceptional geotechnical services that help clients achieve their goals while safeguarding the environment and public safety. By leveraging the latest technologies and sustainable methodologies, we ensure practical solutions for every project.
              </p>
            </div>
          </div>
  
          <!-- Accordion Item: Our Core Values -->
          <div class="border-b border-gray-300 dark:border-gray-700 mb-6">
            <button class="flex justify-between w-full py-4 text-lg font-medium text-white hover:text-[#768C9C]" @click="toggleAccordion('accordion-values')">
              Our Core Values
              <span class="text-gray-500">+</span>
            </button>
            <div id="accordion-values" class="hidden">
              <ul class="list-disc list-inside py-2 text-gray-400 dark:text-gray-300">
                <li>Integrity: Upholding the highest ethical standards in all interactions.</li>
                <li>Excellence: Striving for technical expertise and client service excellence.</li>
                <li>Collaboration: Believing in teamwork, working closely with clients, stakeholders, and partners.</li>
              </ul>
            </div>
          </div>
  
          <!-- Accordion Item: Get in Touch -->
          <div class="border-b border-gray-300 dark:border-gray-700">
            <button class="flex justify-between w-full py-4 text-lg font-medium text-white hover:text-[#768C9C]" @click="toggleAccordion('accordion-contact')">
              Get in Touch
              <span class="text-gray-500">+</span>
            </button>
            <div id="accordion-contact" class="hidden">
              <p class="py-2 text-gray-400 dark:text-gray-300">
                Facing geotechnical challenges or need expert advice on slope stability? Terre Mechanics is here to help. Contact us today to discuss how we can support your project’s stability and security.
              </p>
            </div>
          </div>
        </div>
  
        <!-- Right Column -->
        <div class="grid grid-cols-1 gap-8">
          <!-- Accordion Item: Why Choose Us -->
          <div class="border-b border-gray-300 dark:border-gray-700">
            <button class="flex justify-between w-full py-4 text-lg font-medium text-white hover:text-[#768C9C]" @click="toggleAccordion('accordion-why')">
              Why Choose Us?
              <span class="text-gray-500">+</span>
            </button>
            <div id="accordion-why" class="hidden">
              <ul class="list-disc list-inside py-2 text-gray-400 dark:text-gray-300">
                <li>Expertise: Specialized knowledge in geotechnical engineering, offering reliable solutions.</li>
                <li>Innovation: Cutting-edge technology for enhanced accuracy and project outcomes.</li>
                <li>Commitment: Transparent communication and high-quality results throughout the project lifecycle.</li>
                <li>Sustainability: Environmentally responsible practices for long-lasting, eco-friendly solutions.</li>
              </ul>
            </div>
          </div>
  
          <!-- Accordion Item: Who We Are -->
          <div class="border-b border-gray-300 dark:border-gray-700">
            <button class="flex justify-between w-full py-4 text-lg font-medium text-white hover:text-[#768C9C]" @click="toggleAccordion('accordion-who')">
              Who We Are
              <span class="text-gray-500">+</span>
            </button>
            <div id="accordion-who" class="hidden">
              <p class="py-2 text-gray-400 dark:text-gray-300">
                At Terre Mechanics, our dedicated team of geotechnical engineers is passionate about tackling Earth’s complexities. We provide solutions for slope stabilization, soil testing, foundation design, and environmental assessments, ensuring precision, quality, and client satisfaction.
              </p>
            </div>
          </div>
  
          <!-- Tech Partners Section -->
          <div>
            <h2 class="text-white font-sans font-bold text-3xl mb-4">
              Our Tech Partners
            </h2>
            <div class="grid grid-cols-1 gap-4">
              <div>
                <div style="position: relative; width: 100%; height: 0; padding-top: 50.0000%;
 padding-bottom: 0; box-shadow: 0 2px 8px 0 rgba(63,69,81,0.16); margin-top: 1.6em; margin-bottom: 0.9em; overflow: hidden;
 border-radius: 8px; will-change: transform;">
  <iframe loading="lazy" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none; padding: 0;margin: 0;"
    src="https://www.canva.com/design/DAFqMQ0bqEU/1QZTup-NR_MGgadbC6_VRg/view?embed" allowfullscreen="allowfullscreen" allow="fullscreen">
  </iframe>
</div>
<a href="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFqMQ0bqEU&#x2F;1QZTup-NR_MGgadbC6_VRg&#x2F;view?utm_content=DAFqMQ0bqEU&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link" target="_blank" rel="noopener">sit</a> by BHUPESH SHARMA              </div>
              <p class="text-gray-500 dark:text-gray-400 mb-4">
                We are proud to partner with Waglogy, a leading technology solutions provider helping us push the boundaries of innovation in geotechnical services.
              </p>
              <a href="https://www.waglogy.in" class="text-[#E69737] font-semibold hover:underline">
                Visit Waglogy: www.waglogy.in
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'AboutUs',
    methods: {
      toggleAccordion(id) {
        const element = document.getElementById(id);
        element.classList.toggle('hidden');
      }
    }
  };
  </script>
  
  <style scoped>
  h1, h2 {
    transition: color 0.3s ease;
  }
  p, li {
    line-height: 1.8;
  }
  </style>
  