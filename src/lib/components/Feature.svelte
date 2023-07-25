<script>
    export let number = 1;
    export let heading = "Heading";
</script>

<div class="flex flex-col">
    <div>
        {number}
    </div>
    <div>
        <h3>{heading}</h3>
        <p>
            <slot/>
        </p>
    </div>
</div>