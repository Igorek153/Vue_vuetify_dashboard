<template>
    <canvas ref="canvas"></canvas>
</template>

<script>
    import { Line } from "vue-chartjs";
    export default {
        extends: Line,
        name: "TeacherChart",
        data() {
            return {
                gradient2: null,
            };
        },
        mounted() {
            this.gradient2 = this.$refs.canvas
                .getContext("2d")
                .createLinearGradient(0, 0, 0, 450);

            this.gradient2.addColorStop(0.5, "rgba(213,9,9,0.15)");
            this.gradient2.addColorStop(1, "rgba(255, 0, 0, 0)");

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
                            label: "Teacher",
                            borderColor: "#d50909",
                            pointBackgroundColor: "white",
                            borderWidth: 1,
                            pointBorderColor: "#d50909",
                            backgroundColor: this.gradient2,
                            data: [31, 100, 42, 80, 20, 65, 15]
                        }

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