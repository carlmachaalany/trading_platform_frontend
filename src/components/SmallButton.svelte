


<div class="wrapper">


    <div class="left">
        <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 py-0 px-0">
            <i class="fas fa-search"></i>
        </button>
        <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 py-0 px-2">
            Alert
        </button>
        <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 py-0 px-2">
            Edit
        </button>
    </div>

    <div class="right">
        <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 py-0 px-0 rounded-l">
            <i class="fas fa-chevron-left"></i>
        </button>
        <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 py-0 px-0 rounded-r">
            <i class="fas fa-chevron-right"></i>
        </button>
    </div>
</div> 



<style>


    .wrapper {
        position: relative;
        height: 40px;
        width: 100%;
    }    
    
    .wrapper div {
        font-family: sans-serif;
        font-size: 17px;
        color: #444444;
        text-decoration: none;
    }

    .wrapper div button {
        width: 50px;
        border-radius: 8px;
        background-color: whitesmoke;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }

    .left {
        float: left;
        margin-left: 10px;
    }

    .right {
        float: right;
        margin-right: 10px;
    }
</style>