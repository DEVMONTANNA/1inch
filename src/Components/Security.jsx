import React from "react";
import Header from "./Header";
import Card2 from "../Components/Images/Card2.png";
import Card from "../Components/Images/card.svg";
import Etherscan from "../Components/Images/Etherscan.png";
import Blockaid from "../Components/Images/Blockaid.png";
import Redpoint from "../Components/Images/Redpoint.png";
import Auditlogo from "../Components/Images/Auditlogo.png";
import Button from "./Button";

const Security = () => {
  return (
    <div>
      <Header />
      <div className="mt-[100px] ">
        <div>
          <img src={Card2} />
        </div>
        <div className="text-[#fff] p-[15px] mt-[30px]">
          <b>
            <h1 className="text-[32px] ">1inch Security</h1>
          </b>
          <p className="text-[20px] mt-[15px]">
            Your defense against illicit activity in DeFi
          </p>
        </div>
        <div className="text-[#fff] p-[15px] mt-[50px]">
          <b>
            <h1 className="text-[26px] ">Blocklist strategy</h1>
          </b>
          <p className="text-[17px] text-[#fff9]  mt-[15px]">
            1inch’s internal blocklist strategy leverages multiple layers of
            investigation, including behavioral pattern analysis and cybercrime
            intelligence, to detect and block addresses connected to illicit
            activity.
          </p>
        </div>

        <div className="p-[20px] text-[#fff]">
          <div className="p-[25px] border border-[2px solid white] rounded-[30px] ">
            <img src={Card} />
            <b>
              <p className="text-[17.5px] mt-[10px]">
                Internal blockchain investigation team
              </p>
            </b>
          </div>
          <div className="p-[25px] border border-[2px solid white] mt-[15px] rounded-[30px]">
            <img src={Card} />
            <b>
              <p className="text-[17.5px] mt-[10px]">
                Integration of multiple public blocklists
              </p>
            </b>
          </div>
          <div className="p-[25px] border border-[2px solid white] mt-[15px] rounded-[30px]">
            <img src={Card} />
            <b>
              <p className="text-[17.5px] mt-[10px]">
                Cybercrime intelligence for preemptive action
              </p>
            </b>
          </div>
          <div className="p-[25px] border border-[2px solid white] mt-[15px] rounded-[30px]">
            <img src={Card} />
            <b>
              <p className="text-[17.5px] mt-[10px]">
                Monitoring and analysis of transaction and behavior patterns
              </p>
            </b>
          </div>
        </div>
        <div className="text-[#fff] p-[15px] mt-[30px]">
          <b>
            <h1 className="text-[26px] ">AML screening</h1>
          </b>
          <p className="text-[17px] text-[#fff9]  mt-[15px]">
            Advanced screening tools check all addresses connected to 1inch or
            engaged in 1inch swaps for links to sanctioned parties, terrorist
            financing, hacked or stolen funds, ransomware, human trafficking and
            more. Powerful blockchain analytics can trace pseudonymous data
            (assets, addresses, events) to real-world individuals and entities.
            Suspicious addresses are immediately blocked.
          </p>
          <b>
            <p className="text-[20px] text-[#fff] text-center mt-[20px]">
              {" "}
              Powered by
            </p>
          </b>
          <div className="flex items-center justify-center mt-[5px]">
            <img className="w-[100%]" src={Etherscan} />
          </div>
        </div>

        <div className="mt-[-20px]">
          <div className="text-[#fff] p-[15px]">
            <b>
              <h1 className="text-[26px] ">Scam protection</h1>
            </b>
            <p className="text-[17px] text-[#fff9] mt-[10px]">
              Threat detection tools notify users about suspicious transactions,
              dApps, or tokens before any interaction occurs.
            </p>
          </div>
          <div className="p-[20px] text-[#fff]">
            <div className="p-[25px] border border-[2px solid #fff9] rounded-[30px] ">
              <img src={Card} />
              <b className="text-[20px]">
                <p className="mt-[10px]">Transaction scanning</p>
              </b>
              <p className="text-[17px] mt-[10px] text-[#fff9]">
                Transactions processed via 1inch applications are scanned to
                detect and flag fraudulent activity.
              </p>
            </div>
            <div className="p-[25px] border border-[2px solid #fff9] mt-[15px] rounded-[30px]">
              <img src={Card} />
              <b className="text-[20px]">
                <p className="mt-[10px]">Domain scanning</p>
              </b>
              <p className="text-[17px] mt-[10px] text-[#fff9]">
                When a 1inch user connects to a third-party application, a
                domain scan is activated, warning the user of a potential
                threat.
              </p>
            </div>
            <div className="p-[25px] border border-[2px solid #fff9] mt-[15px] rounded-[30px]">
              <img src={Card} />
              <b className="text-[20px]">
                <p className="mt-[10px]">Malicious token detection</p>
              </b>
              <p className="text-[17px] mt-[10px] text-[#fff9]">
                Token and wallet addresses are checked. Scam tokens masquerading
                as legitimate ones are instantly detected and marked..
              </p>
            </div>
          </div>
        </div>

        <div>
          <b>
            <h1 className="text-[20px] text-center text-[white] ">
              Powered by
            </h1>
          </b>
          <div className="items-center">
            <img className="w-[100%]" src={Blockaid} />
          </div>
          <div className="p-[15px]">
            <b>
              <p className="text-[25px]  text-[white]">Brand abuse takedowns</p>
            </b>
            <p className="text-[17px] mt-[10px] text-[#fff9]">
              Scammers use the 1inch name to lure victims into giving up their
              funds. 1inch fights these fraudsters by constantly scanning the
              web for fake 1inch websites and social media, as well as the
              latest fraud schemes.
            </p>
            <b>
              <h1 className="text-[20px] mt-[15px] text-center text-[white] ">
                Powered by
              </h1>
            </b>
            <div className="flex justify-center mt-[10px]">
              <img className="w-[100%]" src={Redpoint} />
            </div>

            <div className="mt-[13px]">
              <div className="text-[#fff] p-[15px]">
                <b>
                  <h1 className="text-[28px] ">Hack protection</h1>
                </b>
              </div>
              <div className="p-[20px] text-[#fff]">
                <div className="p-[25px] border border-[2px solid #fff9] rounded-[30px] ">
                  <img src={Card} />
                  <b className="text-[20px]">
                    <p className="mt-[10px]">Smart contract audits</p>
                  </b>
                  <p className="text-[17px] mt-[10px] text-[#fff9]">
                    1inch is one of the most audited projects in DeFi. All 1inch
                    smart contracts have been repeatedly audited by top experts.
                    The 1inch Wallet has undergone multiple thorough security
                    audits and successful penetration tests.
                  </p>
                </div>
                <div className="p-[25px] border border-[2px solid #fff9] mt-[15px] rounded-[30px]">
                  <img src={Card} />
                  <b className="text-[20px]">
                    <p className="mt-[10px]">Defense by design</p>
                  </b>
                  <p className="text-[17px] mt-[10px] text-[#fff9]">
                    1inch smart contracts are non-upgradable by design, which
                    reduces the risk of hacking.
                  </p>
                </div>
                <div className="p-[25px] border border-[2px solid #fff9] mt-[15px] rounded-[30px]">
                  <img src={Card} />
                  <b className="text-[20px]">
                    <p className="mt-[10px]">
                      Shielded from DEX vulnerabilities
                    </p>
                  </b>
                  <p className="text-[17px] mt-[10px] text-[#fff9]">
                    Even if liquidity pools aggregated by 1inch are compromised,
                    users' funds won't be accessed by hackers.
                  </p>
                  <span className="text-purple-700 text-[20px] mt-[-20px]">
                    Learn more
                  </span>
                </div>
                <b>
                  <p className="text-[18px] text-[#fff] text-center mt-[23px]">
                    Audited by
                  </p>
                </b>
                <div>
                  <img className="w-[100%]" src={Auditlogo} />
                  <p className="text-center text-[16px] text-purple-700">
                    and more
                  </p>
                </div>

                <div>
                  <b>
                    <p className="text-[27px] mt-[20px] text-[#fff]">
                      Upcoming features
                    </p>
                  </b>
                  <p className="text-[16px] text-[#fff9] mt-[20px]">
                    We’re working on additional security features, including a
                    user-owned AI agent, account creation, device intelligence
                    and more. For more details about our plans, please see the
                    security white paper.
                  </p>
                  <div className="mt-[20px]">
                    <Button
                      buttonColor="transparent"
                      border="2px solid white"
                      padding="9px"
                      color="white"
                      props="Read white paper"
                    />
                  </div>
                  <div className="mt-[30px]">
                    <b>
                      <p className="text-[#fff] text-[20px] ">Contact us</p>
                    </b>
                    <p className="text-[17px] text-[#fff9] mt-[11px]">
                      Reach out to the 1inch compliance team if you have any
                      questions or requests:
                    </p>
                    <div className="mt-[10px]">
                      <a href="mailto:chsdjbhj@example.com">
                        <span className="text-purple-700 ">
                          chiedoziegodluck351@gmail.com
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Security;
