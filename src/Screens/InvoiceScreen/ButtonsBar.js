import InvoiceButton from "../../Components/Menu/InvoiceButton";

export default function ButtonsBar(props) {
  return (
    <div className="Buttons-bar Globle-Flex-Row just-content">
      <div className="Globle-Flex-Row ">
        <InvoiceButton
          name={"Following"}
          background={"#418BCA"}
          color={"#fff"}
          width={"128px"}
          itemone={"Stop Following"}
          itemthree={"Michael Andreo"}
          itemfour={"Ahmed Sallahuddin"}
        />
        <InvoiceButton
          name={"Export"}
          background={"#E5E5E5"}
          color={"#7D7D7D"}
          width={"117px"}
        />
      </div>
      <div className="">
        <InvoiceButton
          name={"Save"}
          background={"#E5E5E5"}
          color={"#7D7D7D"}
          width={"107px"}
        />
      </div>
    </div>
  );
}
