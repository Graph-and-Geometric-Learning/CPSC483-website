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
                        <td>{{item.slide}}</td>
                        <td>{{item.reading}}</td>
                        <td>{{item.event}}</td>
                        <td>{{item.deadline}}</td>
                    </tr>
                </tbody>
            </v-table>
            </v-col>
    </v-row>
</v-container>
</template>

<script>
export default {
    name: "Syllabus",
    data: () => ({
        items: [
            {   
                date: "Wed 08/31",
                lecture: "Background: Machine Learning and Graphs as Data Structure",
            },
            {   
                date: "Fri 09/02",
                lecture: "Plethora of Tasks and Features on Graphs",
            },
            {
                date: "Wed 09/07",
                lecture: "Graph Neural Networks Models",
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
                date: "Mon 09/19",
                lecture: "Graph Attention Networks",
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