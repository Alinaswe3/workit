<script>
    import Container from "$lib/components/Container.svelte";
    import FacebookIcon from "$lib/components/icons/FacebookIcon.svelte";
    import TwitterIcon from "$lib/components/icons/TwitterIcon.svelte";
    import InstagramIcon from "$lib/components/icons/InstagramIcon.svelte";
</script>

<footer class="mb-20">
    <Container cssClasses="flex justify-center items-center">
        <div class="flex flex-col items-center gap-16">
            <img class="w-[10rem]" src="/logo-dark.svg" alt="Dark version of company logo"/>
            <div class="flex gap-16 items-center">
                <a href="/">

                    <FacebookIcon/>
                </a> <a href="/">

                <TwitterIcon/>
            </a>
                <a href="/">
                    <InstagramIcon/>
                </a>

            </div>
        </div>


    </Container>
</footer>