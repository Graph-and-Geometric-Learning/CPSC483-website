<template>
    <v-container>
        <v-row>
            <v-col>
                <v-sheet class="pa-8" elevation="0">
                    <h1>Instructor</h1>
                    <v-row>
                        <v-col>
                            <v-card max-width="256px" class="ma-4">
                                <v-img src="https://cs.stanford.edu/people/rexy/images/photo_Rex.jpg" width="256px"
                                    height="256px" cover>
                                </v-img>
                                <v-card-title>Rex Ying</v-card-title>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-sheet>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-sheet class="pa-8" elevation="0">
                    <h1>Teaching Assistants</h1>
                    <v-row v-for="i in 2" no-gutters>
                        <v-col v-for="j in 3">
                            <v-card max-width="256px" class="ma-4">
                                <v-img src="https://cs.stanford.edu/people/rexy/images/photo_Rex.jpg" width="256px"
                                    height="256px" cover>
                                </v-img>
                                <v-card-title>Rex Ying</v-card-title>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-sheet>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-sheet class="pa-8" elevation="0">
                    <h1>Guest Lecturer</h1>
                <v-row>
                    <v-col>
                        <v-card max-width="256px" class="ma-4">
                            <v-img
                                src="https://files-profile.medicine.yale.edu/images/9163a24e-9d34-48ef-98fa-dc0664163c47"
                                height="256px" width="256px" cover>
                            </v-img>
                            <v-card-title>Smita Krishnaswamy
                            </v-card-title>
                        </v-card>
                    </v-col>
                    <v-col>
                        <v-card max-width="256px" class="ma-4">
                            <v-img src="https://avatars.githubusercontent.com/u/6945922?v=4" width="384px"
                                height="256px" cover>
                            </v-img>
                            <v-card-title>Matthias Fey
                            </v-card-title>
                        </v-card>
                    </v-col>
                </v-row>
                </v-sheet>
            </v-col>
        </v-row>

    </v-container>
</template>