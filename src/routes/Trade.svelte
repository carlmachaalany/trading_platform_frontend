<script>
    import BottomNavBar from '../components/BottomNavBar.svelte';
    import DashBoard from './DashBoard.svelte';
    import WatchList from './WatchList.svelte';
    import Body from '../components/Body.svelte';
    import UpperNavBar from '../components/UpperNavBar.svelte';
</script>

    <UpperNavBar title="Trade" />

    <Body>
        <h1>Trade</h1>
    </Body>

    <BottomNavBar />

<style>
    h1 {
        font-size: 40px;
        text-align: center;
    }
</style>