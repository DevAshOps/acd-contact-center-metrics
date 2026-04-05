const express = require('express');
const app = express();
app.use(express.json());

app.get('/metrics', (req, res) => {
  res.json({
    timestamp: new Date().toISOString(),
    calls_per_hour: Math.floor(Math.random() * 200) + 100,
    agent_uptime: (0.95 + Math.random() * 0.05).toFixed(3),
    sla_compliance: (0.92 + Math.random() * 0.08).toFixed(3),
    cpu_usage: Math.floor(40 + Math.random() * 50)
  });
});

app.listen(3000, () => {
  console.log('ACD Contact Center Metrics running on port 3000');
});
