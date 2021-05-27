<script>
    // TEMPLATE
    import Button from '../components/Button.svelte'
    import Input from '../components/Input.svelte'
    import A from '../components/A.svelte'

    // ME
    import {auth} from '../firestore.js';

    // let username = '';
    let email = '';
    let password = '';
    
    // sign up 
    const addUser = (e) => {

        // prevent the page from reloading
        e.preventDefault();

        // sign up the user 
        auth.createUserWithEmailAndPassword(email, password)
        .then(cred => {
            console.log('sign up successful');
            email = '';
            password = '';
            // GO TO SIGNIN ('/') PAGE!
        })
    };

</script>

<!-- <div class="wrapper"> -->

    <!-- ADD THE APOLLO ICON  -->
    <img id="apollo-logo" src="assets/images/apollo-logo.jpg" alt="Logo">

    <form id="signup-form" on:submit|preventDefault={addUser} class="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col w-11/12 md:mt-4">
        <div class="flex justify-between">
            <h2 class="text-gray-900 text-lg font-medium title-font mb-5">Sign Up</h2>
            <A href="/#/signin">Sign In</A>
        </div>
        <Input label="Email" bind:value={email} type="email"/>
        <Input label="Password" bind:value={password} type="password"/>
        <Button>Sign up!</Button>
        <!-- <p class="text-xs text-gray-500 mt-3">Any little  message.</p> -->
    </form>

<!-- </div> -->
