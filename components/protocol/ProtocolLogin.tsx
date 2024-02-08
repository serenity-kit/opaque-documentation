import { ArrowLeft } from "./ArrowLeft";
import { ArrowRight } from "./ArrowRight";
import { Codeblock } from "./Codeblock";

export const ProtocolLogin = () => {
  return (
    <div>
      <div className="flex justify-center">
        <div className="w-80 border-l-2 py-4 border-l-protocol-amber-400 border-r-2 border-r-protocol-emerald-400 h-4"></div>
      </div>

      <Codeblock participant="client">
        {`ke1 = GenerateKE1(password)`}
      </Codeblock>

      <ArrowRight>{`ke1`}</ArrowRight>

      <Codeblock participant="server">
        {`ke2 = GenerateKE2(server_identity, server_private_key, server_public_key, record, credential_identifier, oprf_seed, ke1)`}
      </Codeblock>

      <ArrowLeft>{`ke2`}</ArrowLeft>

      <Codeblock participant="client">
        {`(ke3, session_key, export_key) = GenerateKE3(client_identity, server_identity, ke2)`}
      </Codeblock>

      <ArrowRight>{`ke3`}</ArrowRight>

      <Codeblock participant="server">
        {`session_key = ServerFinish(ke3)`}
      </Codeblock>
    </div>
  );
};
