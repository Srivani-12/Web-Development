const dropArea = document.getElementById('clickable'); // Ensure this matches your HTML ID
const fileInput = document.getElementById('file-input');
const exportBtn = document.getElementById('btn');
const table = document.getElementById('table');


document.querySelector('.clickable').addEventListener('click', () => {
    fileInput.click();
});

["dragenter", "dragover", "dragleave", "drop"].forEach(event => {
    dropArea.addEventListener(event, e => e.preventDefault());
});


dropArea.addEventListener('dragover', () => dropArea.classList.add('dragover'));
dropArea.addEventListener('dragleave', () => dropArea.classList.remove('dragover'));

dropArea.addEventListener('drop', (e) => {
    dropArea.classList.remove('dragover');
    const files = e.dataTransfer.files;
    handleFiles(files);
});

fileInput.addEventListener('change', () => handleFiles(fileInput.files));


function handleFiles(files) {
    const file = files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
        const content = e.target.result; 
        const rows = content.split('\n').map(row => row.split(','));

      
        table.innerHTML = '';
        rows.forEach(row => {
            const tr = document.createElement('tr');
            row.forEach(cell => {
                const td = document.createElement('td');
                td.textContent = cell.trim(); // Trim to remove extra spaces
                tr.appendChild(td);
            });
            table.appendChild(tr);
        });

        fileInput.style.display = 'none';
        exportBtn.style.display = 'block';
    };

    reader.readAsText(file);
}


exportBtn.addEventListener('click', () => {
    const rows = document.querySelectorAll('#table tr');
    let csvContent = '';
    rows.forEach(row => {
        const cols = row.querySelectorAll('td');
        const rowContent = Array.from(cols)
            .map(col => col.textContent)
            .join(',');
        csvContent += rowContent + '\n';
    });

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'exported_data.csv';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
});
