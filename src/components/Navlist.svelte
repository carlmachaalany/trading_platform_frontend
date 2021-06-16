<script>
    import BottomNavBar from '../components/BottomNavBar.svelte';
    import UpperNavBar from '../components/UpperNavBar.svelte';
    import Navlist from '../components/Navlist.svelte';
    import TradeBody from '../components/TradeBody.svelte';
    import TradeMain from '../components/TradeMain.svelte';
    import SmallButton from '../components/SmallButton.svelte';
    import { Router, Link, Route } from "svelte-routing";
    
    // const navItems = [
    //     { label: "MKT", href: "#/trade" },
    //     { label: "LMT ", href: "#" },
    //     { label: "STP ", href: "#" },
     
    // ];
</script>

<!-- <div class="navlist overflow-auto bg-white">
   
    {#each navItems as item}
        <a href={item.href} class="border-b-2 border-transparent mx-1.5 sm:mx-6">{item.label}</a>
    {/each}

</div> -->
<Router>
    <header>
  
      <nav class = "navlist overflow-auto bg-white">
        <Link to="/MKT" class="border-b-2 border-transparent mx-1.5 sm:mx-6">MKT</Link>
        <Link to="/LMT" class="border-b-2 border-transparent mx-1.5 sm:mx-6">LMT</Link>
        <Link to="/STP" class="border-b-2 border-transparent mx-1.5 sm:mx-6">STP</Link>
      </nav>
    </header>
  
   
  
      <Route path="/MKT">
        <TradeBody type = "MKT"/>
      </Route>
  
      <Route path="/LMT">
        <TradeBody type = "LMT"/>
      </Route>
      <Route path="/STP">
        <TradeBody type = "STP"/>
      </Route>
      
    
  </Router>
  


<style>
    .navlist{
        display: flex;
        position: fixed;
        top: 80px;
        left: 0px;
        width: 100%;
        margin: 0px;
        z-index: 2;
    }

    .navlist::-webkit-scrollbar {
       display: none;
   }

   .navlist a:hover {
        color: #23C3E5;
   }

</style>