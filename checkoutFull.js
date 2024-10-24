function checkoutFull() {
          
  const yuno = Yuno.initialize("sandbox_gAAAAABmaGCZVfUZxTWtADsJzCAxbL4Z0EW6s9qdIkSMCYAwE0xZzbFObZTFa9nSS3bJmKZYHvbCP72ERpEM4rj6pa1BKI-daDHHHS1wSVbltMJof9yNgFUeB4ZJacGK_j5KC49rpreonirM5YBEm6daxiZf9SPANmYD3cOdYlVwDJi6qmFXDu3iGHYECqeApLIHmd11K2pzVjjl7x3TBCEjF4d_2P2kagM12MYGrbbeEhweKFUABnENy5FCrCqkF65WmZY7xELh");
  var checkoutSession = document.getElementById('checkoutId').value;  //Asignar el checkout session ID a la variable del sdk full
  console.log("Checkout session: ",checkoutSession)
            
  yuno.startCheckout({
    checkoutSession: checkoutSession,
    elementSelector: '#root',
    countryCode: "CO",
    language: 'es',
    showLoading: true,
    issuersFormEnable: true,
    showPaymentStatus: true,
    onLoading: (args) => {
      console.log(args);
    },
    async yunoCreatePayment(token) {
      console.log("One time token: ",token) 
      document.getElementById("tokenGenerated").value = token; //Asignar el token al ID del html para mostrarlo en el frontend
      await createPayment({ token, checkoutSession })
      yuno.continuePayment({ showPaymentStatus: true })
    }
  })

  yuno.mountCheckout()

  const PayButton = document.querySelector('#button-send')
  PayButton.addEventListener('click', () => {
    yuno.startPayment()
  })

}
 
