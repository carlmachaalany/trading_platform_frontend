<script>
    export let title;
</script>

<nav class="navi">
    <h1>{title}</h1>
</nav>
<!-- 
TODO: ADD AN UPPER NAVNBAR. POSITION IT WELL
AND ADD A SLOT TO IT. -->

<style>
    .navi {
        position: fixed;
        top: 0;
        width: 100%;
        height: 80px;
        background-color: #23C3E5;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
        z-index: 1;
    }

    h1 {
        /* font-style = Ask Noah; */
        color: whitesmoke;
        font-size: 30px;
        position: relative;
        text-align: center;
        line-height: 80px; /* height of the upper navbar */
    }  
</style>

// move search-alert-edit to the right 
// get svg logo from Noah