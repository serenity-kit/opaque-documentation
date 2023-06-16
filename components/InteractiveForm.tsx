import * as opaque from "@serenity-kit/opaque";

// represents the secret of the server
// which is a combination of
// - a private key
// - an oprf-seed to initialize the oprf function
// - a fake-private key for failed login attempts
const serverSetup = opaque.serverSetup();

export const InteractiveForm = () => {
  console.log(serverSetup);

  return <div className="text-3xl font-bold underline mb-4">blub</div>;
};
