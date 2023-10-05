import * as opaque from "@serenity-kit/opaque";
import { useActor } from "@xstate/react";
import { useState } from "react";
import { assign, createMachine, fromPromise } from "xstate";
import { Button } from "./Button";
import cn from "clsx";
import { Icon } from "./icon/Icon";
import { Input } from "./Input";
import { NavigationButton } from "./NavigationButton";
import FadeIn from "./FadeInChildren";
import { CliTypeWriter } from "./CliTypeWriter";
import { ClientServer } from "./ClientServer";

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
      sendData: false,
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
      GO_TO_STEP_CLIENT_START_LOGIN: {
        actions: ["deactivateAutoplay"],
        target: ".clientStartLogin",
      },
      GO_TO_STEP_SERVER_START_LOGIN: {
        actions: ["deactivateAutoplay"],
        target: ".serverStartLogin",
      },
      GO_TO_STEP_CLIENT_FINISH_LOGIN: {
        actions: ["deactivateAutoplay"],
        target: ".clientFinishLogin",
      },
      GO_TO_STEP_SERVER_FINISH_LOGIN: {
        actions: ["deactivateAutoplay"],
        target: ".serverFinishLogin",
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
            ? {
                animationStep: context.animationStep + 1,
                sendData: context.animationStep === 5,
              }
            : {
                // comment -> prompt -> comment -> comment long -> prompt -> request -> sending
                animationStepDelays: [2000, 3000, 2000, 4800, 1500, 3000],
                animationStep: 0,
                sendData: false,
              };
        }),
        after: {
          animationStepDelay: {
            target: "clientStartRegistration",
            guard: "hasNextAnimationStep",
          },
          5001: {
            target: "serverCreateRegistrationResponse",
            guard: "autoplayIsActive",
          },
        },
      },
      serverCreateRegistrationResponse: {
        entry: assign(({ context, event }) => {
          return event.type ===
            "xstate.after(animationStepDelay)#form.serverCreateRegistrationResponse"
            ? {
                animationStep: context.animationStep + 1,
                sendData: context.animationStep === 5,
              }
            : {
                // comment -> prompt -> comment -> comment long -> prompt -> request -> sending
                animationStepDelays: [2000, 2500, 3500, 4500, 1500, 1500],
                animationStep: 0,
                sendData: false,
              };
        }),
        after: {
          animationStepDelay: {
            target: "serverCreateRegistrationResponse",
            guard: "hasNextAnimationStep",
          },
          4501: {
            target: "clientFinishRegistration",
            guard: "autoplayIsActive",
          },
        },
      },
      clientFinishRegistration: {
        entry: assign(({ context, event }) => {
          return event.type ===
            "xstate.after(animationStepDelay)#form.clientFinishRegistration"
            ? {
                animationStep: context.animationStep + 1,
                sendData: context.animationStep === 6,
              }
            : {
                // comment -> prompt -> comment -> comment -> comment -> prompt -> request -> sending
                animationStepDelays: [
                  1000, 2500, 1500, 1500, 1500, 1500, 1500, 2500,
                ],
                animationStep: 0,
                sendData: false,
              };
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
          4000: {
            target: "clientStartLogin",
            guard: "autoplayIsActive",
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
  const [showLoginSteps, setShowLoginSteps] = useState(false);

  const notStarted =
    state.matches("waitingForOpaque") ||
    state.matches("initial") ||
    state.matches("generateRegistrationData");

  const clientIsActive =
    state.matches("clientStartRegistration") ||
    state.matches("clientFinishRegistration") ||
    state.matches("clientStartLogin") ||
    state.matches("clientFinishLogin");
  const serverIsActive =
    state.matches("serverCreateRegistrationResponse") ||
    state.matches("serverStartLogin") ||
    state.matches("serverFinishLogin");

  const isLastStepOfRegistration =
    state.matches("clientFinishRegistration") &&
    state.context.animationStep === 8;
  const inLogin =
    state.matches("clientStartLogin") ||
    state.matches("serverStartLogin") ||
    state.matches("clientFinishLogin") ||
    state.matches("serverFinishLogin");
  const loginIsReady = state.matches("clientFinishRegistration") || inLogin;

  return (
    <div className="mx-auto max-w-[67.5rem]">
      <div className="mt-10 flex flex-col items-center gap-3">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            send({ type: "START_REGISTRATION", username, password });
          }}
          className="w-full sm:w-8/12 md:w-fit flex gap-2 flex-col md:flex-row"
        >
          <Input
            type="text"
            placeholder="Choose a name"
            value={username}
            onChange={(event) => {
              setUsername(event.target.value);
            }}
            disabled={!state.matches("initial")}
          />
          <Input
            type="password"
            placeholder="Type in a password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            disabled={!state.matches("initial")}
          />
          <Button
            type="submit"
            disabled={!state.matches("initial") || !password || !username}
            variant="primary"
          >
            Register
          </Button>
        </form>
        <div className="flex gap-1 items-center text-text-tertiary dark:text-dark-text-tertiary">
          <Icon name="bard-fill-triple" className="opacity-60" />
          <p className="text-xs">
            Type in some credentials and see how the magic works.
          </p>
        </div>
      </div>

      {/* --- component --- */}
      <div
        id="OpaqueAnimation"
        className={cn(
          "flex flex-col md:flex-row w-full my-6 h-full md:h-[33rem] bg-gray-150 rounded-2xl overflow-hidden",
          serverIsActive && "server-active",
          clientIsActive && "client-active"
        )}
      >
        {/* --- cli --- */}
        <div
          id="CliWrapper"
          className="w-full md:w-[37%] min-w-[15rem] bg-black font-mono text-sm"
        >
          {/* tabs => client / server */}
          <div className="flex items-center gap-4 h-12 px-5 border-b border-gray-800/50">
            <div
              className={cn(
                "flex items-center py-1 px-3 rounded-full transition-all duration-500",
                clientIsActive ? "bg-palette-honey text-black" : "text-gray-200"
              )}
            >
              Client
            </div>
            <div
              className={cn(
                "flex items-center py-1 px-3 rounded-full transition-all duration-500",
                serverIsActive ? "bg-primary-300 text-black" : "text-gray-200"
              )}
            >
              Server
            </div>
          </div>
          {/* content */}
          <div className="h-[20rem] md:h-[30rem] py-5 px-4 overflow-y-auto text-gray-200">
            {notStarted && (
              <CliTypeWriter
                sequence={["Please submit the registration."]}
                comment
              />
            )}
            {state.matches("clientStartRegistration") && (
              <div className="flex flex-col gap-4">
                <CliTypeWriter
                  sequence={[
                    "The client types in their credentials and starts the registration process.",
                  ]}
                  comment
                />
                {state.context.animationStep >= 1 && (
                  <CliTypeWriter
                    sequence={["Generating registration-request ..."]}
                    prompt
                  />
                )}
                {state.context.animationStep >= 2 && (
                  <CliTypeWriter
                    sequence={[
                      "Using the OPRF a blind and a blinded-message are generated.",
                    ]}
                    comment
                  />
                )}
                {state.context.animationStep >= 3 && (
                  <CliTypeWriter
                    sequence={[
                      "The password, rather than sent directly, is transformed into a numeric value," +
                        " which is then used to move a randomly generated point on the elliptical curve, finally generating the registration-request.",
                    ]}
                    comment
                  />
                )}
                {state.context.animationStep >= 4 && (
                  <CliTypeWriter sequence={["Request generated: "]} prompt />
                )}
                {state.context.animationStep >= 5 && (
                  <div className="w-10/12 pl-6 text-color-actor">
                    {
                      state.context.clientStartRegistrationData
                        .registrationRequest
                    }
                  </div>
                )}
                {state.context.animationStep >= 6 && (
                  <CliTypeWriter sequence={["Sending ..."]} prompt />
                )}
              </div>
            )}
            {state.matches("serverCreateRegistrationResponse") && (
              <div className="flex flex-col gap-4">
                <CliTypeWriter
                  sequence={[
                    "The server processes the request beginning to generate it's response.",
                  ]}
                  comment
                />
                {state.context.animationStep >= 1 && (
                  <CliTypeWriter
                    sequence={["Generating registration-response ..."]}
                    prompt
                  />
                )}
                {state.context.animationStep >= 2 && (
                  <CliTypeWriter
                    sequence={[
                      "Using the OPRF the server calculates the response using\nthe request,\nhis public-key,\nan oprf-seed\nand the credential-identifier.",
                    ]}
                    comment
                  />
                )}
                {state.context.animationStep >= 3 && (
                  <CliTypeWriter
                    sequence={[
                      "The server uses the seed to generate the oprf-key, which is then used " +
                        " to move the point generated in the request even further on the elliptical curve, finally generating the registration-response.",
                    ]}
                    comment
                  />
                )}
                {state.context.animationStep >= 4 && (
                  <CliTypeWriter sequence={["Response generated: "]} prompt />
                )}
                {state.context.animationStep >= 5 && (
                  <div className="w-10/12 pl-6 text-color-actor">
                    {
                      state.context.serverCreateRegistrationResponseData
                        .registrationResponse
                    }
                  </div>
                )}
                {state.context.animationStep >= 6 && (
                  <CliTypeWriter sequence={["Sending ..."]} prompt />
                )}
              </div>
            )}
            {state.matches("clientFinishRegistration") && (
              <div className="flex flex-col gap-4 overflow-y-auto">
                <CliTypeWriter sequence={["The response ..."]} comment />
                {state.context.animationStep >= 1 && (
                  <CliTypeWriter
                    sequence={["Generating registration-record ..."]}
                    prompt
                  />
                )}
                {state.context.animationStep >= 2 && (
                  <CliTypeWriter
                    sequence={["Explain the paper generation (animate 'text')"]}
                    comment
                  />
                )}
                {state.context.animationStep >= 3 && (
                  <CliTypeWriter
                    sequence={[
                      "Explain the signature generation (animate signature and seal)",
                    ]}
                    comment
                  />
                )}
                {state.context.animationStep >= 4 && (
                  <CliTypeWriter
                    sequence={[
                      "Explain further (animate paper into envelope and close envelope)",
                    ]}
                    comment
                  />
                )}
                {state.context.animationStep >= 5 && (
                  <CliTypeWriter sequence={["Record generated: "]} prompt />
                )}
                {state.context.animationStep >= 6 && (
                  <div className="w-10/12 pl-6 text-color-actor">
                    {
                      state.context.clientFinishRegistrationData
                        .registrationRecord
                    }
                  </div>
                )}
                {state.context.animationStep >= 7 && (
                  <CliTypeWriter sequence={["Sending ..."]} prompt />
                )}
                {state.context.animationStep >= 8 && (
                  <CliTypeWriter
                    sequence={["Press 'Login' to continue"]}
                    comment
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
        <div className="h-[25rem] md:h-full px-10 svg-register flex items-end md:items-center justify-center grow">
          <ClientServer
            serverActive={serverIsActive}
            clientActive={clientIsActive}
            animateElliptical={
              (state.matches("clientStartRegistration") &&
                state.context.animationStep === 3) ||
              (state.matches("serverCreateRegistrationResponse") &&
                state.context.animationStep === 3)
            }
            fadeInGraph={
              (state.matches("clientStartRegistration") &&
                state.context.animationStep >= 2 &&
                state.context.animationStep < 4) ||
              (state.matches("serverCreateRegistrationResponse") &&
                state.context.animationStep >= 2 &&
                state.context.animationStep < 4)
            }
            isFirstStep={state.matches("clientStartRegistration")}
            className={cn(
              !(
                (state.matches("clientStartRegistration") &&
                  state.context.animationStep < 5) ||
                notStarted
              ) && "connect",
              clientIsActive && state.context.sendData && "send-to-client",
              serverIsActive && state.context.sendData && "send-to-server"
            )}
          />
        </div>
      </div>

      {/* padding needed so pulse effect of Button is visible */}
      <div className="flex gap-1.5 items-center -my-4 py-4 overflow-x-auto">
        <NavigationButton
          disabled={notStarted}
          onClick={() => {
            send({ type: "GO_TO_STEP_CLIENT_START_REGISTRATION" });
          }}
          active={state.matches("clientStartRegistration")}
        >
          Step 1
        </NavigationButton>
        <Icon name="arrow-right-s" className={cn(notStarted && "opacity-50")} />
        <NavigationButton
          disabled={notStarted}
          onClick={() => {
            send({ type: "GO_TO_STEP_SERVER_CREATE_REGISTRATION_RESPONSE" });
          }}
          active={state.matches("serverCreateRegistrationResponse")}
        >
          Step 2
        </NavigationButton>
        <Icon name="arrow-right-s" className={cn(notStarted && "opacity-50")} />
        <NavigationButton
          disabled={notStarted}
          onClick={() => {
            send({ type: "GO_TO_STEP_CLIENT_FINISH_REGISTRATION" });
          }}
          active={state.matches("clientFinishRegistration")}
        >
          Step 3
        </NavigationButton>
        <Icon name="arrow-right-s" className={cn(notStarted && "opacity-50")} />
        <NavigationButton
          disabled={!loginIsReady}
          onClick={() => {
            send({ type: "START_LOGIN" });
            setShowLoginSteps(true);
          }}
          variant="primary"
          active={isLastStepOfRegistration}
          pulse={isLastStepOfRegistration}
        >
          Login
        </NavigationButton>
        <FadeIn
          visible={showLoginSteps || inLogin}
          className="flex items-center gap-1.5"
          delay={80}
          transitionDuration={550}
          row
        >
          <Icon name="arrow-right-s" />
          <NavigationButton
            onClick={() => {
              send({ type: "GO_TO_STEP_CLIENT_START_LOGIN" });
            }}
            active={state.matches("clientStartLogin")}
          >
            Step 1
          </NavigationButton>
          <Icon name="arrow-right-s" />
          <NavigationButton
            onClick={() => {
              send({ type: "GO_TO_STEP_SERVER_START_LOGIN" });
            }}
            active={state.matches("serverStartLogin")}
          >
            Step 2
          </NavigationButton>
          <Icon name="arrow-right-s" />
          <NavigationButton
            onClick={() => {
              send({ type: "GO_TO_STEP_CLIENT_FINISH_LOGIN" });
            }}
            active={state.matches("clientFinishLogin")}
          >
            Step 3
          </NavigationButton>
          <Icon name="arrow-right-s" />
          <NavigationButton
            onClick={() => {
              send({ type: "GO_TO_STEP_SERVER_FINISH_LOGIN" });
            }}
            active={state.matches("serverFinishLogin")}
          >
            Step 4
          </NavigationButton>
        </FadeIn>
        <NavigationButton
          disabled={notStarted}
          onClick={() => {
            setUsername("");
            setPassword("");
            setShowLoginSteps(false);
            send({ type: "RESET_REGISTRATION" });
          }}
          className="ml-auto"
          iconName="reset"
        >
          Reset
        </NavigationButton>
      </div>
      {/* <div className="my-4">Current step: {state.value.toString()}</div> */}
    </div>
  );
};
