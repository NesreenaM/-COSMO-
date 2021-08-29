import "./style.css";
import DragIndicatorIcon from "@material-ui/icons/DragIndicator";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SettingsIcon from "@material-ui/icons/Settings";
import UnitInvoiceList from "../../Components/Menu/UnitInvoiceList";
import Modal from "../../Components/Modal/Modal";
import ListInvoiceMenu from "../../Components/Menu/ListInvoiceMenu";

export default function InvoiceList(props) {
  return (
    <div className="invoice-list-contenair">
      <div className="Globle-Flex-Row just-content">
        <span style={{ paddingBottom: "10px" }}>List</span>
        <span>
          {" "}
          <Modal top={"50"} />{" "}
        </span>
      </div>
      <div style={{ width: "100%" }}>
        <table style={{ width: "100%" }}>
          <tr style={{ background: "#fcfcfc" }}>
            <td>&nbsp;</td>
            <td>Sr</td>
            <td>Item</td>
            <td>Description</td>
            <td>Qty</td>
            <td style={{ paddingLeft: "24px" }}>UOM</td>
            <td>Rate</td>
            <td>Discount</td>
            <td>Total Dic</td>
            <td>Tax</td>
            <td>Total Tax</td>
            <td>Amount</td>
            <td>&nbsp;</td>
          </tr>

          <tr>
            <td>
              <DragIndicatorIcon />{" "}
            </td>
            <td>1</td>
            <td>Complete degin for website</td>
            <td>Web Application</td>
            <td>1</td>
            <td style={{ paddingLeft: "24px" }}>Unit</td>
            <td>450</td>
            <td>5%</td>
            <td>N/A</td>
            <td>0</td>
            <td>0</td>
            <td>500</td>
            <td>
              <ListInvoiceMenu
                name={<MoreHorizIcon />}
                itemone={"Duplicate Item"}
                itemtwo={"Delete Item"}
              />
            </td>
          </tr>
          <tr>
            <td>
              <DragIndicatorIcon />
            </td>
            <td>2</td>
            <td>Complete degin for website</td>
            <td>Web Application</td>
            <td>2</td>
            <td style={{ paddingLeft: "24px" }}>Unit</td>
            <td>450</td>
            <td>5%</td>

            <td>N/A</td>
            <td>0</td>
            <td>0</td>
            <td>500</td>
            <td>
              <ListInvoiceMenu name={<MoreHorizIcon />} />
            </td>
          </tr>
          <tr>
            <td>
              <DragIndicatorIcon />{" "}
            </td>

            <td>3</td>
            <td>Web Application</td>
            <td>Complete degin for website</td>
            <td>3</td>
            <td className="unit-span">
              <UnitInvoiceList name={"unit"} itemone={"Hrs"}  itemtwo={"Unit"} itemthree={"+ Add New UOM"} />
            </td>
            <td>450</td>
            <td>5%</td>
            <td>N/A</td>
            <td>0</td>
            <td>0</td>
            <td>500</td>
            <td>
              <ListInvoiceMenu name={<MoreHorizIcon />} />
            </td>
          </tr>
        </table>
      </div>
      <div className="list-links">
        <div className="links">
          <span>
            <a>Add Item</a>
          </span>
          <span style={{ marginLeft: "23px" }}>Clear List</span>
          <span style={{ marginLeft: "23px" }}>Clear Details</span>
        </div>
        <div>
          {" "}
          
          <span className="Globle-Flex-Row " style={{marginRight:"30px"}}>
          <span style={{marginRight:"80px ", fontWeight:"600"}}>Subtotal</span>
            <p>1060 </p>
            <p style={{ marginTop: "-8px", fontSize: "10px" }}>USD</p>
          </span>
        </div>
      </div>
    </div>
  );
}
