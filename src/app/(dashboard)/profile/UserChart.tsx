

"use client";
import { useEffect, useState } from "react";
import Chart from 'chart.js/auto';


const UserChart = () => {

    useEffect(() => {
        const ctx = document.getElementById('myChart') as HTMLCanvasElement;
        if (!ctx) return;

        const myChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ["Technical Skill", "Punctuality", "Project Completions"],
                datasets: [{
                    data: [70, 10, 6],
                    borderColor: [
                        "#3cba9f",
                        "#ffa500",
                        "#c45850",
                    ],
                    backgroundColor: [
                        "rgb(60,186,159,0.1)",
                        "rgb(255,165,0,0.1)",
                        "rgb(196,88,80,0.1)",
                    ],
                    borderWidth: 2,
                }]
            },
            options: {
                scales: {
                    x: {
                        display: false,
                    },
                    y: {
                        display: false,
                    },
                }
            },
        });

        return () => {
            myChart.destroy();
        };
    }, []);

    return (
        <canvas id="myChart"></canvas>
    );
};

export default UserChart;
