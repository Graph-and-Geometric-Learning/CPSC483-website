<template>
<v-container>
    <v-row>
        <v-col>
            <v-table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Lecture</th>
                        <th>Slides</th>
                        <th>Readings</th>
                        <th>Events</th>
                        <th>Deadlines</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in items">
                        <td>{{item.date}}</td>
                        <td>{{item.lecture}}</td>
                        <td><a v-if="item.slide" :href="item.slide">[Slides]</a></td>
                        <td><a v-if="item.reading" :href="item.reading">[Readings]</a></td>
                        <td><a v-if="item.event" :href="item.event">[HW Released]</a></td>
                        <td>{{item.deadline}}</td>
                        <td><a v-if="item.hw" :href="item.hw">[HW DUE]</a></td>
                    </tr>
                </tbody>
            </v-table>
            </v-col>
    </v-row>
</v-container>
</template>

<script>
import Slide1 from "../slides/01-intro.pdf"
import Slide2 from "../slides/02-tasks.pdf"
import Slide3 from "../slides/03-GNN.pdf"

import reading2 from "../readings/02_Readings.pdf"
import reading3 from "../readings/lec3_readings.pdf"

import hw1_written from "../hw/Yale_CPSC483_hw1_updated_2.pdf"

export default {
    name: "Syllabus",
    data: () => ({
        items: [
            {   
                date: "Wed 08/31",
                lecture: "Background: Machine Learning and Graphs as Data Structure",
                slide: Slide1,
            },
            {   
                date: "Fri 09/02",
                lecture: "Plethora of Tasks and Features on Graphs",
                slide: Slide2,
                event: hw1_written,
                reading: reading2,

            },
            {
                date: "Wed 09/07",
                lecture: "Graph Neural Networks Models",
                slide: Slide3,
                reading: reading3
            },
            {
                date: "Mon 09/12",
                lecture: "Graph Neural Networks Designs",
            },
            {
                date: "Wed 09/14",
                lecture: "GNN Implementations, Objectives and Loss Functions",
            },
            {
                date: "Fri 09/16",
                deadline: "[Due]: HW1 - Written",
                hw: hw1_written,
            },
            {
                date: "Mon 09/19",
                lecture: "Graph Attention Networks",
            },
            {
                date: "Tues 09/20",
                deadline: "[Due]: HW1 - Colab",
            },
            {
                date: "Mon 09/26",
                lecture: "Scalable GNN Architectures",
            },
            {
                date: "Wed 09/28",
                lecture: "Multi-hop GNNs and Multi-hop Attentions",
            },
            {
                date: "Mon 10/03",
                lecture: "Theory of Graph Neural Networks",
            },
            {
                date: "Wed 10/05",
                lecture: "GNN Expressive Power",
            },
            {
                date: "Mon 10/10",
                lecture: "PyTorch Geometric Library (virtual)",
            },
            {
                date: "Wed 10/12",
                lecture: "Graph Generative Models",
            },
            {
                date: "Mon 10/17",
                lecture: "Spectral GNNs",
            },
            {
                date: "Mon 10/24",
                lecture: "Self-supervised Learning with GNNs",
            },
            {
                date: "Wed 10/26",
                lecture: "Explaining GNN Predictions",
            },
            {
                date: "Mon 10/31",
                lecture: "Distributed Node Embeddings",
            },
            {
                date: "Wed 11/02",
                lecture: "Geometric Embeddings: Order and Box Embeddings",
            },
            {
                date: "Mon 11/07",
                lecture: "Hyperbolic Embeddings and Hyperbolic GNNs",
            },
            {
                date: "Wed 11/09",
                lecture: "GNN AutoML",
            },
            {
                date: "Mon 11/14",
                lecture: "Learning on Dynamic Graphs",
            },
            {
                date: "Wed 11/16",
                lecture: "Heterogeneous Graphs for Social Networks and Recommender Systems",
            },
            {
                date: "Mon 11/28",
                lecture: "Knowledge Graph Reasoning",
            },
            {
                date: "Wed 11/30",
                lecture: "Knowledge Graph Embeddings in Hyperbolic Spaces",
            },
            {
                date: "Mon 12/05",
                lecture: "Applications of Graph Learning in Biology and Medicine",
            },
            {
                date: "Wed 12/07",
                lecture: "Applications in Graphics and Scientific Simulations",
            },
        ]
    })
}
</script>