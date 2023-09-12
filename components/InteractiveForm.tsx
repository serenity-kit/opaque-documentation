import * as opaque from "@serenity-kit/opaque";
import { useActor } from "@xstate/react";
import { useState } from "react";
import { assign, createMachine } from "xstate";

// TODO
// setup login

const formMachine = createMachine(
  {
    /** @xstate-layout N4IgpgJg5mDOIC5QDMD2AnAtgYgOIHkB9AFSIGViBRABUIGEAZASUoDljCKBBAJQ58q4mFHl2JN8rANoAGALqJQAB1SwAlgBc1qAHaKQAD0QAWAEwAaEAE9Ep4wHYAdKdMBOUwEYPMgBzGZHj6u9gC+IZZoWHhEpJxUtGSUPABqSfQCYpSEAkIiYhKs2ZRk1JKJsgpIICrqWrr6RghmljYIbk4yAKzGAGw+9qZ+MgDMPh5hERg4BCTk8fTMbBwAYkyswgASRbnEouKSFfo1mtp6VY3N1ojDvY4+PgE9N0OdAxMgkZiOajonAIYAG2w3D4hGoPHwdGKZEOVWOdTOoEanUGzhkxlG-VGHhunRaiG8xkcnR6rh6PWM3lcnRGJPen0cMB0YHQfw0YB4YCgalgGlZCIAImy-thYcpVCd6udENSnMNOmN0fYzGSZPZ8QhvD1HGqRl5XIFXEbXD56VNHABjAFqMA6DRkDR-dAaTnc3n807YAy8tlgRx-ZDs9AACm8MhkAEpsAyrTa7Q6nS6uTy+WzTmLqhKEQ0CaZ7DJHMNhkbOsWKeSPD0NV5hoXAj0PKYSfmSYMzVhHLAWQA3Fl0dBgX2ulMe3Sc2AqHRdr0+9n+wMs0PhyPR81d9C99D9wfs4futNjuCTrsZ+GnHOa0muRzUhUycml+zdYbV0wFkl9G7DewGkYUsLhCAOioBAcD6J8RxZue0oIAAtFWVxwdqy4oah4ahIBDI-P8AKQbU0FItcpLOJ0BrPD0viuPexgamMhYuK4NxqmGFbtl8TIskOyb7oKwp4ZKiKGIg9iVs4VE3MEfQDO4tEePRbhMSJ4asZh5qxra9qOs6e6ptmcJQVKhGal0cn2D0ryNpSwweDJiFeHJJqkTZlbKjijFsZ2PZ9gOXFurppzjseYD8XpRluXJMjUveox9Ix6p2TZzg3IEIzBL0rydB56l2ss2GwAAFjpo6CWehlCZqPhvo4IneMqpjDOGDgWHZpjasYlXGJSPR5p0HhPhhYRAA */
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
        target: ".clientStartRegistration",
      },
      GO_TO_STEP_SERVER_CREATE_REGISTRATION_RESPONSE: {
        target: ".serverCreateRegistrationResponse",
      },
      GO_TO_STEP_CLIENT_FINISH_REGISTRATION: {
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
      initial: {
        entry: assign(() => {
          return {
            opaqueServerSetup: opaque.server.createSetup(), // TODO replace with static one
          };
        }),

        on: {
          START_REGISTRATION: {
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
          // after 1 second, transition to serverCreateRegistrationResponse
          1000: {
            target: "serverCreateRegistrationResponse",
            guard: "autoplayIsActive",
          },
        },
      },
      serverCreateRegistrationResponse: {
        after: {
          // after 1 second, transition to clientFinishRegistration
          1000: {
            target: "clientFinishRegistration",
            guard: "autoplayIsActive",
          },
        },
      },
      clientFinishRegistration: {
        on: {
          START_LOGIN: {
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

    initial: "initial",
  },
  {
    guards: {
      autoplayIsActive: ({ context }) => context.autoplay,
    },
  }
);

export const InteractiveForm = () => {
  const [state, send] = useActor(formMachine);
  const [username, setUsername] = useState("jane@example.com");
  const [password, setPassword] = useState("123456");

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
