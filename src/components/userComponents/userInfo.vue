<template>
    <v-card>
        <v-card-title></v-card-title>
        <v-card-text>
            <v-row>
                <v-col cols="12" sm="6" md="4">
                    <v-avatar>
                        <img src="https://vuetifyjs.com/static/doc-images/lists/john.jpg" alt="John">
                    </v-avatar>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                    <v-text-field label="Sobrenome" v-model="lastName"></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                    <v-text-field label="Email" v-model="email"></v-text-field>
                </v-col>
            </v-row>
        </v-card-text>
        <v-card-actions>
            <v-btn color="primary">Salvar</v-btn>
            <v-spacer></v-spacer>
            <v-btn color="error">Cancelar</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script setup>

</script>