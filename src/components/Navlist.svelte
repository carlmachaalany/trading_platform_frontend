<script>
     const navItems = [
        { label: "MKT", href: "#" },
        { label: "AAPL ", href: "#" },
        { label: "GOOG ", href: "#" },
        { label: "VOO ", href: "#" },
        { label: "TSP ", href: "#" },
        { label: "SRET ", href: "#" },
        { label: "BTC ", href: "#" },
        { label: "DOGE ", href: "#" }
    ];

</script>
<div class="navlist overflow-auto bg-white">
   
    {#each navItems as item}
        <a href="#" class="border-b-2 border-transparent hover:text-blue-300 mx-1.5 sm:mx-6">{item.label}</a>
    {/each}

</div>


<style>
    .navlist{
        display: flex;
        position: fixed;
        top: 80px;
        width: 100%;
        margin: 0px;
        z-index: 2;
    }

    .navlist::-webkit-scrollbar {
       display: none;
   }

</style>