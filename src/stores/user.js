import { defineStore } from 'pinia'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getApp } from "firebase/app";



export const useUserStore = defineStore('user', {
    state: () => ({
        email: "",
        accessToken: "",
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
            });

        }
    },
})