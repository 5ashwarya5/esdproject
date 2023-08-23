function calculateCorrelation() {
    const correlationData = {
        AAPL: { AMZN: 0.499003, GOOGL: 0.566667, MSFT: 0.621760, TSLA: 0.374367 },
        AMZN: { GOOGL: 0.625909, MSFT: 0.596186, TSLA: 0.371874 },
        GOOGL: { MSFT: 0.686459, TSLA: 0.358704 },
        MSFT: { TSLA: 0.372335 },
        TSLA: {}
    };

    const stock1 = document.getElementById("stock1").value;
    const stock2 = document.getElementById("stock2").value;

    const correlation = correlationData[stock1]?.[stock2] || correlationData[stock2]?.[stock1];

    if (correlation !== undefined) {
        document.getElementById("result").textContent = `Correlation between ${stock1} and ${stock2}: ${correlation.toFixed(4)}`;
    } else {
        document.getElementById("result").textContent = "Correlation data not available.";
    }
}

