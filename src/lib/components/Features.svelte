<script>
    import Container from "$lib/components/Container.svelte";
    import Feature from "$lib/components/Feature.svelte";
    import BottomCurve from "$lib/components/BottomCurve.svelte";
</script>

<section class="relative py-96 bg-ghost-white">
    <Container>
        <div class="grid grid-cols-3 gap-10 lg:grid-cols-1 lg:justify-items-center xs:gap-32">
            <Feature heading="Actionable insights">
                Optimize your products, improve customer satisfaction and stay ahead of the competition with our product
                data analytics.
            </Feature>
            <Feature number=2 heading="Data-driven decisions">
                Make data-driven decisions with our product data analytics. Our AI-generated reports help you unlock
                insights hidden in your product data.
            </Feature>
            <Feature number=3 heading="Always affordable">

                Always affordable pricing that scales with your business. Get top-quality product data analytics
                services without hidden costs or unexpected fees.
            </Feature>
        </div>
    </Container>
    <BottomCurve fillColor="shape-fill-white" />
</section>