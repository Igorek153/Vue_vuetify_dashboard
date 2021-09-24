<template>
    <canvas ref="canvas"></canvas>
</template>

<script>
    import { Line } from "vue-chartjs";
    export default {
        extends: Line,
        name: "StaffChart",
        data() {
            return {

                gradient3: null
            };
        },
        mounted() {
            this.gradient3 = this.$refs.canvas
                .getContext("2d")
                .createLinearGradient(0, 0, 0, 450);

            this.gradient3.addColorStop(0.5, "rgba(9,118,213,0.15)");
            this.gradient3.addColorStop(1, "rgba(255, 0, 0, 0)");

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
                            label: "Staff",
                            borderColor: "#0976d5",
                            pointBackgroundColor: "white",
                            borderWidth: 1,
                            pointBorderColor: "#0976d5",
                            backgroundColor: this.gradient3,
                            data: [15, 15, 50, 80, 89, 53, 100]
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