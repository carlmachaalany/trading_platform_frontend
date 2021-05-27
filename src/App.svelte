<script>
	import Tailwindcss from './Tailwindcss.svelte';
    import Router from 'svelte-spa-router'
    import SignUp from './routes/SignUp.svelte'
    import SignIn from './routes/SignIn.svelte'
    import ForgotPassword from './routes/ForgotPassword.svelte'
    // import Home from './routes/Home.svelte';
    import WatchList from './routes/WatchList.svelte';
    import Trade from './routes/Trade.svelte';
    import DashBoard from './routes/DashBoard.svelte';
    import {db, auth} from './firestore.js';

    auth.onAuthStateChanged(user => {
        // if the user is logged in
        if (user) {
            // // get data
            // db.collection('guides').get().then(snapshot => {
            //     setupGuides(snapshot.docs);
            //     setupUI(user); // show logged in links
            // });
            console.log('user logged in');
        } else { // if the user is logged out
            // setupUI(); // show logged out in links
            // setupGuides([]);
            console.log('user logged out');
        }
    });
</script>

<Tailwindcss />

<div class="container flex flex-col justify-center items-center w-screen h-screen mx-auto">
    <Router routes={{
        '/': WatchList,
        '/trade': Trade,
        '/dashboard': DashBoard,
        // '/': SignUp,
        '/signin': SignIn,
        '/forgotpassword': ForgotPassword
    }} />
</div>

<style>
    .container {
        max-width: 100%;
        overflow-x: hidden;
    }
</style>


