import SubNavBar from "../../Components/SubNavBar/SubNavBar";
import InvoiceUpperBar from "./InvoiceUpperBar";
import TopInvoiveBar from "./TopInvoiveBar";
import Billing from "./Billing";
import DateDetails from "./DateDetails";
import InvoiceList from "./InvoiceList";
import AddComment from "./AddComment";
import InvoiceNotes from "./InvoiceNotes";
import OtherExp from "./OtherExp";
import SwitchBar from "./SwitchBar";
import ButtonsBar from "./ButtonsBar";
import "./style.css";

export default function InvoiceScreen() {
  return (
    <div className="invoice-screen">
      <SubNavBar />
      <InvoiceUpperBar />
      <div className="invoice-bg">
        <SwitchBar className="switch-controll" />
      </div>

      <div style={{ maxHeight: "64vh", overflowY: "scroll" }}>
        <TopInvoiveBar style={{ padding: "0 32px" }} />

        <div className="Globle-Flex-Row just-content Bill-container">
          <Billing />
          <DateDetails />
        </div>
        <InvoiceList />

        <div className="Globle-Flex-Row  just-content comment-section">
          <AddComment style={{width:"50%"}} />

          <InvoiceNotes style={{width:"24%"}} />

          <OtherExp style={{width:"30%"}} />
        </div>
        <ButtonsBar />
      </div>
    </div>
  );
}
