import * as opaque from "@serenity-kit/opaque";
import { useEffect, useState } from "react";

// represents the secret of the server
// which is a combination of
// - a private key
// - an oprf-seed to initialize the oprf function
// - a fake-private key for failed login attempts

export const InteractiveForm = () => {
  const [serverSetup, setServerSetup] = useState<string | null>(null);

  useEffect(() => {
    opaque.ready.then(() => {
      setServerSetup(serverSetup);
    });
  }, []);

  console.log(serverSetup);
  return <div className="underline"></div>;
};
