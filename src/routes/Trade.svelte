<script>
    import BottomNavBar from '../components/BottomNavBar.svelte';
    import UpperNavBar from '../components/UpperNavBar.svelte';
    import Navlist from '../components/Navlist.svelte';
</script>

    <UpperNavBar title="Place an Order" />

    <Navlist />


    <div class="wrapper rounded-3xl overflow-hidden shadow-lg">
        <div class="header">
                <h3>TSP</h3>
                <p>34.73</p>
                <p style="color: green">+0.72%</p>
        </div>
        
        <div class="toggle">
            <p>PaperTrade</p>
            <label for="toogleA" class="flex items-center cursor-pointer">
                <div class="relative">
                <input id="toogleA" type="checkbox" class="sr-only" />
                <div class="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
                <div class="dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition"></div>
                </div>
            </label>
            <small>n/y</small>
        </div>

        <div class="row mt-1">
            <div class="qty">
                <p>QTY</p>
                <input class="w-24 shadow appearance-none border rounded-xl py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-300" type="number">
            </div>
            <div class="stp">
                <p>STP$</p>
                <input class="w-24 shadow appearance-none border rounded-xl py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-300" type="number">
            </div>
        </div>

        <div class="row" style="margin-top: 10px">
            <div class="stp">
                <p>Priority</p>
                <input class="w-24 shadow appearance-none border rounded-xl py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-300" type="number">
            </div>
        </div>

        <div class="row" style="margin-top: 10px">
            <div class="stp">
                <p>Order Duration</p>
                <input class="w-12 shadow appearance-none border mr-1 rounded-xl py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:border-blue-300" type="number" placeholder="DAY">
                <input class="w-12 shadow appearance-none border rounded-xl py-2 px-1.5 text-gray-700 leading-tight focus:outline-none focus:border-blue-300" type="number" placeholder="GTC">
            </div>
        </div>

        <a id="risk-settings" href="#">Risk Settings</a>

        <div class="row mt-7">
            <div class="stp">
                <p>Timespan</p>
                <input class="w-24 shadow appearance-none border rounded-xl py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-300" type="number">
            </div>
        </div>

        <div class="last-row">
            <div class="buy-sell">
                <button id="buy" class="hover:bg-gray-400 text-gray-50 py-1 px-4 rounded-l-xl">
                    Buy
                </button>
                <button id="sell" class="hover:bg-gray-400 text-gray-50 py-1 px-4 rounded-r-xl">
                    Sell
                </button>
            </div>
            <div class="take">
                <p>TAKE$/STP</p>
                <label for="toogleB" class="flex items-center cursor-pointer">
                    <div class="relative">
                    <input id="toogleB" type="checkbox" class="sr-only" />
                    <div class="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
                    <div class="dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition"></div>
                    </div>
                </label>
                <small>n/y</small>
            </div>
        </div>
    </div>

    <BottomNavBar />

<style>
   /* .trade{
        position: absolute;
        width: 300px;
        height: 375px;
        left: 10px;
        top: 120px;
        background: #C1E4EC;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 20px;
    } */

    .wrapper {
        position: relative;
        width: 100%;
        top: 23px;
        max-height: calc(100vh - 170px);
        background-color: #C0E4EC;
        overflow: scroll;
    }

    .header {
        padding: 5px 15px;
        height: 40px;
        display: flex;
        color: whitesmoke;
        background-color: #1F202B;
    }
    .header h3 {
        font-size: 20px;
    }
    .header p {
        align-self: flex-end;
        font-size: 10px;
        margin-left: 5px;
    }

    .form-grid {
        margin: 20px 0;
    }

    input:checked ~ .dot {
        transform: translateX(100%);
        background-color: #23C3E5;
    }

    /* Second try */
    .toggle {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        position: relative;
        height: 50px;
        width: 100%;
        padding-top: 5px;
        padding-right: 10px;
    }
    
    .toggle small {
        font-size: 10px;
    }
    .toggle .relative {
        padding-right: 5px;
    }
    .toggle p {
        padding-right: 8px;
        font-size: 14px;
    }

    .row {
        padding-right: 10px;
        justify-content: flex-end;
        position: relative;
        width: 100%;
        display: flex;
    }
    .row div {
        align-items: center;
        display: flex;
    }
    .row p {
        padding-right: 5px;
    }
    .row .qty {
        margin-right: 10px;
    }

    #risk-settings {
        float: right;
        margin: 5px 13px 0 0;
        font-size: 13px;
        color: #23C3E5;
    }

    .last-row {
        padding: 10px;
        position: relative;
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
    .last-row button {
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
    #buy {
        background-color: green;
    }
    #sell {
        background-color: red;
    }
    .take {
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
    .take small {
        font-size: 10px;
        padding-left: 5px;
    }
    .take p {
        font-size: 12px;
        padding-right: 5px;
    }
</style>



    <!-- <div class = "trade">
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
        </div> -->