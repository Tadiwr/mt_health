<script>

    import Navbar from "./lib/Navbar.svelte";

</script>

<main>
    <Navbar/>

    <!-- The actual page! -->
    <section class="mb-10" >
        <div class="w-full text-center flex flex-col justify-center items-center p-5 md:p-10" >
            <h1 class="text-2xl sm:text-4xl md:text-8xl font-bold pt-10" >Improving the Health Care landscape through code</h1>
            <button class="mt-5 w-3/4 md:w-1/2  " >Learn More</button>

            

            <h1 class="text-2xl sm:text-4xl md:text-6xl mt-20 font-bold" >Services 🌟</h1>

            <div class="grid md:p-10 gap-5 grid-cols-1 pt-10  md:grid-cols-2 w-full" > 
                <div class="flex bg-slate-50 border border-slate-300 rounded-lg p-10 h-full flex-col justify-center items-center w-full" >
                    <h1 class="text-2xl md:text-4xl" >Abuse Awareness</h1>
                    <button class="mt-5" >Take me there</button>
                </div>
                <div class="flex bg-slate-50 border border-slate-300 rounded-lg h-full flex-col justify-center items-center p-10 w-full" >
                    <h1 class="text-2xl md:text-4xl" >Find Pharmacies near you</h1>
                    <button class="mt-5" >Take me there</button>
                </div>
            </div>
        </div>
    </section>

    <div class="w-full bg-white border-t p-5 flex justify-center text-center items-center " >
        <p class="text-slate-600" >Created by Milestone College Coding Club Group 4 ©</p>
    </div>
</main>
