import * as opaque from "@serenity-kit/opaque";
import { useActor } from "@xstate/react";
import { useState } from "react";
import { assign, createMachine, fromPromise } from "xstate";
import { Button } from "./Button";
import { TypeAnimation } from "react-type-animation";

const formMachine = createMachine(
  {
    /** @xstate-layout N4IgpgJg5mDOIC5QDMD2AnAtgYgOIHkB9AFSIGViBRABUIGEAZASUoDljCKBBAJQ58q4mFHl2JN8rANoAGALqJQAB1SwAlgBc1qAHaKQAD0QB2AEwAaEAE8TARlsA6AMxPTATgAcANicfbMjzcAXyDLNCw8IlJOKloySh4ANQT6ATFKQgEhETEJVkzKMmpJeNkFJBAVdS1dfSMELwtrRA8AVi8HABY3N2MvQOMAn2DQkHCcAhJyWPpmNg4AMSZWYQAJAuziUXFJMv0qzW09CvrWppsEW1N7LrPjN07TL09XJxCwjBwBeP5BYS3crt5PtVIdaidEI9LBdTDIZA5jMYnLYPJ1WjI3AEnI93mNPg4AO4AQ0OOigCww+CURIAjgBXMDYCC6MAONQ6ABuqAA1qzxoSSVoyRT0FTaQyEOyuQBjIk1HRlPYVA7yuqIUzuLqox5eYyPJytYy2JzQxD+VoOHqefz3K5uJxeWy4-nsw5EgA22G4fA2-22eSVylBqohCFanQ8CKerU8T2xpjapsubQc-U8j3cTnuMk6b1G-JgOjA6DlYB4YCgalgGhL8oAInKidhA5Vg0c1QgPOdEF4fA4PK42u5jbZBq1nfjpe61GAdBoyBoiegNOXK9Xa0dsAZq6WHETkBpiwAKTpwmQASmw-KnM7nC6XK4rVZrcqOLZV7dD-lzt2RaITVxIq0SZGo4vSNAa9y9jIvgTlgDg3rO86Lsuq7Phuuh7kSTbbouh57gex7oheV6TtOSH3qhT7rq+mHYUS75tuCoCnHqziYl4MZmNixjhiByJRo0nGosYXatOO+ZkbeyEPmhNHyg4ABGylbju+H7oe6BHsRl7XuRd4oY+a4vgpymKYx1SfixJj2pa1yYqY6KmFmaL8Y4ZiOo6zmNJiIwfPBsDFhyxZ0OgYClnJJlHOWsAqDogWqXhrIacesJwrp+KBegwXoKF4WHpFGE6DFcWBRZYLHNZDTdpcth9m4ZweIMMimN0A5wZgCH6RoCyurAAAWhW0ToXrELwHAMPgQjSMCypMZVhg9v0DgyIi4HGgE9peEmVw5g4sJPA8Mi2A1IkdV10mURoDCoJWI24buKVaWlJF6Zdhk3Xd5UhlV-h1Q4hoeHCjSPIaZw7Rqka6m4CatXDJ0eOdWU5Vdn3solj2Ec9Z4ZQFQXFqjt3st9VmLQgzlOP2mJIjmeoRiazSXK0J2WjIhr+IEaJuJx52IXOvU6FW-Vo-danJVjR4vbjnV8z1fXC0TCqzUGlnMWTrTYginEPN+rUGgzFy2Mzbis+zm1czzuI6KgEBwPo4wgqrC31AAtNtjNuytZ7ez7MPncSpLkpS1L0mAjsVR2UKM34XQ9G0AT3C51zna6WgeuHP1k74JuIgaMFwrmAE7SmvY+L2o7dEanTGOdhbFhF1FRboDaLhnpP1IiHRIrmXbObmRo1SiFqlw6jp6r0tjV7z3VXUNmcfmr9SdI8VMyF41dnGvpi8cYSbr5TGqNG07SuC1En+TLM+GXPRxYUSbeL5CmKr+vvGwo0O-8fCHmteanT2JPae71ZKNyKkpZSD9nZ2HhI8FEDkehnF7F-QSv82b-3sJ0IBFFr6gOGghaU0pIEdhhibBqyIXCrVRI5d2FwaaCWNOvUGfREaSTxtlEKYUG7GSKiVXQgUiFfjqsYfa-h7TXHuKeA2LQzD0N6J0R0Z8a6sMvtJAWQsb5qwXlAhAy9TBdD6OJAcqIToxghtvVM9xHJ9CcGzNmXgsEGQfCLARVVUQWh6GlLMyJmYDjMcI6GVifC2PaEjfG6BCZ3RcerXejMjYolNv0BRAQux5gvhdJCaiBrOLmk7DskEHB1VPI6A0Y8NbAViT4hJ3h-DJOcqE9h6BMkK0iTkiOoZhIrScDDI0MN-5FwqfEzE7Rqlwg8CkkIIQgA */
    id: "form",

    context: {
      autoplay: true,
      opaqueServerSetup: null,
      username: null,
      password: null,
      // animation
      animationStep: 0,
      animationStepDelays: [],
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
        entry: assign(({ context, event }) => {
          // notice that animationStepDelays.length + 1 needs to match with
          // the amount of animationSteps for each registration/login state
          // otherwise some steps might never be reached
          // example: steps 0 - 4 => 5 steps => animationStepDelays.length == 4
          return event.type ===
            "xstate.after(animationStepDelay)#form.clientStartRegistration"
            ? { animationStep: context.animationStep + 1 }
            : { animationStepDelays: [2000, 2000], animationStep: 0 };
        }),
        after: {
          animationStepDelay: {
            target: "clientStartRegistration",
            guard: "hasNextAnimationStep",
          },
          4000: {
            target: "serverCreateRegistrationResponse",
            guard: "autoplayIsActive",
          },
        },
      },
      serverCreateRegistrationResponse: {
        entry: assign(({ context, event }) => {
          return event.type ===
            "xstate.after(animationStepDelay)#form.serverCreateRegistrationResponse"
            ? { animationStep: context.animationStep + 1 }
            : { animationStepDelays: [2000, 2000], animationStep: 0 };
        }),
        after: {
          animationStepDelay: {
            target: "serverCreateRegistrationResponse",
            guard: "hasNextAnimationStep",
          },
          4000: {
            target: "clientFinishRegistration",
            guard: "autoplayIsActive",
          },
        },
      },
      clientFinishRegistration: {
        entry: assign(({ context, event }) => {
          return event.type ===
            "xstate.after(animationStepDelay)#form.clientFinishRegistration"
            ? { animationStep: context.animationStep + 1 }
            : { animationStepDelays: [2000, 2000], animationStep: 0 };
        }),
        on: {
          START_LOGIN: {
            actions: ["activateAutoplay"],
            target: "clientStartLogin",
          },
        },
        after: {
          animationStepDelay: {
            target: "clientFinishRegistration",
            guard: "hasNextAnimationStep",
          },
        },
      },
      // login states
      clientStartLogin: {
        after: {
          2000: {
            target: "serverStartLogin",
            guard: "autoplayIsActive",
          },
        },
      },
      serverStartLogin: {
        after: {
          2000: {
            target: "clientFinishLogin",
            guard: "autoplayIsActive",
          },
        },
      },
      clientFinishLogin: {
        after: {
          2000: {
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
      hasNextAnimationStep: ({ context }) =>
        context.animationStep < context.animationStepDelays.length,
    },
    actions: {
      deactivateAutoplay: assign(() => {
        return { autoplay: false };
      }),
      activateAutoplay: assign(() => {
        return { autoplay: true };
      }),
    },
    delays: {
      animationStepDelay: ({ context }) => {
        return context.animationStepDelays[context.animationStep];
      },
    },
  }
);

export const InteractiveForm = () => {
  const [state, send] = useActor(formMachine);
  const [username, setUsername] = useState("jane@example.com");
  const [password, setPassword] = useState("123456");

  const clientIsActive =
    state.matches("clientStartRegistration") ||
    state.matches("clientFinishRegistration");
  const serverIsActive = state.matches("serverCreateRegistrationResponse");

  const typeSpeed = 80;

  return (
    <div className="mx-auto max-w-[67.5rem]">
      <div className="flex gap-4 mt-10">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            send({ type: "START_REGISTRATION", username, password });
          }}
          className="flex gap-4"
        >
          <input
            type="text"
            placeholder=""
            value={username}
            onChange={(event) => {
              setUsername(event.target.value);
            }}
            disabled={!state.matches("initial")}
            className="h-12 min-w-[5rem] px-4 border border-gray-300 rounded"
          />
          <input
            type="password"
            placeholder="******"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            disabled={!state.matches("initial")}
            className="h-12 min-w-[5rem] px-4 border border-gray-300 rounded"
          />
          <Button
            type="submit"
            disabled={!state.matches("initial")}
            variant="primary"
          >
            Register
          </Button>
        </form>

        <Button
          disabled={state.matches("initial")}
          onClick={() => {
            setUsername("");
            setPassword("");
            send({ type: "RESET_REGISTRATION" });
          }}
          variant="secondary"
        >
          Reset
        </Button>
      </div>

      {/* --- component --- */}
      <div className="flex w-full my-6 h-[33rem] bg-palette-honey/30 rounded-3xl overflow-hidden">
        {/* --- cli --- */}
        <div className="w-2/6 min-w-[22rem] h-full bg-black font-mono text-md">
          {/* tabs => client / server */}
          <div className="flex items-center gap-4 h-12 mr-9 px-8 border-b border-gray-800/50">
            <div className="flex items-center px-3 rounded-full bg-palette-honey text-black">
              Client
            </div>
            <div className="flex items-center px-3 rounded-full text-gray-200">
              Server
            </div>
          </div>
          {/* content */}
          <div className="py-4 px-6 h-full overflow-y-scroll text-gray-200">
            {state.matches("initial") && <div>Submit the registration </div>}
            {state.matches("clientStartRegistration") && (
              <div>
                <TypeAnimation
                  sequence={[
                    "Reg Step 1 - Request Reg Step 1 - Request Reg Step 1 - Request",
                  ]}
                  speed={typeSpeed}
                  cursor={false}
                />
                {state.context.animationStep >= 1 && (
                  <div>
                    Created registration request:{" "}
                    {
                      state.context.clientStartRegistrationData
                        .registrationRequest
                    }
                  </div>
                )}
                {state.context.animationStep >= 2 && (
                  <TypeAnimation
                    sequence={["Sending …"]}
                    speed={typeSpeed}
                    cursor={false}
                  />
                )}
              </div>
            )}
            {state.matches("serverCreateRegistrationResponse") && (
              <div>
                <TypeAnimation
                  sequence={[
                    "Step 2 - Something happens and something else and something else and wow ...",
                  ]}
                  speed={typeSpeed}
                  cursor={false}
                />
                {state.context.animationStep >= 1 && (
                  <div>
                    Created registration response:{" "}
                    {
                      state.context.serverCreateRegistrationResponseData
                        .registrationResponse
                    }
                  </div>
                )}
                {state.context.animationStep >= 2 && (
                  <TypeAnimation
                    sequence={["Sending …"]}
                    speed={typeSpeed}
                    cursor={false}
                  />
                )}
              </div>
            )}
            {state.matches("clientFinishRegistration") && (
              <div>
                <TypeAnimation
                  sequence={[
                    "Step 3 - Something happens and something else and something else and wow ...",
                  ]}
                  speed={typeSpeed}
                  cursor={false}
                />
                {state.context.animationStep >= 1 && (
                  <div>
                    export_key:
                    {state.context.clientFinishRegistrationData.exportKey}
                  </div>
                )}
                {state.context.animationStep >= 2 && (
                  <TypeAnimation
                    sequence={["Sending back …"]}
                    speed={typeSpeed}
                    cursor={false}
                  />
                )}
              </div>
            )}

            {/* login */}
            {state.matches("clientStartLogin") && (
              <div>
                <div>Log Step 1 - client Start</div>
                <div>
                  Something happens and something else and something else and
                  wow ...
                </div>
                <div>
                  startLoginRequest:
                  {state.context.clientStartLoginData.startLoginRequest}
                </div>
                <div>Sending back …</div>
              </div>
            )}
            {state.matches("serverStartLogin") && (
              <div>
                <div>Log Step 2 - server Start</div>
                <div>
                  Something happens and something else and something else and
                  wow ...
                </div>{" "}
                <div>
                  loginResponse:
                  {state.context.serverStartLoginData.loginResponse}
                </div>
                <div>Sending back …</div>
              </div>
            )}
            {state.matches("clientFinishLogin") && (
              <div>
                <div>Log Step 3 - client Finish</div>
                <div>
                  Something happens and something else and something else and
                  wow ...
                </div>{" "}
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
                <div>Log Step 4 - server Finish</div>
                <div>
                  Something happens and something else and something else and
                  wow ...
                </div>{" "}
                <div>
                  sessionKey:
                  {state.context.serverFinishLoginData.sessionKey}
                </div>
                <div>Sending back …</div>
              </div>
            )}
          </div>
        </div>
        {/* --- animation area --- */}
        <div className="svg-register flex items-center justify-center grow"></div>
      </div>

      <div className="flex gap-4">
        <Button
          disabled={state.matches("initial")}
          onClick={() => {
            send({ type: "GO_TO_STEP_CLIENT_START_REGISTRATION" });
          }}
          variant="primary"
        >
          Step 1
        </Button>
        <Button
          disabled={state.matches("initial")}
          onClick={() => {
            send({ type: "GO_TO_STEP_SERVER_CREATE_REGISTRATION_RESPONSE" });
          }}
          variant="primary"
        >
          Step 2
        </Button>
        <Button
          disabled={state.matches("initial")}
          onClick={() => {
            send({ type: "GO_TO_STEP_CLIENT_FINISH_REGISTRATION" });
          }}
          variant="primary"
        >
          Step 3
        </Button>

        <Button
          disabled={!state.matches("clientFinishRegistration")}
          onClick={() => {
            send({ type: "START_LOGIN" });
          }}
          variant="secondary"
        >
          Start Login
        </Button>
      </div>
      <div className="my-4">Current step: {state.value.toString()}</div>
    </div>
  );
};
