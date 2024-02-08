import { ArrowLeft } from "./ArrowLeft";
import { ArrowRight } from "./ArrowRight";
import { Codeblock } from "./Codeblock";

export const Protocol = () => {
  return (
    <div>
      <div className="flex justify-center">
        <div className="w-80 border-l-2 py-4 border-l-protocol-amber-400 border-r-2 border-r-protocol-emerald-400 h-4"></div>
      </div>

      <Codeblock participant="client">
        {`// blind: the random blinding inverter
(blinded_message, blind) = OPRF_blind(password)`}
      </Codeblock>

      <ArrowRight>blinded_message</ArrowRight>

      {/* split up response */}
      <Codeblock participant="server">{`evaluated_message = CreateRegistrationResponse(blinded_message, server_public_key, username, oprf_seed)`}</Codeblock>

      <ArrowLeft>evaluated_message, server_public_key</ArrowLeft>

      <Codeblock participant="client">{`(record, export_key) = FinalizeRegistrationRequest(password, blind, response, server_identity, client_identity)`}</Codeblock>

      <ArrowRight>record</ArrowRight>

      <Codeblock participant="server">{`// store the record associated with the username`}</Codeblock>

      <div className="flex justify-center">
        <div className="w-80 border-l-2 py-4 border-l-protocol-amber-400 border-r-2 border-r-protocol-emerald-400"></div>
      </div>
    </div>
  );
};
