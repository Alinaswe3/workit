<script>
    import BottomCurve from "$lib/components/BottomCurve.svelte";
    import NavBar from "$lib/components/NavBar.svelte";
    import Container from "$lib/components/Container.svelte";
</script>

<section class="relative min-h-fit h-screen w-full min-w-fit bg-dark-purple">
    <Container cssClasses="relative grid grid-rows-[max-content_1fr]">
        <NavBar/>
        <div class="text-white flex flex-col items-center gap-16 justify-self-center self-center -translate-y-1/4">
            <h1 class="xs:text-[5rem] xs:leading-[6.5rem] sm:text-[7rem] text-h-lg text-center">Data <span class="underline underline-offset-8 decoration-eucaplyptus">tailored</span> to<br/> your needs.</h1>
            <button class="btn">Learn more</button>
        </div>
        <img class="absolute max-w-[60rem] lg:max-w-[50rem] xs:max-w-[40rem] left-1/2 -translate-x-1/2 -bottom-[16rem] lg:-bottom-[12rem] z-10" src="/image-hero.webp" alt="Phone showing how app works"/>
    </Container>
    <img class="absolute md:hidden top-1/4 -left-[13rem] lg:-left-[25rem]" src="/bg-pattern-1.svg" alt="Decoration coils"/>
    <img class="absolute md:hidden top-1/3 -right-[5.5rem] lg:-right-[12rem]" src="/bg-pattern-2.svg" alt="Decoration coils"/>
    <BottomCurve/>
</section>
