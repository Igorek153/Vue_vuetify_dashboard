<template>
    <canvas ref="canvas"></canvas>
</template>

<script>
    import { Line } from "vue-chartjs";
    export default {
        extends: Line,
        name: "AllChart",
        data() {
            return {
                gradient: null,
                gradient2: null,
                gradient3: null
            };
        },
        mounted() {
            this.gradient = this.$refs.canvas
                .getContext("2d")
                .createLinearGradient(0, 0, 0, 450);

            this.gradient2 = this.$refs.canvas
                .getContext("2d")
                .createLinearGradient(0, 0, 0, 450);

            this.gradient3 = this.$refs.canvas
                .getContext("2d")
                .createLinearGradient(0, 0, 0, 450);


            this.gradient.addColorStop(0.5, "rgba(255,230,0,0.15)");
            this.gradient.addColorStop(1, "rgba(255, 0, 0, 0)");

            this.gradient2.addColorStop(0.5, "rgba(255,0,0,0.15)");
            this.gradient2.addColorStop(1, "rgba(255, 0, 0, 0)");

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
                            label: "Student",
                            borderColor: "#d5c109",
                            pointBackgroundColor: "white",
                            borderWidth: 1,
                            pointBorderColor: "#d5c109",
                            backgroundColor: this.gradient,
                            data: [40, 39, 10, 40, 100, 80, 40]
                        },
                        {
                            label: "Teacher",
                            borderColor: "#d50909",
                            pointBackgroundColor: "white",
                            borderWidth: 1,
                            pointBorderColor: "#d50909",
                            backgroundColor: this.gradient2,
                            data: [31, 100, 42, 80, 20, 65, 15]
                        }
                        ,
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
                { responsive: true}
            );
        }
    };
</script>

<style scoped>

</style>