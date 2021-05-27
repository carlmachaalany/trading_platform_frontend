<script>
    import Button from '../components/Button.svelte'
    import Input from '../components/Input.svelte'
    import A from '../components/A.svelte'

    // import {userbaseStore, userStore, promiseStore} from '../stores'

    // let email, password

    //FIREBASE
    // Initialize the FirebaseUI Widget using Firebase.
    // var ui = new firebaseui.auth.AuthUI(firebase.auth());
    // var uiConfig = {
    //     callbacks: {
    //         signInSuccessWithAuthResult: function(authResult, redirectUrl) {
    //         // User successfully signed in.
    //         // Return type determines whether we continue the redirect automatically
    //         // or whether we leave that to developer to handle.
    //         return true;
    //         },
    //         uiShown: function() {
    //         // The widget is rendered.
    //         // Hide the loader.
    //         document.getElementById('loader').style.display = 'none';
    //         }
    //     },
    //     // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
    //     signInFlow: 'popup',
    //     signInSuccessUrl: '/welcome',
    //     signInOptions: [
    //         // Leave the lines as is for the providers you want to offer your users.
    //         firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    //         firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    //         firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    //         firebase.auth.GithubAuthProvider.PROVIDER_ID,
    //         firebase.auth.EmailAuthProvider.PROVIDER_ID,
    //         firebase.auth.PhoneAuthProvider.PROVIDER_ID
    //     ],
    //     // Terms of service url.
    //     tosUrl: '<your-tos-url>',
    //     // Privacy policy url.
    //     privacyPolicyUrl: '/terms'
    // };

    // // The start method will wait until the DOM is loaded.
    // ui.start('#firebaseui-auth-container', uiConfig);

    // import {auth} from '../firestore.js';
    // const signin = () => {
    //     // check whether the username and password are in the collection.
    //     const d = db.collection('users').
    //     console.log(d);
        
        
    // }

    // const signInWithGoogle = () => {
    //     const googleProvider = new firebase.auth.GoogleAuthProvider();
    //     auth.signInWithPopup(googleProvider)
    //     .then(() => {
    //         window.location.assign('./profile');
    //     })
    //     .catch(err => {
    //         console.log(err);
    //     })
    // }

    import {auth} from '../firestore.js';

    let email = '';
    let password = '';
    let isError = false;

    const signUp = (e) => {
        e.preventDefault(); // prevent the page from reloading

        auth.signInWithEmailAndPassword(email, password)
        .then(cred => {
            console.log('sign in successful!');
            email = '';
            password = '';
            // GO TO THE WATCHLIST!
        }).catch(err => {
            isError = true;
            // const renderError = () => `<Error message=${err.message} />`
        })
    }

    // const handleClick = () => {
    //     auth.signOut().then(() => {
    //         console.log('user signed out');
    //     })
    // }

    
    // this triggers when authorization changes in the user (ex: from signedout to signedin)
    // auth.onAuthStateChanged(user => {
    //     console.log('auth state changed');
    //     console.log(user);
    // })  


    // see whether the useris logged in or out

</script>

<img id="apollo-logo" src="assets/images/apollo-logo.jpg" alt="Logo">

<form on:submit|preventDefault={signUp} class="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col w-11/12 md:mt-0">
    <div class="flex justify-between">
        <h2 class="text-gray-900 text-lg font-medium title-font mb-5">Sign In</h2>
        <A href="/">Sign Up</A>
    </div>
    <Input label="Email" bind:value={email} type="email" required />
    <Input label="Password" bind:value={password} type="password" required />
    <Button>Sign in</Button>

    <p class="text-xs text-gray-500 mt-3">
        <A href="/#/forgotpassword">Forgot password?</A>
    </p>
</form>


{#if isError}
    <p class="text-xs text-red-500 mt-3">Email and/or password incorrect.</p>
{/if}



<!-- button to log out  -->
<!-- <button on:click={handleClick}>Logout</button> -->
