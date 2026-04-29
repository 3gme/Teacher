import { useNavigate } from "react-router-dom";

function PaymentPage() {
  const navigation = useNavigate();
  return (
    <div>
      payment page
      <button onClick={() => navigation(-1, { preventScrollReset: true })}>
        Back
      </button>
    </div>
  );
}

export default PaymentPage;
