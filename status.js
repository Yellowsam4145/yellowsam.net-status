fetch('status.json?t=' + Date.now())
    .then(response => {
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log('Status data:', data);
        const statusEl = document.getElementById('status');
        const isOnline = data.status === 'online';
        statusEl.textContent = isOnline ? ':D Online!' : 'Offline ):';
        statusEl.className = 'status ' + (isOnline ? 'online' : 'offline');
        document.getElementById('lastChecked').textContent = data.lastChecked;
    })
    .catch(error => {
        console.error('Error fetching status:', error);
        document.getElementById('status').textContent = 'Unknown (Offline?)';
        document.getElementById('status').className = 'status';
    });
