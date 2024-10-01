<template>
<div>

    <section class="bg-white dark:bg-gray-900">
        <div class="gap-16 items-center py-12 px-9 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-24 lg:px-8">
            <!-- Text Content -->
            <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                <h1 class="text-[#0F364D] hover:text-[#768C9C] no-underline font-sans font-bold text-4xl mb-6">
                    Welcome To Terre Mechanics
                </h1>
                <p class="mb-6">
                    A Sikkim based Geo-tech firm where we redefine the possibilities of geotechnical engineering.                 </p>
                <p>
                    Established with a vision to innovate and excel, our firm stands at the forefront of geotechnical solutions, providing expert services that ensure the stability, safety, and sustainability of your projects.                </p>
                <div class="mt-8 flex space-x-4">
                    <div class="flex items-center space-x-4 sm:hidden md:hidden">
                        <!-- Engineer Icon -->
                        <div class="flex items-center">
                            <svg class="w-15 h-15 text-gray-800 text-[#768C9C]" xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 4h12M6 4v16M6 4H5m13 0v16m0-16h1m-1 16H6m12 0h1M6 20H5M9 7h1v1H9V7Zm5 0h1v1h-1V7Zm-5 4h1v1H9v-1Zm5 0h1v1h-1v-1Zm-3 4h2a1 1 0 0 1 1 1v4h-4v-4a1 1 0 0 1 1-1Z"/>
                            </svg>
                            <p class="ml-2 mod text-lg">Advanced Solutions</p>
                        </div>
                        
                        <!-- Building Icon -->
                   
                    </div>
                    
                      
                </div>
            </div>
            <!-- Images with Icons -->
            <div class="relative mt-12 lg:mt-0">
                <div class="relative z-10 grid grid-cols-2 gap-4">
                    <img class="w-full rounded-lg shadow-lg" :src="hero1" alt="office content 1">
                    <img class="w-full mt-4 lg:mt-10 rounded-lg shadow-lg" :src="hero2" alt="office content 2">
                </div>
                <div class="absolute top-0 left-0 flex space-x-4 p-4 bg-[#0F364D]  shadow-lg rounded-br-3xl">
                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="false" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7h1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h11.5M7 14h6m-6 3h6m0-10h.5m-.5 3h.5M7 7h3v3H7V7Z"/>
                      </svg>
                                      
                </div>
            </div>
        </div>
    </section>

    <section class="bg-gray-100 dark:bg-gray-800">
        <div class="gap-16 items-center py-8 px-7 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
            <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                <h1 class="text-white hover:text-[#768C9C] no-underline font-sans font-bold text-3xl ">About Us</h1>
                <p class="mb-4">Welcome to Terre Mechanics, a Sikkim based Geo-tech firm where we redefine the possibilities of geotechnical engineering. Established with a vision to innovate and excel, our firm stands at the forefront of geotechnical solutions, providing expert services that ensure the stability, safety, and sustainability of your projects.</p>
                <h1 class="text-white hover:text-[#768C9C] no-underline font-sans font-bold text-3xl ">Who We Are</h1>
                <p class="mb-4">At Terre Mechanics, we are a dedicated team of geotechnical engineers, and who are passionate about understanding the Earth's complexities. Our diverse expertise allows us to tackle a wide range of challenges, from Slope Stabilization, soil testing and foundation design to environmental assessments and site remediation. We pride ourselves on our commitment to precision, quality, and client satisfaction.</p>
                <h1 class="text-white hover:text-[#768C9C] no-underline font-sans font-bold text-3xl ">Our Mission</h1>
                <p class="mb-4">Our mission is to deliver exceptional geotechnical services that help our clients achieve their goals while safeguarding the environment and ensuring public safety. We aim to provide innovative solutions that are both practical and sustainable, leveraging the latest technology and methodologies to address the unique challenges of each project.</p>
               
            
            </div>
            <div class="grid grid-cols-2 gap-4 mt-8">
                <!-- <img class="w-full rounded-lg" :src="about" alt="team content 1"/> -->
                <h1></h1>
                <img class="w-full rounded-lg" :src="about" alt="team content 1"/>
            </div>
        </div>
    </section>
    <section class="bg-white dark:bg-gray-900">
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div class="max-w-screen-md mb-8 lg:mb-16">
                <h2 class="text-[#0F364D] hover:text-[#768C9C] no-underline font-sans font-bold text-3xl">Our Services</h2>
                <p class="text-gray-500 sm:text-lg dark:text-gray-400">We offer a range of specialized services to meet your needs, from design and development to strategy and consulting. Explore what we can do for you.</p>
            </div>
            <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <!-- Card 1 -->
                <div class="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300 ease-in-out">
                    <div class="flex justify-center items-center w-12 h-12 mb-4 bg-[#0F364D] rounded-full">
                        <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c1.657 0 3-.895 3-2s-1.343-2-3-2-3 .895-3 2 1.343 2 3 2zm0 4c1.657 0 3-.895 3-2s-1.343-2-3-2-3 .895-3 2 1.343 2 3 2zm0 4c1.657 0 3-.895 3-2s-1.343-2-3-2-3 .895-3 2 1.343 2 3 2z"></path></svg>
                    </div>
                    <h3 class="mb-2 text-xl text-[#0F364D] font-bold ">Slope Stabilization</h3>
                    <p class="text-gray-500 dark:text-gray-400">Soil nailing is a common technique used for slope stabilization, especially in cases where the soil needs to be reinforced without extensive excavation. This method involves the insertion of steel bars (nails) into a slope or excavation to provide reinforcement. The nails are installed at a slight downward angle and are typically grouted into place to increase their strength. A facing, such as shotcrete, is often applied to the surface of the slope to provide additional support and protect against erosion.</p>
                    <div class=" md:flex items-center space-x-4">
                      <a :href="`/services`" class="bg-[#0F364D] text-white px-4 py-2 rounded-full hover:bg-[#7C94A1] no-underline font-sans font-bold text-xl">Read More</a>

        </div>
                </div>
                <!-- Card 2 -->
                <div class="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300 ease-in-out">
                    <div class="flex justify-center items-center w-12 h-12 mb-4 bg-[#0F364D] rounded-full">
                        <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7h18M3 12h18m-9 5h9"></path></svg>
                    </div>
                    <h3 class="mb-2 text-xl font-bold ">Geosynthetics</h3>
                    <p class="text-gray-500 dark:text-gray-400">Geosynthetics are synthetic products used in geotechnical engineering to enhance the mechanical and physical properties of soil. These materials are commonly used in construction projects for various purposes, including reinforcement, drainage, filtration, separation, and protection. Geosynthetics play a crucial role in slope stabilization, erosion control, retaining walls, and road construction.</p>
                    <div class="hidden md:flex items-center space-x-4">
                      <a :href="`/services`" class="bg-[#0F364D] text-white px-4 py-2 rounded-full hover:bg-[#7C94A1] no-underline font-sans font-bold text-xl">Read More</a>

        </div>
                </div>
                <!-- Card 3 -->
                <div class="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300 ease-in-out">
                    <div class="flex justify-center items-center w-12 h-12 mb-4 bg-[#0F364D] rounded-full">
                        <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h18M3 10h18m-7 5h7m-7 5h7"></path></svg>
                    </div>
                    <h3 class="mb-2 text-xl font-bold ">Shotcreting </h3>
                    <p class="text-gray-500 dark:text-gray-400">We guide your product from concept to launch, ensuring it meets market demands and achieves success.</p>
                    <div class="hidden md:flex items-center space-x-4">
                      <a :href="`/services`" class="bg-[#0F364D] text-white px-4 py-2 rounded-full hover:bg-[#7C94A1] no-underline font-sans font-bold text-xl">Read More</a>

        </div>
                </div>
              
            </div>
        </div>
    </section>
      <!-- Floating Contact Form -->
      <div class="fixed bottom-5 right-5">
        <!-- Floating Button -->
        <button @click="toggleForm" class="bg-white text-white p-4 rounded-full shadow-lg">
            <svg class="w-8 h-8 text-gray-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M4 3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h1v2a1 1 0 0 0 1.707.707L9.414 13H15a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4Z" clip-rule="evenodd"/>
                <path fill-rule="evenodd" d="M8.023 17.215c.033-.03.066-.062.098-.094L10.243 15H15a3 3 0 0 0 3-3V8h2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-1v2a1 1 0 0 1-1.707.707L14.586 18H9a1 1 0 0 1-.977-.785Z" clip-rule="evenodd"/>
              </svg>
              
        </button>
    
        <!-- Contact Form -->
        <transition name="fade">
          <div v-if="showForm" class="bg-[#] p-6 rounded-lg shadow-lg mt-2 w-80">
            <h3 class="text-xl font-semibold mb-4">Contact Us</h3>
            <form @submit.prevent="submitForm">
              <div class="mb-4">
                <label for="name" class="block text-gray-700">Name</label>
                <input type="text" id="name" v-model="name" class="mt-1 p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500">
              </div>
              <div class="mb-4">
                <label for="email" class="block text-gray-700">Email</label>
                <input type="email" id="email" v-model="email" class="mt-1 p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500">
              </div>
              <div class="mb-4">
                <label for="message" class="block text-gray-700">Message</label>
                <textarea id="message" v-model="message" class="mt-1 p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
              </div>
              <button type="submit" class="bg-gray-700 text-white p-2 rounded w-full hover:bg-[#0F364D]">Send</button>
            </form>
          </div>
        </transition>
      </div>

   
    <section class="bg-gray-100 dark:bg-gray-800 py-12">
        <div class="max-w-screen-xl mx-auto px-6 lg:px-8">
            <div class="text-center mb-12">
              
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Card 1 -->
                <div class="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div class="flex items-center mb-4">
                        <svg class="w-8 h-8 text-gray-800" xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 4h12M6 4v16M6 4H5m13 0v16m0-16h1m-1 16H6m12 0h1M6 20H5M9 7h1v1H9V7Zm5 0h1v1h-1V7Zm-5 4h1v1H9v-1Zm5 0h1v1h-1v-1Zm-3 4h2a1 1 0 0 1 1 1v4h-4v-4a1 1 0 0 1 1-1Z"/>
                          </svg>                          
                        <h2 class="ml-4 text-xl font-semibold text-[#0F364D] ">Expertise in Innovation</h2>
                    </div>
                    <p class="text-gray-600 dark:text-gray-400">
                        We leverage the latest technology and innovative solutions to ensure that your project is at the forefront of industry advancements.
                    </p>
                </div>
                <!-- Card 2 -->
                <div class="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div class="flex items-center mb-4">
                        <svg class="w-8 h-8 text-gray-800 " xmlns="http://www.w3.org/2000/svg" width="54" height="54" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd" d="M9.586 2.586A2 2 0 0 1 11 2h2a2 2 0 0 1 2 2v.089l.473.196.063-.063a2.002 2.002 0 0 1 2.828 0l1.414 1.414a2 2 0 0 1 0 2.827l-.063.064.196.473H20a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-.089l-.196.473.063.063a2.002 2.002 0 0 1 0 2.828l-1.414 1.414a2 2 0 0 1-2.828 0l-.063-.063-.473.196V20a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-.089l-.473-.196-.063.063a2.002 2.002 0 0 1-2.828 0l-1.414-1.414a2 2 0 0 1 0-2.827l.063-.064L4.089 15H4a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h.09l.195-.473-.063-.063a2 2 0 0 1 0-2.828l1.414-1.414a2 2 0 0 1 2.827 0l.064.063L9 4.089V4a2 2 0 0 1 .586-1.414ZM8 12a4 4 0 1 1 8 0 4 4 0 0 1-8 0Z" clip-rule="evenodd"/>
                          </svg>
                 <h2 class="ml-4 text-xl font-semibold text-[#0F364D] ">Quality Assurance</h2>
                    </div>
                    <p class="text-gray-600 dark:text-gray-400">
                        We maintain strict quality control measures to ensure that every project we undertake meets the highest standards of excellence.
                    </p>
                </div>
                <!-- Card 3 -->
                <div class="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div class="flex items-center mb-4">
                        <svg class="w-8 h-8 text-gray-800 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 12v4m0 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM8 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 0v2a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V8m0 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/>
                          </svg>
                                                  <h2 class="ml-4 text-xl font-semibold text-[#0F364D] ">Client-Centric Approach</h2>
                    </div>
                    <p class="text-gray-600 dark:text-gray-400">
                        Our clients are at the heart of everything we do. We prioritize your needs, offering tailored solutions that exceed expectations.
                    </p>
                </div>
            </div>
        </div>
    </section>
    
</div>
</template>


<script>
import hero1 from '../assets/images/hero1.png'
import hero2 from '../assets/images/hero2.png'
import about from '../assets/images/about.gif'


export default{
    name:'HomePage',
    data(){
        return{
        hero1,hero2,about,    

      showForm: false,
      name: '',
      email: '',
      message: ''
    };
  },
  
  methods: {
    toggleForm() {
      this.showForm = !this.showForm;
    },
    submitForm() {
      alert(`Name: ${this.name}, Email: ${this.email}, Message: ${this.message}`);
      this.name = '';
      this.email = '';
      this.message = '';
      this.showForm = false;
    }
  }
}


</script>


<style>

/* Transition for the form */
.fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter-from, .fade-leave-to {
    opacity: 0;
  }

</style>