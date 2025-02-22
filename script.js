function selectOption(element, price) {
    // Remove active class from all options
    document.querySelectorAll('.option').forEach(opt => opt.classList.remove('active'));
    // Add active class to the selected option
    element.classList.add('active');
    // Update the button text with the selected price
    document.querySelector('.btn').innerText = `+ Add to Cart ($${price} USD)`;
}