document.getElementById('downloadSignature').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = 'Resume.pdf'; // Make sure this path is correct
    link.download = 'Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
