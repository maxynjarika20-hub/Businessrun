function calculateFinance() {
    const rev = parseFloat(document.getElementById('revenue').value) || 0;
    const exp = parseFloat(document.getElementById('expenses').value) || 0;
            
    const gross = rev - exp;
    const tax = gross > 0 ? (gross * 0.075) : 0;
    const net = gross - tax;

            // Update UI
    document.getElementById('results').classList.remove('hidden');
    document.getElementById('gross-profit').innerText = '₦' + gross.toLocaleString();
    document.getElementById('tax').innerText = '₦' + tax.toLocaleString();
    document.getElementById('net-profit').innerText = '₦' + net.toLocaleString();

            // Smooth scroll to results on mobile
    if(window.innerWidth < 768) {
        document.getElementById('results').scrollIntoView({ behavior: 'smooth' });
    }
}