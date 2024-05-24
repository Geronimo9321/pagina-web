document.addEventListener('DOMContentLoaded', () => {
    const cheesecakeSelect = document.getElementById('cheesecake');
    const priceInput = document.getElementById('price');
    const paymentSelect = document.getElementById('payment');
    const walletDetails = document.getElementById('walletDetails');
    const purchaseForm = document.getElementById('purchaseForm');
    const confirmationMessage = document.getElementById('confirmationMessage');

    const cheesecakePrices = {
      
      'Cheesecake de Fresa': '$22.00',
      'Cheesecake de Chocolate': '$24.00',
      'Cheesecake de Limón': '$21.00'
    };

    cheesecakeSelect.addEventListener('change', () => {
      const selectedCheesecake = cheesecakeSelect.value;
      if (cheesecakePrices[selectedCheesecake]) {
        priceInput.value = cheesecakePrices[selectedCheesecake];
      } else {
        priceInput.value = '';
      }
    });

    paymentSelect.addEventListener('change', () => {
      const selectedPayment = paymentSelect.value;
      if (selectedPayment === 'Billetera Virtual') {
        walletDetails.style.display = 'block';
      } else {
        walletDetails.style.display = 'none';
      }
    });

    purchaseForm.addEventListener('submit', (event) => {
      event.preventDefault();
      confirmationMessage.style.display = 'block';
      confirmationMessage.textContent = '¡Pedido realizado con éxito!';
      purchaseForm.reset();
      priceInput.value = '';
      walletDetails.style.display = 'none';
    });
  });