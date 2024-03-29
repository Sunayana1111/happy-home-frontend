/* eslint-disable react/prop-types */
import KhaltiCheckout from "khalti-checkout-web";
import KhaltiLogo from "../../assets/images/khalti1.jpg";

const KhaltiPage = ({ onClickSet, isActive }) => {
  let config = {
    // replace this key with yours
    publicKey: "test_public_key_dc74e0fd57cb46cd93832aee0a390234",
    productIdentity: "1234567890",
    productName: "Drogon",
    productUrl: "http://gameofthrones.com/buy/Dragons",
    eventHandler: {
      onSuccess(payload) {
        // hit merchant api for initiating verfication
        console.log(payload);
      },
      // onError handler is optional
      onError(error) {
        // handle errors
        console.log(error);
      },
      onClose() {
        console.log("widget is closing");
      },
    },
    paymentPreference: [
      "KHALTI",
    ],
  };

  const onClickPaymentButton = () => {
    let checkout = new KhaltiCheckout(config);
    // minimum transaction amount must be 10, i.e 1000 in paisa.
    checkout.show({ amount: 1000 });
    onClickSet();
  };
  return (
    <div
      role="presentation"
      id="payment-button"
      className={`form-check ${isActive && "active"}`}
      onClick={onClickPaymentButton}
    >
      <img src={KhaltiLogo} height="60" />
      <span className="ml-5">Pay with Khalti</span>
    </div>
  );
};

export default KhaltiPage;
