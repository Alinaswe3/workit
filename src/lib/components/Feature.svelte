<script>
    export let number = 1;
    export let heading = "Heading";
</script>

<div class="flex flex-col lg:flex-row lg:text-start lg:items-end items-center text-center gap-16 lg:w-4/5">
    <div class="shrink-0 flex justify-center items-center w-[5.6rem] h-[5.6rem] rounded-full border border-dark-purple">
        <h3 class="text-[2.4rem]">{number}</h3>
    </div>
    <div>
        <h2 class="text-h-sm">{heading}</h2>
        <p class="text-[1.8rem]">
            <slot/>
        </p>
    </div>
</div>