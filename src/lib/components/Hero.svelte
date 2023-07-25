<script>
    import BottomCurve from "$lib/components/BottomCurve.svelte";
    import NavBar from "$lib/components/NavBar.svelte";
    import Container from "$lib/components/Container.svelte";
</script>

<section class="relative min-h-fit h-screen w-full min-w-fit bg-dark-purple">
    <Container cssClasses="relative grid grid-rows-[max-content_1fr]">
        <NavBar/>
        <div class="text-white flex flex-col items-center gap-16 justify-self-center self-center -translate-y-1/4">
            <h1 class="text-[8rem] text-center">Data <span class="underline underline-offset-8 decoration-eucaplyptus">tailored</span> to<br/> your needs.</h1>
            <button class="tracking-wide transition-colors duration-300 hover:bg-dark-purple hover:text-eucaplyptus bg-eucaplyptus px-8 py-5 text-dark-purple font-bold text-[1.6rem] border-2 border-eucaplyptus">Learn more</button>
        </div>
        <img class="absolute max-w-[60rem] left-1/2 -translate-x-1/2 -bottom-[16rem] z-10" src="/image-hero.webp" alt="Phone showing how app works"/>
    </Container>
    <BottomCurve/>
</section>
