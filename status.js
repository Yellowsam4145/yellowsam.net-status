fetch('status.json')
    .then(response => response.json())
    .then(data => {
        const statusEl = document.getElementById('status');
        statusEl.textContent = data.status === 'online' ? '✓ Online' : '✗ Offline';
        statusEl.className = 'status ' + (data.status === 'online' ? 'online' : 'offline');
        document.getElementById('lastChecked').textContent = data.lastChecked;
    });
