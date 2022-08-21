<template>
<v-container>
    <v-row>
        <v-col>
            <v-table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Lecture</th>
                        <th>Events</th>
                        <th>Deadlines</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in items">
                        <td>{{item.date}}</td>
                        <td>{{item.lecture}}</td>
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
    name: "Schedule",
    data: () => ({
        items: [
            {
                lecture: "Background: Machine Learning and Graphs as Data Structure",
            },
            {
                lecture: "Plethora of Tasks and Features on Graphs",
            },
            {
                lecture: "Graph Neural Networks Models",
            },
            {
                lecture: "Graph Neural Networks Designs",
            },
            {
                lecture: "GNN Objectives and Loss Functions",
            },
            {
                lecture: "GNN Implementations, Training and Inference",
            },
            {
                lecture: "Graph Attention Networks",
            },
            {
                lecture: "Scalable GNN Architectures",
            },
            {
                lecture: "Multi-hop GNNs and Multi-hop Attentions",
            },
            {
                lecture: "Theory of Graph Neural Networks",
            },
            {
                lecture: "PyTorch Geometric Library (virtual)",
            },
            {
                lecture: "Graph Generative Models",
            },
            {
                lecture: "Explaining GNN Predictions",
            },
            {
                lecture: "Self-supervised Learning with GNNs",
            },
            {
                lecture: "Spectral GNNs",
            },
            {
                lecture: "Distributed Node Embeddings",
            },
            {
                lecture: "Geometric Embeddings: Order and Box Embeddings",
            },
            {
                lecture: "Hyperbolic Embeddings and Hyperbolic GNNs",
            },
            {
                lecture: "GNN AutoML",
            },
            {
                lecture: "Learning on Dynamic Graphs",
            },
            {
                lecture: "Heterogeneous Graphs for Social Networks and Recommender Systems",
            },
            {
                lecture: "Knowledge Graph Reasoning",
            },
            {
                lecture: "Knowledge Graph Embeddings in Hyperbolic Spaces",
            },
            {
                lecture: "Applications of Graph Learning in Biology and Medicine",
            },
            {
                lecture: "Applications in Graphics and Scientific Simulations",
            },
        ]
    })
}
</script>