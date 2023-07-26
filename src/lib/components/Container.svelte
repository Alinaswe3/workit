<script>
    export let cssClasses = "";
</script>

<div class={`max-w-[112rem] mx-auto lg:px-16 px-8 h-full ${cssClasses}`}>
    <slot/>
</div>