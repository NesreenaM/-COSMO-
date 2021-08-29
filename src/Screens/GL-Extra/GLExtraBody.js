import React, { useState } from "react";
import MyAccordion from "../../Components/ِِAccordion/Accordion";

export const ContextOpen = React.createContext({
  open: true,
  handleChangeto: () => ``,
});

export default function GLExtraBody() {
  const [open, setOpen] = useState(true);
  const handleChangeto = (open) => setOpen(open);

  const cart = [["Pensions"]];

  return (
    <div style={{ width: "100%" }} className="GLExtraBody">
      <div className="header-bar Globle-Flex-Row just-content">
        <p>&nbsp;</p>
        <p>item</p>
        <p>Date</p>
        <p>item</p>
        <p>Date</p> <p>item</p>
        <p>Date</p>
        <p>item</p>
        <p>Date</p>
        <p>item</p>
        <p>Date</p>
      </div>

      <ContextOpen.Provider value={{ open, handleChangeto }}>
        <MyAccordion
          name={"Assets"}
          open={open}
          id={555}
          background={"#EAEAEA"}
        >
          <div
            className="Globle-Flex-Column width-100
            "
            style={{ background: "aqua !important" }}
          >
            {open
              ? Array(3)
                  .fill(0)
                  .map((x) => {
                    return (
                      <div>
                        <MyAccordion
                          id={"0000000"}
                          name={"Fixed Assets"}
                          background={"#F5F5F5"}
                          paddingLeft={"60px"}
                        />
                      </div>
                    );
                  })
              : ""}
          </div>
        </MyAccordion>

        <MyAccordion name={"Liabilities"} open={open} background={"#EAEAEA"}>
          <div className="Globle-Flex-Column width-100">
            {open ? (
              <div>
                <MyAccordion
                  name={"Current"}
                  open={open}
                  background={"#F5F5F5"}
                  paddingLeft={"60px"}
                >
                  <div className="Globle-Flex-Column width-100">
                    {open
                      ? Array(0)
                          .fill(0)
                          .map((x) => {
                            return (
                              <MyAccordion
                                name={"test 2"}
                                background={"#EAEAEA"}
                                paddingLeft={"60px"}
                              />
                            );
                          })
                      : ""}
                  </div>
                </MyAccordion>
                {cart.map((items, index) => {
                  return (
                    <>
                      <MyAccordion
                        name={"Fixed"}
                        bg="red"
                        background={"#F5F5F5"}
                        paddingLeft={"60px"}
                      >
                        <MyAccordion
                          id={"0000000"}
                          name={"Long-Term Loans"}
                          background={"#FCFCFC"}
                          paddingLeft={"90px"}
                        />
                         <MyAccordion
                          id={"0000000"}
                          name={"Lease"}
                          background={"#FCFCFC"}
                          paddingLeft={"90px"}
                        />
                        <MyAccordion
                          id={"0000000"}
                          name={"EOBI"}
                          background={"#FCFCFC"}
                          paddingLeft={"90px"}
                        />

                        {console.log("theee items e ", items)}

                        {items.map((subItems, sIndex) => {
                          console.log("theee  e  subItems", typeof subItems);
                          return (
                            <MyAccordion
                              name={subItems}
                              background={"#fff"}
                              paddingLeft={"90px"}
                            >
                              <table style={{ width: "100%" }}>
                                <tr
                                  style={{
                                    background: "#fcfcfc !important",
                                    maxHeight: "37px"
                                  }}
                                >
                                  <td style={{padding: "5px 0 5px 138px"}}>Opening</td>
                                  <td>&nbsp;</td>
                                  <td>&nbsp;</td>
                                  <td>&nbsp;</td>
                                  <td>&nbsp;</td>
                                  <td>&nbsp;</td>
                                  <td>&nbsp;</td>
                                  <td>&nbsp;</td>
                                  <td>&nbsp;</td>
                                  <td>&nbsp;</td>
                                  <td>&nbsp;</td>
                                  <td>&nbsp;</td>
                                </tr>

                                <tr
                                  style={{
                                    background: "#fff !important",
                                    maxHeight: "37px",
                                    fontSize: "13px",
                                  }}
                                >
                                  <td style={{padding: "5px 0 5px 138px"}}>BanK tranfer</td>
                                  <td>Complete degin for website</td>
                                  <td>1/7/20</td>
                                  <td>BanK tranfer</td>
                                  <td>BanK tranfer</td>
                                  <td>BanK tranfer%</td>
                                  <td>BanK tranfer</td>
                                  <td>BanK tranfer</td>
                                  <td>BanK tranfer</td>
                                  <td>BanK tranfer</td>
                                </tr>
                                <tr
                                  style={{
                                    background: "#fff !important",
                                    maxHeight: "37px"
                                  }}
                                >
                                  <td style={{padding: "5px 0 5px 138px"}}>BanK tranfer</td>
                                  <td>Complete degin for website</td>
                                  <td>1/7/20</td>
                                  <td>BanK tranfer</td>
                                  <td>BanK tranfer</td>
                                  <td>BanK tranfer%</td>
                                  <td>BanK tranfer</td>
                                  <td>BanK tranfer</td>
                                  <td>BanK tranfer</td>
                                  <td>BanK tranfer</td>
                                </tr>
                                <tr
                                  style={{
                                    background: "#fff !important",
                                    maxHeight: "37px"
                                  }}
                                >
                                  <td style={{padding: "5px 0 5px 138px"}}>BanK tranfer</td>
                                  <td>Complete degin for website</td>
                                  <td>1/7/20</td>
                                  <td>BanK tranfer</td>
                                  <td>BanK tranfer</td>
                                  <td>BanK tranfer%</td>
                                  <td>BanK tranfer</td>
                                  <td>BanK tranfer</td>
                                  <td>BanK tranfer</td>
                                  <td>BanK tranfer</td>
                                </tr>

                                <tr
                                  style={{
                                    background: "#fff !important",
                                    maxHeight: "37px"
                                  }}
                                >
                                  <td style={{padding: "5px 0 5px 138px"}}>BanK tranfer</td>
                                  <td>&nbsp;</td>
                                  <td>&nbsp;</td>
                                  <td>&nbsp;</td>
                                  <td>&nbsp;</td>
                                  <td>&nbsp;</td>
                                  <td>&nbsp;</td>
                                  <td>BanK tranfer</td>
                                  <td>BanK tranfer</td>
                                  <td>BanK tranfer</td>
                                </tr>
                                <tr
                                  style={{
                                    background: "#fff !important",
                                    maxHeight: "37px"
                                  }}
                                >
                                  <td style={{padding: "5px 0 5px 138px"}}>Closing</td>
                                  <td>&nbsp;</td>
                                  <td>&nbsp;</td>
                                  <td>&nbsp;</td>
                                  <td>&nbsp;</td>
                                  <td>&nbsp;</td>
                                  <td>&nbsp;</td>
                                  <td>&nbsp;</td>
                                  <td>&nbsp;</td>
                                  <td>77777</td>
                                </tr>
                              </table>
                            </MyAccordion>
                          );
                        })}
                      </MyAccordion>
                    </>
                  );
                })}
              </div>
            ) : (
              ""
            )}
          </div>
        </MyAccordion>
      </ContextOpen.Provider>

      {/* table */}
    </div>
  );
}
