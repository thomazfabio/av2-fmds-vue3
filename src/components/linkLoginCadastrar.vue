<template>
    <v-container class="d-flex justify-center align-center" style="width: 100%; height: 100%;">
        <v-row style="max-width: 400px;">
            <v-col>
                <v-card elevation="8">
                    <v-col cols="12">
                        <RouterLink to="/createAccount" class="text-decoration-none">
                            <v-btn block color="primary">Criar Conta</v-btn>
                        </RouterLink>
                    </v-col>
                    <v-col cols="12">
                        <RouterLink to="/login" class="text-decoration-none">
                            <v-btn block color="primary">Login</v-btn>
                        </RouterLink>
                    </v-col>
                    <v-col cols="12">
                        <RouterLink to="/dashboard" class="text-decoration-none">
                            <v-btn block color="primary">dasboard</v-btn>
                        </RouterLink>
                    </v-col>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>