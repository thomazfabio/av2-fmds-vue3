import { defineStore } from 'pinia'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import router from '@/router'



export const useUserStore = defineStore('user', {
    state: () => ({
        email: "",
        accessToken: null,
    }),

    getters: {
        //
    },
    actions: {
        async register(user) {
            // Register the user
            const auth = getAuth();
            createUserWithEmailAndPassword(auth, user.email, user.password).then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log(user);
                console.log("User registered");
                router.push("/login");
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
            signInWithEmailAndPassword(auth, user.email, user.password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    // ...
                    this.accessToken = user.accessToken;
                    console.log(this.accessToken);
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode);
                });
        },
    },
})