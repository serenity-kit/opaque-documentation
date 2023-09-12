import * as opaque from "@serenity-kit/opaque";
import { useActor } from "@xstate/react";
import { useState } from "react";
import { assign, createMachine } from "xstate";

// TODO
// jump between steps
// setup login

const formMachine = createMachine({
  /** @xstate-layout N4IgpgJg5mDOIC5QDMD2AnAtgOgJYDtcAXXAQwBsBiAZQBUBBAJVoH0AFRgeQGEBRa6gG0ADAF1EoAA6pYxXKnwSQAD0QAmYcOwBOACwBWAMwBGYWu3H9aw9oA0IAJ6JTu7PoBs29+4AcAdjUXI20AXxD7NCxsAGNyXDB8ImoiUnQiRjAoXFgidFISBUplHPywbFJkIjB0AApTTQBKSkicWPjE5NT0zOzc-Pl8EXEkEGlZAsUR1QR3YT9sWf1dWb9tQ2ELeycEU3dsOeETC0O5zx8wiIwcWGqAN2rudDBSjKycvImM2Gl8G6KSqrlSrVOqaYRNFrYG7oe7oR7PKqvXofAZfH43IZKMZyBRKaamQzzNSBEzLdz6YyGHy6LbOYR7A5HAmnbTnC4gfCoCBwJQtLEyHGTUDTAC07lpCDF7MhBDkFH54wGeMQujUEp8xmwhmJFkMulZFN0JmlVxicQSSRSaSR736uJG2ImyoQVO0+xMagMxm0a1V2n06s12vMnr0akWFhNUWhsPhLx6ts+cHRYAVgudAR8Wtm3jUFI1fj1ga1OtDqojxijrXNiQAYrLYAALG19J0OgVt4XOSzzbR+cnGdw2MyBYvB7Rl8PCfSRsIhIA */
  id: "form",

  context: {
    opaqueServerSetup: null,
    // registrationSteps
    clientStartRegistrationData: null,
    serverCreateRegistrationResponseData: null,
    clientFinishRegistrationData: null,
  },

  states: {
    initial: {
      entry: assign(() => {
        return {
          opaqueServerSetup: opaque.server.createSetup(), // TODO replace with static one
        };
      }),

      on: {
        START_PROCESS: {
          target: "clientStartRegistration",
        },
      },
    },
    clientStartRegistration: {
      entry: assign(({ context, event }) => {
        const { clientRegistrationState, registrationRequest } =
          opaque.client.startRegistration({ password: event.password });

        return {
          clientStartRegistrationData: {
            clientRegistrationState,
            registrationRequest,
            username: event.username,
            password: event.password,
          },
        };
      }),
      after: {
        // after 1 second, transition to serverCreateRegistrationResponse
        1000: { target: "serverCreateRegistrationResponse" },
      },
    },
    serverCreateRegistrationResponse: {
      entry: assign(({ context }) => {
        const { registrationResponse } =
          opaque.server.createRegistrationResponse({
            registrationRequest:
              context.clientStartRegistrationData.registrationRequest,
            userIdentifier: context.clientStartRegistrationData.username,
            serverSetup: context.opaqueServerSetup,
          });

        return {
          serverCreateRegistrationResponseData: {
            registrationResponse,
          },
        };
      }),

      after: {
        // after 1 second, transition to clientFinishRegistration
        1000: { target: "clientFinishRegistration" },
      },
    },
    clientFinishRegistration: {
      entry: assign(({ context }) => {
        const { exportKey, registrationRecord } =
          opaque.client.finishRegistration({
            clientRegistrationState:
              context.clientStartRegistrationData.clientRegistrationState,
            password: context.clientStartRegistrationData.password,
            registrationResponse:
              context.serverCreateRegistrationResponseData.registrationResponse,
          });

        return {
          clientFinishRegistrationData: {
            exportKey,
            registrationRecord,
          },
        };
      }),
    },
  },

  initial: "initial",
});

export const InteractiveForm = () => {
  const [state, send] = useActor(formMachine);
  const [username, setUsername] = useState("jane@example.com");
  const [password, setPassword] = useState("123456");

  if (state.matches("clientFinishRegistration")) {
    console.log(JSON.stringify(state.context));
  }

  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          send({ type: "START_PROCESS", username, password });
        }}
      >
        <input
          type="text"
          placeholder=""
          value={username}
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <input
          type="password"
          placeholder="******"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <button type="submit">Register</button>
      </form>

      <div>
        <h2>Terminal</h2>
        <div className="border border-gray-400 w-96 h-64">
          {state.matches("initial") && <div>Submit the registration</div>}
          {state.matches("clientStartRegistration") && (
            <div>
              <div>Something happens</div>
              <div>
                Created registration request:{" "}
                {state.context.clientStartRegistrationData.registrationRequest}
              </div>
              <div>Sending …</div>
            </div>
          )}
          {state.matches("serverCreateRegistrationResponse") && (
            <div>
              <div>Something happens</div>
              <div>
                Created registration response:{" "}
                {
                  state.context.serverCreateRegistrationResponseData
                    .registrationResponse
                }
              </div>
              <div>Sending back …</div>
            </div>
          )}
          {state.matches("clientFinishRegistration") && (
            <div>
              <div>Something happens</div>
              <div>
                export_key:
                {state.context.clientFinishRegistrationData.exportKey}
              </div>
              <div>Sending back …</div>
            </div>
          )}
        </div>
      </div>

      <div>Current step: {state.value.toString()}</div>
    </div>
  );
};
