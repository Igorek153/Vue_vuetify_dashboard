<template>
    <canvas ref="canvas"></canvas>
</template>

<script>
    import { Line } from "vue-chartjs";
    export default {
        extends: Line,
        name: "StudentChart",
        data() {
            return {
                gradient: null,

            };
        },

        mounted() {
            this.gradient = this.$refs.canvas
                .getContext("2d")
                .createLinearGradient(0, 0, 0, 450);

            this.gradient.addColorStop(0.5, "rgba(255,230,0,0.15)");
            this.gradient.addColorStop(1, "rgba(255, 0, 0, 0)");


            this.renderChart(
                {
                    labels: [
                        "January",
                        "February",
                        "March",
                        "April",
                        "May",
                        "June",
                        "July"
                    ],
                    datasets: [
                        {
                            label: "Student",
                            borderColor: "#d5c109",
                            pointBackgroundColor: "white",
                            borderWidth: 1,
                            pointBorderColor: "#d5c109",
                            backgroundColor: this.gradient,
                            data: [40, 39, 10, 40, 100, 80, 40]
                        },

                    ]
                },

                { responsive: true,
                    legend: {
                        display: false
                    }
                },

            );
        }
    };
</script>

<style scoped>

</style>