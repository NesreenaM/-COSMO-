import "./style.css";

export default function Billing() {
  return (
    <div className="billing-section">
      <div className="Billing-head">
        <p>Billing</p>
        <p>Addtional</p>
      </div>

      <div className="billing-box">
        <div className="globle-flexColumn">
          <div className="globle-flexRow-billing">
            <div className="globle-flexColumn">
              <p>Currency</p>
              <p>USD United States Dollar </p>
            </div>

            <div className="globle-flexColumn">
              <p>Account</p>
              <input type="text" id="name" placeholder="Meezan Bank DHA Branch - 1296 2586 7890 83" />
            </div>

            <div className="globle-flexColumn">
              <p>Payment Terms</p>
              <input type="text" id="name" placeholder="LC 30 Days" />
            </div>
          </div>

          <div className="globle-flexRow-billing">
            <div className="globle-flexColumn just-content">
              <p>Currency</p>
              <input type="text" id="name" placeholder="By Courier" />
            </div>

            <div className="globle-flexColumn">
              <p>Account</p>
              <input type="text" id="name" placeholder="DAP - Delivered at Place" />
            </div>

            <div className="globle-flexColumn">
              <p>Payment Terms</p>
              <input type="text" id="name" placeholder="DHA Branch" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
