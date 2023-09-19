import * as opaque from "@serenity-kit/opaque";
import { useActor } from "@xstate/react";
import { useState } from "react";
import { assign, createMachine, fromPromise } from "xstate";

const formMachine = createMachine(
  {
    /** @xstate-layout N4IgpgJg5mDOIC5QDMD2AnAtgYgOIHkB9AFSIGViBRABUIGEAZASUoDljCKBBAJQ58q4mFHl2JN8rANoAGALqJQAB1SwAlgBc1qAHaKQAD0QAWAEwAaEAE9EpgJx2AdKYDMp4wHZjARjvGXMt4AHABsAL5hlmhYeESknFS0ZJQ8AGop9AJilIQCQiJiEqy5lGTUksmyCkggKupauvpGCGaWNggudh6O3qYeIQCsMh69QUEeMi4RURg4BCTkifTMbBwAYkyswgASJfnEouKSVfp1mtp6Nc2t1iZ2A44ypvbeLh4DvjIDpuGRINE4ATJfiCYQHQrHeSnVTnRpXEwWW4IUyBRwuN6mbxYgbfIIuQbTf6zRwAdwAhucdFA1hh8EoyQBHACuYGwEF0YEcah0ADdUABrTkA0kUrRUmnoOmMlkIbl8gDGZIaOiqJxqZ2VTUQAzMjnGH3x3hChrebUQ3hkIT1IU8AxcxhCISxgUJwu55zJABtsNw+HswYcimrlDDNfCEOMZI9vB47GNQoNTAMzQgumiPB4gq9hvaXHaBq7iTAdGB0EqwDwwFA1LANGXlQARJVk7DB2qhi5ahCvD6ODw-CYhWNGuzDFO9UxowadBxjEKTV6FrCOeWetRgHQaMgaMnoDSV6u1+sXbAGWvlxxk5AaUsACgtMhkAEpsMLV+vN9vd-uqzW60qLjbDVO3DI0PBcHofAdd4QiCR8fHHew9W8HFfHGIdMyCYwl0wRxYFLHlSzodAwHLA8-2PXRK1gFQdHw09zxvS9rzvB9n1fYl8PQQj0GI0ib3Io8AKouBaPwoCOzhUBmkxbxjGtS0+lguTkyRV5uh+AZBk8TobWMcYcJXNcNw0NZ3VgAALQT-2VH1iF4DgGHwIRpChdVJMuaTbE8KMQjsNjPHeZ5x18PtTCCFEfnGXNFz+N9jM-Hc9wYVBqx0BidyYq8b3Qe9H3Y+KPy3JKNBStKJPqECvORCKgmjfzAlCaLxnHYx5JGAZMzseckwtPxDK4niv2S1LuQyi9stY-KX2FQbS2G0rRpVNyQ0qqTDEQFxXgg+ctLGI1YLsRF2jk9qUK6nqPhkfq4uJd8TLMnQawssqxrPTLOUm3K2Jmu6EtM8yXqWirYU8jaOn8Jwjs8VwYzMONWrOzqgm6p4rpuv4dFQCA4H0AFoTWsHmgAWhCFNScM8lKWpWl6WZMACdBrs8yjV4LTzbFBm6lMszRZ5RxjY1ghRwz3S0L1GbDarBz7R8ttcfo3gQpFur1VwhiGJMHTtIJDOLUsyN-ITG2bSWqvB50IImVxjCGTp9OMFNVYilnNZ1adddu5d7sS79rMosHgPW5pTrqrasKxPEnXcR21PCxwzG+GR9KNAY7ACDwBoIoiSMNw8bIuaixIZ9zCa7GNVdHBwHDzY1wvHPM9SCvx3h1rNDJ9gGnss-3hMDjyu2eFw6pCcKui6cDjDsVqILcHV7CdCKdVimZvf+hbXv7svw00ycJljVxAn8RWZ75+fuuCLWV6JZc5vQDelrN4PbHubw+3GW3dOGTMXFPuf4cXlfKYXtcKd0es9TeT8iabSTN0JWmIHA4kxHaP+WsF6X2XsA1euE77gMspA0uTNwy1x2unLW3UfiYg8Kg8+gDMERAiEAA */
    id: "form",

    context: {
      autoplay: true,
      opaqueServerSetup: null,
      username: null,
      password: null,
      // registrationSteps
      clientStartRegistrationData: null,
      serverCreateRegistrationResponseData: null,
      clientFinishRegistrationData: null,
      // loginSteps
      clientStartLoginData: null,
      serverStartLoginData: null,
      clientFinishLoginData: null,
      serverFinishLoginData: null,
    },

    on: {
      GO_TO_STEP_CLIENT_START_REGISTRATION: {
        actions: ["deactivateAutoplay"],
        target: ".clientStartRegistration",
      },
      GO_TO_STEP_SERVER_CREATE_REGISTRATION_RESPONSE: {
        actions: ["deactivateAutoplay"],
        target: ".serverCreateRegistrationResponse",
      },
      GO_TO_STEP_CLIENT_FINISH_REGISTRATION: {
        actions: ["deactivateAutoplay"],
        target: ".clientFinishRegistration",
      },
      RESET_REGISTRATION: {
        target: ".initial",
        actions: assign(() => {
          return {
            clientStartRegistrationData: null,
            serverCreateRegistrationResponseData: null,
            clientFinishRegistrationData: null,
            username: null,
            password: null,
          };
        }),
      },
    },

    states: {
      waitingForOpaque: {
        invoke: {
          src: fromPromise(() => opaque.ready),
          onDone: {
            target: "initial",
          },
        },
      },
      initial: {
        entry: assign(() => {
          return {
            opaqueServerSetup: opaque.server.createSetup(), // TODO replace with static one
          };
        }),

        on: {
          START_REGISTRATION: {
            actions: ["activateAutoplay"],
            target: "generateRegistrationData",
          },
        },
      },
      generateRegistrationData: {
        entry: assign(({ context, event }) => {
          const password =
            event.password || context.clientStartRegistrationData.password; // in case you go back to step one
          const username =
            event.username || context.clientStartRegistrationData.username; // in case you go back to step one

          // registration
          const { clientRegistrationState, registrationRequest } =
            opaque.client.startRegistration({ password });

          const { registrationResponse } =
            opaque.server.createRegistrationResponse({
              registrationRequest,
              userIdentifier: username,
              serverSetup: context.opaqueServerSetup,
            });

          const { exportKey, registrationRecord } =
            opaque.client.finishRegistration({
              clientRegistrationState,
              password,
              registrationResponse,
            });

          // login
          const { clientLoginState, startLoginRequest } =
            opaque.client.startLogin({ password });

          const { loginResponse, serverLoginState } = opaque.server.startLogin({
            registrationRecord,
            startLoginRequest,
            serverSetup: context.opaqueServerSetup,
            userIdentifier: username,
          });

          const {
            finishLoginRequest,
            serverStaticPublicKey,
            sessionKey: sessionKeyClient,
          } = opaque.client.finishLogin({
            clientLoginState,
            loginResponse,
            password,
          });

          const { sessionKey: sessionKeyServer } = opaque.server.finishLogin({
            finishLoginRequest,
            serverLoginState,
          });

          return {
            clientStartRegistrationData: {
              clientRegistrationState,
              registrationRequest,
              username,
              password,
            },
            serverCreateRegistrationResponseData: {
              registrationResponse,
            },
            clientFinishRegistrationData: {
              exportKey,
              registrationRecord,
            },
            clientStartLoginData: {
              clientLoginState,
              startLoginRequest,
            },
            serverStartLoginData: {
              loginResponse,
              serverLoginState,
            },
            clientFinishLoginData: {
              finishLoginRequest,
              serverStaticPublicKey,
              sessionKey: sessionKeyClient,
            },
            serverFinishLoginData: {
              sessionKey: sessionKeyServer,
            },
          };
        }),
        always: {
          target: "clientStartRegistration",
        },
      },
      // registration states
      clientStartRegistration: {
        after: {
          1000: {
            target: "serverCreateRegistrationResponse",
            guard: "autoplayIsActive",
          },
        },
      },
      serverCreateRegistrationResponse: {
        after: {
          1000: {
            target: "clientFinishRegistration",
            guard: "autoplayIsActive",
          },
        },
      },
      clientFinishRegistration: {
        on: {
          START_LOGIN: {
            actions: ["activateAutoplay"],
            target: "clientStartLogin",
          },
        },
      },
      // login states
      clientStartLogin: {
        after: {
          1000: {
            target: "serverStartLogin",
            guard: "autoplayIsActive",
          },
        },
      },
      serverStartLogin: {
        after: {
          1000: {
            target: "clientFinishLogin",
            guard: "autoplayIsActive",
          },
        },
      },
      clientFinishLogin: {
        after: {
          1000: {
            target: "serverFinishLogin",
            guard: "autoplayIsActive",
          },
        },
      },
      serverFinishLogin: {},
    },

    initial: "waitingForOpaque",
  },
  {
    guards: {
      autoplayIsActive: ({ context }) => context.autoplay,
    },
    actions: {
      deactivateAutoplay: assign(() => {
        return { autoplay: false };
      }),
      activateAutoplay: assign(() => {
        return { autoplay: true };
      }),
    },
  }
);

export const InteractiveForm = () => {
  const [state, send] = useActor(formMachine);
  const [username, setUsername] = useState("jane@example.com");
  const [password, setPassword] = useState("123456");

  console.log("autoplay:", state.context.autoplay);

  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          send({ type: "START_REGISTRATION", username, password });
        }}
      >
        <input
          type="text"
          placeholder=""
          value={username}
          onChange={(event) => {
            setUsername(event.target.value);
          }}
          disabled={!state.matches("initial")}
        />
        <input
          type="password"
          placeholder="******"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          disabled={!state.matches("initial")}
        />
        <button type="submit" disabled={!state.matches("initial")}>
          Register
        </button>
      </form>

      <button
        type="button"
        disabled={state.matches("initial")}
        onClick={() => {
          setUsername("");
          setPassword("");
          send({ type: "RESET_REGISTRATION" });
        }}
      >
        Reset
      </button>

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

          {/* login */}
          {state.matches("clientStartLogin") && (
            <div>
              <div>Something happens</div>
              <div>
                startLoginRequest:
                {state.context.clientStartLoginData.startLoginRequest}
              </div>
              <div>Sending back …</div>
            </div>
          )}
          {state.matches("serverStartLogin") && (
            <div>
              <div>Something happens</div>
              <div>
                loginResponse:
                {state.context.serverStartLoginData.loginResponse}
              </div>
              <div>Sending back …</div>
            </div>
          )}
          {state.matches("clientFinishLogin") && (
            <div>
              <div>Something happens</div>
              <div>
                finishLoginRequest:
                {state.context.clientFinishLoginData.finishLoginRequest}
              </div>
              <div>
                sessionKey:
                {state.context.clientFinishLoginData.sessionKey}
              </div>
              <div>Sending back …</div>
            </div>
          )}
          {state.matches("serverFinishLogin") && (
            <div>
              <div>Something happens</div>
              <div>
                sessionKey:
                {state.context.serverFinishLoginData.sessionKey}
              </div>
              <div>Sending back …</div>
            </div>
          )}
        </div>
      </div>

      <button
        type="button"
        disabled={state.matches("initial")}
        onClick={() => {
          send({ type: "GO_TO_STEP_CLIENT_START_REGISTRATION" });
        }}
      >
        Go to step 1
      </button>
      <button
        type="button"
        disabled={state.matches("initial")}
        onClick={() => {
          send({ type: "GO_TO_STEP_SERVER_CREATE_REGISTRATION_RESPONSE" });
        }}
      >
        Go to step 2
      </button>
      <button
        type="button"
        disabled={state.matches("initial")}
        onClick={() => {
          send({ type: "GO_TO_STEP_CLIENT_FINISH_REGISTRATION" });
        }}
      >
        Go to step 3
      </button>

      <button
        type="button"
        disabled={!state.matches("clientFinishRegistration")}
        onClick={() => {
          send({ type: "START_LOGIN" });
        }}
      >
        Start Login
      </button>

      <div>Current step: {state.value.toString()}</div>
    </div>
  );
};
