<script>
    // export let uid; // user id as a prop
    import Link from 'svelte-link';
    import DashBoard from '../routes/DashBoard.svelte';
</script>

    <!-- TODO: ADD COMPONENTS BASED ON WHAT YOU CLICK -->

    <nav class="nav">
        <a href="/" class="nav-link">
            <i class="nav-icon fas fa-chart-line"></i>
            <span class="nav-text">Watchlist</span>
        </a>
        <a href="#/trade" class="nav-link">
            <i class="nav-icon fas fa-arrows-alt-h"></i>
            <span class="nav-text">Trade</span>
        </a>
        <a href="#/dashboard" class="nav-link">
            <i class="nav-icon fas fa-th-large"></i>
            <span class="nav-text">Dashboard</span>
        </a>
    </nav>

<style>

    .nav {
        position: fixed;
        bottom: 0;
        width: 100%;
        height: 60px;
        box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
        background-color: whitesmoke;
        display: flex;
        /* overflow-x: auto/hidden; ??  */
    }

    .nav-link {
        display: flex; /* makes it easy position the icon and label */
        flex-direction: column;
        align-items: center; /* align icon and label in the center of the flexbox */
        justify-content: center;
        flex-grow: 1;
        overflow: hidden; /* prevents scrollbars */
        white-space: nowrap;
        font-family: sans-serif;
        font-size: 14px;
        color: #444444;
        text-decoration: none;
        -webkit-tap-highlight-color: transparent;
        transition: background-color 5s ease-in-out;
    }

    .nav-link:hover {
        background-color: blue; /* when on the page */
    }

    .nav-link:active {
        color: #23C3E5;
    }

    .nav-icon {
        font-size: 20px;
    }

</style>
  