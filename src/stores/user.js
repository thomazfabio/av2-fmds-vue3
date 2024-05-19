import { defineStore } from 'pinia'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import router from '@/router'

export const useUserStore = defineStore('user', {
    state: () => ({
        name: "Fabio",
        email: "",
        userId: null,
        accessToken: null,
    }),

    getters: {
        isLogged: (state) => !!state.accessToken,

        getUserProfile: (state) => {
            return {
                name: state.name,
                email: state.email,
                accessToken: state.accessToken,
                userId: state.userId,
            };
        }
    },
    actions: {

        async loginpersist(user) {
            const auth = getAuth();
            console.log(user);
            if (user) {
                this.accessToken = user.accessToken;
                this.email = user.email;
                this.name = user.displayName;
                this.userId = user.uid;
            }
        },
        register(user) {
            // Register the user
            const auth = getAuth();
            createUserWithEmailAndPassword(auth, user.email, user.password).then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                this.accessToken = user.accessToken;
                this.email = user.email;
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
         login(user) {
            // Login the user
            const auth = getAuth();
            const userCredential = signInWithEmailAndPassword(auth, user.email, user.password).then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                this.accessToken = user.accessToken;
                this.email = user.email;
                this.name = user.displayName;
                this.userId = user.uid;
            }).then(() => {
                router.push('/dashboard');
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode);
                console.log(errorMessage);
            });
        },
    },
})