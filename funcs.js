function calculateStats() {
    // Create a random vector with ten values, subtracting 1/2 to center around zero
    let vector = Array.from({length: 10}, () => Math.random() - 0.5);

    // Calculate mean
    let mean = vector.reduce((a, b) => a + b, 0) / vector.length;

    // Calculate standard deviation
    let variance = vector.reduce((a, b) => a + Math.pow(b - mean, 2), 0) / vector.length;
    let stdDev = Math.sqrt(variance);

    // Display results
    document.getElementById('results').innerText = `Mean: ${mean.toFixed(2)}, Standard Deviation: ${stdDev.toFixed(2)}`;

    // Display vector components
    
    const vectorList = document.getElementById('vector-list');
    vectorList.innerHTML = ''; // Clear previous list
    vector.forEach((value, index) => {
        const listItem = document.createElement('li');
        listItem.innerText = `Component ${index + 1}: ${value.toFixed(2)}`;
        vectorList.appendChild(listItem);
    });

    
}