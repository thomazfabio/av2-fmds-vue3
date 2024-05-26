import { defineStore } from 'pinia'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, onAuthStateChanged } from "firebase/auth";
import router from '@/router'
import { ref } from 'vue';


export const useUserStore = defineStore('user', {
    state: () => ({
        user: null,
        userAlert: { status: false, message: '' },
    }),

    getters: {
        getIsLogged: (state) => {
            return !!state.user;
        },

        getUserProfile: (state) => {
            return {
                name: state.user.displayName,
                email: state.user.email,
                photo: state.user.photoURL,
                id: state.user.uid,
                accessToken: state.user.accessToken
            }
        },
        getUserAlert: (state) => {
            return state.userAlert;
        },
    },
    actions: {
        checkAuth() {
            return new Promise((resolve, reject) => {
                const auth = getAuth();
                onAuthStateChanged(auth, async (user) => {
                    if (user) {
                        this.user = await user;
                        resolve(true)
                    } else {
                        resolve(false)
                    }
                });
            })
        },

        register(user) {
            // Register the user
            const auth = getAuth();
            createUserWithEmailAndPassword(auth, user.email, user.password).then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                this.user = user;
            }).then(() => {
                updateProfile(auth.currentUser, {
                    displayName: user.name,
                }).then(() => {
                    // Profile updated!
                    router.push('/login');
                }).catch((error) => {
                    console.log(error);
                });
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode);
                console.log(errorMessage);
            });
        },
        async login(user) {
            // Login the user
            const auth = getAuth();
            await signInWithEmailAndPassword(auth, user.email, user.password).then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                this.user = user;
            }).then(() => {
                router.push('/dashboard');
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                this.userAlert = { status: true, message: errorMessage }
                console.log(errorCode);
                console.log(errorMessage);
            });
        },
        async logoutFirebase() {
            // Logout the user
            const auth = getAuth();
            await auth.signOut();
            this.user = null;
            router.push('/login');
        },
        async clearAlert() {
            this.userAlert = { status: false, message: '' };
        }
    },
})