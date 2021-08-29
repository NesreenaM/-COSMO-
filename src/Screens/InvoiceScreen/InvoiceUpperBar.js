import "./style.css";
import Menu from "../../Components/Menu/Menu";
import TopInvoiceMenu from "../../Components/Menu/TopInvoiceMenu";

export default function InvoiceUpperBar(props) {
  return (
    <div className="upper-bar-container just-content">
      <div className="upper-bar-box ">
        <span style={{ paddingRight: "20px", paddingTop:"10px" }}> 1251</span>
        <div>
          <span>Website</span>
          <span style={{ fontSize: "13px" }}>Sale-Twin Food Stores</span>
        </div>
      </div>

      <div
        className="Globle-Flex-Row just-content"
        style={{ width: "60%", paddingTop: "15px" }}
      >
        <span className="upper-span">
          <p className="upper-p">status</p>
          <p>New</p>
        </span>
        <span className="upper-span">
          <p className="upper-p">Owner</p>
          <p>Hamza</p>
        </span>
        <span className="upper-span">
          <p className="upper-p">Customer</p>
          <p>Twin Food Stores</p>
        </span>
        <span className="upper-span">
          <p className="upper-p">P.O.#</p>
          <p>54762</p>
        </span>

        <TopInvoiceMenu
          name={"Menu"}
          background={"#E5E5E5"}
          style={{
            borderRadius: "2px",
            width: "89px",
            height: "29px",
            fontSize: "16px",
            marginRight: "32px",
          }}
          itemone={"Create Credit Note"}
          itemtwo={"View All Components"}
          itemthree={"Change Customer"}
          itemfour={"Duplicate Sale"}
          itemfive={"Delete Sale"}
        />

        <div className="detlete-icon">X</div>
      </div>
    </div>
  );
}
