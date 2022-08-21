<template>
    <v-container>
        <v-row>
            <v-col>
                <v-sheet class="pa-4" elevation="6">
                    <h1>Welcom to CPSC 483!</h1>
                    <ul>
                        <li>Lectures are on Monday/Wednesday 11:35AM - 12:50PM EDT in <a
                                href="https://map.yale.edu/place/building/AKW?">AKW 100 - Arthur K. Watson Hall 100
                            </a>.</li>
                        <ul>
                            <li>Most of the lecture will be in-person</li>
                            <li>There will be 2-3 guest lectures, some of which might be held remotely, including GNN
                                library applications of graph learning.</li>
                        </ul>
                        <li>
                            Lecture Video are available on <a href="https://canvas.yale.edu/">Canvas</a> for all the
                            enrolled Yale students.
                        </li>
                        <li>This is a new course, and feedbacks are especially welcomed!
                            <ul>
                                <li>Many of the content comes from relatively recent research (>2017)</li>
                                <li>Lecture style, homework, projects, ...</li>
                            </ul>
                        </li>
                        <li>Slides will be posted here before classes.</li>

                    </ul>
                </v-sheet>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-sheet class="pa-4" elevation="6">
                    <h1>Readings</h1>
                    <p><a href="https://www.cs.mcgill.ca/~wlh/grl_book/">Graph Representation Learning Book</a> by Will
                        Hamilton</p>
                    <p>Research papers</p>
                    <h2>Optional Readings</h2>
                    <ul>
                        <li>TODO</li>
                        These will be very useful for course projects.
                    </ul>
                    <h2>
                        PyTorch Geometric Readings

                    </h2>
                    <ul>
                        <li>Python <a href="https://pytorch-geometric.readthedocs.io/en/latest/">Documentation</a>
                        </li>
                        <li><a href="https://github.com/pyg-team/pytorch_geometric">GitHub</a> Repository (for the
                            latest development)</li>
                    </ul>
                </v-sheet>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-sheet class="pa-4" elevation="6">
                    <h1>Communication</h1>
                    <h2>Piazza Q&A website</h2>
                    <ul>
                        <li>TODO</li>
                        <li>Please participate and help each other</li>
                    </ul>
                    <h2>Mailing List</h2>
                    TODO

                    <p>We will post course annoucements to this website. Make sure you check it regularly. </p>
                    <p>Also refer to TODO office hour</p>
                </v-sheet>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-sheet class="pa-4" elevation="6">
                    <h1>Teaching Staff</h1>
                    <h2>Instructor</h2>
                    <v-row>
                        <v-col>
                            <v-card max-width="384px" class="ma-4">
                                <v-img src="https://cs.stanford.edu/people/rexy/images/photo_Rex.jpg" width="384px"
                                    cover>
                                </v-img>
                                <v-card-title>Rex Ying</v-card-title>
                            </v-card>
                        </v-col>
                    </v-row>
                    <v-divider></v-divider>
                    <h2>Teaching Assistants</h2>
                    <v-row v-for="i in 2">
                        <v-col v-for="j in 3">
                            <v-card max-width="256px" class="ma-4">
                                <v-img src="https://cs.stanford.edu/people/rexy/images/photo_Rex.jpg" width="256px"
                                    cover>
                                </v-img>
                                <v-card-title>Rex Ying</v-card-title>
                            </v-card>
                        </v-col>
                    </v-row>
                    <h2>Guest Lecturer</h2>
                    <v-row>
                        <v-col>
                            <v-card max-width="384px" class="ma-4">
                                <v-img
                                    src="https://files-profile.medicine.yale.edu/images/9163a24e-9d34-48ef-98fa-dc0664163c47"
                                    height="256px" width="384px" cover>
                                </v-img>
                                <v-card-title>Smita Krishnaswamy
                                </v-card-title>
                            </v-card>
                        </v-col>
                        <v-col>
                            <v-card max-width="384px" class="ma-4">
                                <v-img src="https://avatars.githubusercontent.com/u/6945922?v=4" width="384px" height="256px" cover>
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

<script>
import Todo from '../components/Todo.vue';
</script>