<script>
    export let label
    export let value 
    export let type
</script>

<div class="relative mb-4">
    <label for={label} class="leading-7 text-sm text-gray-600">{label}</label>

    {#if type === 'password'}
        <input required type="password" bind:value class="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
    {:else if type === 'email'}
        <input required type="email" bind:value class="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
    {:else}
        <input required type="text" bind:value class="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
    {/if}
</div>

