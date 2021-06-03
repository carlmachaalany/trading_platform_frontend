<script>
    import BottomNavBar from '../components/BottomNavBar.svelte';
    import DashBoard from './DashBoard.svelte';
    import WatchList from './WatchList.svelte';
    import Body from '../components/Body.svelte';
    import UpperNavBar from '../components/UpperNavBar.svelte';
    import Navlist from '../components/Navlist.svelte';
</script>

    <UpperNavBar title="Place an Order" />
    <Navlist />
    <div class = "trade">
        <div class="grid mt-8  gap-8 grid-cols-1">
            <div class="flex flex-col ">
              
                  <div class="flex flex-col sm:flex-row items-center">
                     <h2 class="font-semibold text-lg mr-auto">Shop Info</h2>
                     <div class="w-full sm:w-auto sm:ml-auto mt-3 sm:mt-0"></div>
                  </div>
                  <div class="mt-5">
                     <div class="form">
                       
                        <div class="md:flex md:flex-row md:space-x-4 w-full text-xs">
                           <div class="mb-3 md:space-y-2 w-full text-xs">
                              <label class="font-semibold text-gray-600 py-2">Company  Name <abbr title="required">*</abbr></label>
                              <input placeholder="Company Name" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4" required="required" type="text" name="integration[shop_name]" id="integration_shop_name">
                              <p class="text-red text-xs hidden">Please fill out this field.</p>
                           </div>
                           <div class="mb-3 md:space-y-2 w-full text-xs">
                              <label class="font-semibold text-gray-600 py-2">Company  Mail <abbr title="required">*</abbr></label>
                              <input placeholder="Email ID" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4" required="required" type="text" name="integration[shop_name]" id="integration_shop_name">
                              <p class="text-red text-xs hidden">Please fill out this field.</p>
                           </div>
                           <div class="mb-3 md:space-y-2 w-full text-xs">
                                <label class="font-semibold text-gray-600 py-2">Company  Mail <abbr title="required">*</abbr></label>
                                <input placeholder="Email ID" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4" required="required" type="text" name="integration[shop_name]" id="integration_shop_name">
                                <p class="text-red text-xs hidden">Please fill out this field.</p>
                            </div>
                            <div class="mb-3 md:space-y-2 w-full text-xs">
                                <label class="font-semibold text-gray-600 py-2">Company  Mail <abbr title="required">*</abbr></label>
                                <input placeholder="Email ID" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4" required="required" type="text" name="integration[shop_name]" id="integration_shop_name">
                                <p class="text-red text-xs hidden">Please fill out this field.</p>
                            </div>
                        </div>
                    </div>
                  </div>
               </div>
         
         </div>
        </div>
    <BottomNavBar />

<style>
   .trade{
        position: absolute;
        width: 300px;
        height: 375px;
        left: 10px;
        top: 120px;

        background: #C1E4EC;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 20px;
    }
</style>