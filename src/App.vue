<template>
<div>
    
</div>

    <Navbar/>
  
    <router-view />
    <ContactForm/>
    <Footer_comp/>
    
    

</template>

<script>

import './assets/tailwind.css';
import Navbar from  './components/Navbar.vue';
import Footer_comp from './components/Footer.vue';

export default{
    name :'App',
    components:{Navbar,Footer_comp,}

}

</script>

<style>

</style>
