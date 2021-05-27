<script>
    import BottomNavBar from '../components/BottomNavBar.svelte';
    import Trade from './Trade.svelte';
    import WatchList from './WatchList.svelte';
    import Body from '../components/Body.svelte';
    import UpperNavBar from '../components/UpperNavBar.svelte';
</script>

    <UpperNavBar title="Dashboard" />

    <Body>
        <h1>Dashboard</h1>
    </Body>

    <BottomNavBar />


<style>
    h1 {
        font-size: 40px;
        text-align: center;
    }
</style>