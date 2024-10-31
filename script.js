document.addEventListener("DOMContentLoaded", () => {
    const sparkles = document.querySelectorAll(".spark");

    sparkles.forEach(spark => {
        // Random positions within the card
        spark.style.top = Math.random() * 100 + "%";
        spark.style.left = Math.random() * 100 + "%";

        // Random size and duration for more variety
        const size = 5 + Math.random() * 10 + "px";
        spark.style.width = size;
        spark.style.height = size;
        spark.style.animationDuration = 2 + Math.random() * 2 + "s";
        spark.style.animationDelay = Math.random() * 3 + "s";
    });
});
