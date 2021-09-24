<template>
    <canvas ref="canvas" height="250"></canvas>
</template>

<script>
    import { Bar } from "vue-chartjs";
    export default {
        extends: Bar,
        name: "BarChart",
        mounted() {
            this.renderChart(
                {
                    labels: [
                        "January",
                        "October",
                        "November",
                        "December"
                    ],
                    datasets: [
                        {
                            label: "Tasks Done",
                            backgroundColor: "green",
                            data: [40, 20, 12, 31],
                        }
                    ]
                },
                { responsive: true,
                    legend: {
                        display: false
                    }}
            );
        }
    }
</script>

<style scoped>

</style>