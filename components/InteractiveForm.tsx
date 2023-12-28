import * as opaque from "@serenity-kit/opaque";
import { useActor } from "@xstate/react";
import cn from "clsx";
import { useState } from "react";
import { assign, fromPromise, setup } from "xstate";
import { and } from "xstate/guards";
import { Button } from "./Button";
import { CliTypeWriter } from "./CliTypeWriter";
import { ClientServer } from "./ClientServer";
import FadeIn from "./FadeInChildren";
import { Input } from "./Input";
import { NavigationButton } from "./NavigationButton";
import { Icon } from "./icon/Icon";

const formMachine = setup({
  actions: {
    deactivateAutoplay: assign(() => {
      return { autoplay: false };
    }),
    activateAutoplay: assign(() => {
      return { autoplay: true };
    }),
  },
  guards: {
    autoplayIsActive: ({ context }) => context.autoplay,
    hasNextAnimationStep: ({ context }) => {
      return context.animationStep < context.animationStepDelays.length;
    },
    hasAnimationFinished: ({ context }) =>
      context.animationStep === context.animationStepDelays.length,
  },
  delays: {
    animationStepDelay: ({ context }) => {
      return context.animationStepDelays[context.animationStep];
    },
  },
}).createMachine({
  /** @xstate-layout N4IgpgJg5mDOIC5QDMD2AnAtgYgOIHkB9AFSIGViBRABUIGEAZASUoDljCKBBAJQ58q4mFHl2JN8rANoAGALqJQAB1SwAlgBc1qAHaKQAD0QAWAEwAaEAE9EpgBwBmAHQBOFw4DsMgKwBGb3Z+3i4AviGWaFh4RKScVLRklDwAakn0AmKUhAJCImISrNmUZNSSibIKSCAq6lq6+kYIZpY2CL7tTjJ2Lh7epsbeMg4AbHbDpmERGDgEJOTx9MxsHABiTKzCABJFucSi4pIV+jWa2npVjc3WiMODTmYPPgGmAcOTIJEzMfM0iyzscV4HAY+CE0nkx1Up3qFxMFmuCA8Aycwxc3WGDjsHg8vjspje4Q+02icziv0SKTS3D4hBBYKOVROdXOoEu8NadmMMlcHhGWN8LmGvhkt3enxJsQov0Y-1W6y2tNB6wZyihzIacJaiHcwyc-U5wqCQx8YuJs0lCwpqR4hDWGzI2zpyohjLVZw1TXZiGFDl8Tj6vocmKDLm8A1NUQEiX4gmEe3yhxdqtq7thnq1TV8phRMlzDmC+p6HgjmCcAHcAIanHRQFYYfBKCsARwArmBsBBdGAnGodAA3VAAa27n3LVa0Nbr6AbzbbCF7A4AxhXmRUVdU3TDWYg+nY9TJjA5QzjjMMz8MM94r05ebyegFD8E7CWezpThWADbYakx3b7ArrkyqbbggnK6ne3ieGi3geLcdgZmYHgopBpgyL4DhdF0YwvjAOhgOgK5gDwYBQGosAaARzIACIrhW2CAZuLKGN6vreE4WbGC4p6cWenEIX4ThYmBIqDFiaEvouH5qGAOgaGQGgVugGjEaR5GUWc2AGORhFOBWyAaPhAAUFZvpgK5nPJYBKFRYAfhWVgAJTYKOknSbJ8mKcpJFkRR5m6AxKZbsxbTGP4TiBr0phRWYYEZi8xh6qYOK+KFMhohhBJTFgTiuTJckKUpKk+epuiadpBm6fpRmfpWViwE5LlSXlHmFd5al+ToAXQkxjS+OMe7CsMOJuMGWbwQiQbch4aI4i8sFdJimVEtlsD4X2+F0OgYCEUV7XMsRsAqDoq1lQpFV6QZ6DGaZHWWdZtn2Q10xOKt6Dregm3bQZu2+ftcBHatXXqmmuLCv6YbjEeWK9JiGZ2H6DimL6Qpcn1jgjC+r3vZ9O1tb9ZwHQD7ZaWd3YXdVH61fVznPVjG1bbjqn47ohO6IDSYboFPW2CKe6cZhqJQ8MxgZv4SHdMYvRokNOqSxJTWySsvZkQAFj9JU6N+xBAoq9Ic0BQWNP0Lw5medhof4xiOCLCIpdmMimFxfVXrmjhIvLbkaErb6wGreMa6dOnk1dJlqGZzJ3TZdmOTT2W5Yryu++rHVA8BwVRWl4UHsMB4yLBIYOKLQyuA7LhpZLwuoqiHt5d7qvJ8ygfnVVIeU-Z1ONZ7ddJ-7Kf64xHrG2xOdmxbYbW3FnhZ6FQtl3nxaEp3zUFRoDCoKRmsk0HLfXWHt0Gfd0dPXHCv5Z5a8b6nhu2ME4tBtFZcwT0F626iN7C6FqK5nbV41+5K8X17E3MmO8art2PqWeOZ8lKAM6v3Lmg9zYJU5JxLkowHbeDiqecKIwDyDERj4TEC8sqljpugFqq915AK3s3S6u9w4WQPlHR6sdSFrXwhQ2BV9uYIEdr6cKoxPC9D6EMG2rQBTZgcMYMwUVcQeHxIKZ8i9absPIQAqhm9yogLoWAuqECXqqM4Ro7hHpAx7kxLmdwiNhZjEwQifEe4XBi1uN4HOzjjB-y9onFWsDgGVR0TdCOTCHoxyXgnH2PjjHwO6qY-ECUy75gwgKPEXhC72JSq4JGdhAj4KGElTx3dIkbz8cHYybc9GsJyqfQpXDonAxAlInErh-D9FvklJGcUnH3FDGGSaIoHa+ExqompGiSmgMCYwqyzDQkqLevhEZl86lp0aPmNE9xFp4hQYMIak8kL4PkXggIvgPBYjCISHQqAIBwH0J8SECC0wAFoX6tCeZ0XM7yPkfOIctUslZqy1nrI2VsYA7kxLTFIqaGFpGBB8KMPEl4MKuDnkMXoKUhreBfMrLQn5QX1OCqMJC00zAEN5N0LiCEkrsV9CKUYxyiyhGUdlXC+FGbFQ6jRBSuLlnejzglHw8jP7+Hhmk1oiEqXChcNFVxnJQyeIoQ3NOBseEpUzihQYDtOReHJRNEUnQ-C+ixIeAU-gHBDLmR9Bm31e5-UOmzEFrp7kgWOcEFESTpXCjSsLUWQZ2KSxGDnfMB4zAMpIVUru3iFVBSVYPVC3I0IPExO0YW2JRbXnkclVK6URRyvURvLl19eFCl1D4fE+IBSnlEXFUwfoAhjGrZBQNjSzXvSMXmh1YKQKO2wYeKR5t8STU5FghKaMzCjFQhibNjLIHVO8bA-NPDEbTRROheGp4xj8uebYM8N4rZpTQiMI8GMp0GPNQs3s87TFCjjdNDCTjLZnjit0cKSVJWiScScpRYQgA */
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

        const finishLoginResult = opaque.client.finishLogin({
          clientLoginState,
          loginResponse,
          password,
        });

        if (!finishLoginResult) {
          throw new Error("Login failed");
        }

        const {
          finishLoginRequest,
          serverStaticPublicKey,
          sessionKey: sessionKeyClient,
        } = finishLoginResult;

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
          "xstate.after.animationStepDelay.form.clientStartRegistration"
          ? {
              animationStep: context.animationStep + 1,
              sendData: context.animationStep === 5,
            }
          : {
              // comment -> prompt -> comment -> comment long -> prompt -> request -> sending => NEXT
              animationStepDelays: [2500, 3000, 2000, 5000, 1500, 2500, 3000],
              animationStep: 0,
              sendData: false,
            };
      }),
      after: {
        animationStepDelay: {
          target: "clientStartRegistration",
          reenter: true,
          guard: "hasNextAnimationStep",
        },
      },
      always: {
        target: "serverCreateRegistrationResponse",
        guard: and(["autoplayIsActive", "hasAnimationFinished"]),
      },
    },
    serverCreateRegistrationResponse: {
      entry: assign(({ context, event }) => {
        return event.type ===
          "xstate.after.animationStepDelay.form.serverCreateRegistrationResponse"
          ? {
              animationStep: context.animationStep + 1,
              sendData: context.animationStep === 5,
            }
          : {
              // comment -> prompt -> comment -> comment long -> prompt -> request -> sending => NEXT
              animationStepDelays: [2000, 2500, 3500, 4900, 1500, 1500, 3000],
              animationStep: 0,
              sendData: false,
            };
      }),
      after: {
        animationStepDelay: {
          target: "serverCreateRegistrationResponse",
          reenter: true,
          guard: "hasNextAnimationStep",
        },
      },
      always: {
        target: "clientFinishRegistration",
        guard: and(["autoplayIsActive", "hasAnimationFinished"]),
      },
    },
    clientFinishRegistration: {
      entry: assign(({ context, event }) => {
        return event.type ===
          "xstate.after.animationStepDelay.form.clientFinishRegistration"
          ? {
              animationStep: context.animationStep + 1,
              sendData: context.animationStep === 6,
            }
          : {
              // comment -> prompt -> comment -> comment -> comment -> prompt -> request -> sending => NEXT
              animationStepDelays: [
                1000, 2500, 2500, 2500, 3500, 1500, 1500, 2500, 6000,
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
          reenter: true,
          guard: "hasNextAnimationStep",
        },
      },
      always: {
        target: "clientStartLogin",
        guard: and(["autoplayIsActive", "hasAnimationFinished"]),
      },
    },
    // login states
    clientStartLogin: {
      entry: assign(({ context, event }) => {
        return event.type ===
          "xstate.after.animationStepDelay.form.clientStartLogin"
          ? {
              animationStep: context.animationStep + 1,
              sendData: context.animationStep === 2,
            }
          : {
              // comment -> prompt -> request -> prompt => NEXT
              animationStepDelays: [1200, 2000, 1500, 3000],
              animationStep: 0,
              sendData: false,
            };
      }),
      after: {
        animationStepDelay: {
          target: "clientStartLogin",
          reenter: true,
          guard: "hasNextAnimationStep",
        },
      },
      always: {
        target: "serverStartLogin",
        guard: and(["autoplayIsActive", "hasAnimationFinished"]),
      },
    },
    serverStartLogin: {
      entry: assign(({ context, event }) => {
        return event.type ===
          "xstate.after.animationStepDelay.form.serverStartLogin"
          ? {
              animationStep: context.animationStep + 1,
              sendData: context.animationStep === 2,
            }
          : {
              // comment -> prompt -> response -> prompt => NEXT
              animationStepDelays: [1000, 2000, 1500, 3000],
              animationStep: 0,
              sendData: false,
            };
      }),
      after: {
        animationStepDelay: {
          target: "serverStartLogin",
          reenter: true,
          guard: "hasNextAnimationStep",
        },
      },
      always: {
        target: "clientFinishLogin",
        guard: and(["autoplayIsActive", "hasAnimationFinished"]),
      },
    },
    clientFinishLogin: {
      entry: assign(({ context, event }) => {
        return event.type ===
          "xstate.after.animationStepDelay.form.clientFinishLogin"
          ? {
              animationStep: context.animationStep + 1,
              sendData: context.animationStep === 4,
            }
          : {
              // comment -> prompt -> request -> prompt -> session-key -> prompt => NEXT
              animationStepDelays: [1000, 2000, 1500, 2000, 1500, 3000],
              animationStep: 0,
              sendData: false,
            };
      }),
      after: {
        animationStepDelay: {
          target: "clientFinishLogin",
          reenter: true,
          guard: "hasNextAnimationStep",
        },
      },
      always: {
        target: "serverFinishLogin",
        guard: and(["autoplayIsActive", "hasAnimationFinished"]),
      },
    },
    serverFinishLogin: {
      entry: assign(({ context, event }) => {
        return event.type ===
          "xstate.after.animationStepDelay.form.serverFinishLogin"
          ? {
              animationStep: context.animationStep + 1,
              sendData: context.animationStep === 2,
            }
          : {
              // comment -> prompt -> session-key
              animationStepDelays: [1000, 2000],
              animationStep: 0,
              sendData: false,
            };
      }),
      after: {
        animationStepDelay: {
          target: "serverFinishLogin",
          guard: "hasNextAnimationStep",
        },
      },
    },
  },

  initial: "waitingForOpaque",
});

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

  const fadeInGraph =
    (state.matches("clientStartRegistration") &&
      state.context.animationStep >= 2 &&
      state.context.animationStep < 4) ||
    (state.matches("serverCreateRegistrationResponse") &&
      state.context.animationStep >= 2 &&
      state.context.animationStep < 4);

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
    <div className="mx-auto max-w-[67.5rem] text-left">
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
          notStarted && "dark:bg-gray-150/90",
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
          <div className="h-[55vw] md:h-[30rem] py-5 px-4 overflow-y-auto text-gray-200">
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
                  <div className="w-10/12 pl-6 text-color-actor break-all">
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
                  <div className="w-10/12 pl-6 text-color-actor break-all">
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
                  <div className="w-10/12 pl-6 text-color-actor break-all">
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
              <div className="flex flex-col gap-4 overflow-y-auto">
                <CliTypeWriter
                  sequence={["Starting the Login sequence"]}
                  comment
                />
                {state.context.animationStep >= 1 && (
                  <CliTypeWriter
                    sequence={["Generating start-login-request ..."]}
                    prompt
                  />
                )}
                {state.context.animationStep >= 2 && (
                  <div className="w-10/12 pl-6 text-color-actor break-all">
                    {state.context.clientStartLoginData.startLoginRequest}
                  </div>
                )}
                {state.context.animationStep >= 3 && (
                  <CliTypeWriter sequence={["Sending ..."]} prompt />
                )}
              </div>
            )}
            {state.matches("serverStartLogin") && (
              <div className="flex flex-col gap-4 overflow-y-auto">
                <CliTypeWriter sequence={["Server starting"]} comment />
                {state.context.animationStep >= 1 && (
                  <CliTypeWriter
                    sequence={["Generating login-response ..."]}
                    prompt
                  />
                )}
                {state.context.animationStep >= 2 && (
                  <div className="w-10/12 pl-6 text-color-actor break-all">
                    {state.context.serverStartLoginData.loginResponse}
                  </div>
                )}
                {state.context.animationStep >= 3 && (
                  <CliTypeWriter sequence={["Sending ..."]} prompt />
                )}
              </div>
            )}
            {state.matches("clientFinishLogin") && (
              <div className="flex flex-col gap-4 overflow-y-auto">
                <CliTypeWriter sequence={["Client finish"]} comment />
                {state.context.animationStep >= 1 && (
                  <CliTypeWriter
                    sequence={["Generating finish-login-request ..."]}
                    prompt
                  />
                )}
                {state.context.animationStep >= 2 && (
                  <div className="w-10/12 pl-6 text-color-actor break-all">
                    {state.context.clientFinishLoginData.finishLoginRequest}
                  </div>
                )}
                {state.context.animationStep >= 3 && (
                  <CliTypeWriter sequence={["Session key: "]} prompt />
                )}
                {state.context.animationStep >= 4 && (
                  <div className="w-10/12 pl-6 text-color-actor break-all">
                    {state.context.clientFinishLoginData.sessionKey}
                  </div>
                )}
                {state.context.animationStep >= 5 && (
                  <CliTypeWriter sequence={["Sending ..."]} prompt />
                )}
              </div>
            )}
            {state.matches("serverFinishLogin") && (
              <div className="flex flex-col gap-4 overflow-y-auto">
                <CliTypeWriter sequence={["Server finish"]} comment />
                {state.context.animationStep >= 1 && (
                  <CliTypeWriter sequence={["Session Key: "]} prompt />
                )}
                {state.context.animationStep >= 2 && (
                  <div className="w-10/12 pl-6 text-color-actor break-all">
                    {state.context.serverFinishLoginData.sessionKey}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
        {/* --- animation area --- */}
        <div className="h-[55vw] md:h-full px-10 svg-register flex items-end md:items-center justify-center grow">
          <ClientServer
            serverActive={serverIsActive}
            clientActive={clientIsActive}
            animateForm={
              state.matches("clientStartRegistration") &&
              state.context.animationStep === 0
            }
            animateServer={
              (serverIsActive && fadeInGraph) ||
              (state.matches("serverStartLogin") &&
                state.context.animationStep >= 1 &&
                state.context.animationStep <= 2)
            }
            animateElliptical={
              (state.matches("clientStartRegistration") &&
                state.context.animationStep === 3) ||
              (state.matches("serverCreateRegistrationResponse") &&
                state.context.animationStep === 3)
            }
            animateEnvelope={
              state.matches("clientFinishRegistration") &&
              state.context.animationStep >= 2 &&
              state.context.animationStep <= 5
            }
            fadeInGraph={fadeInGraph}
            isFirstStep={state.matches("clientStartRegistration")}
            className={cn(
              !(
                (state.matches("clientStartRegistration") &&
                  state.context.animationStep < 5) ||
                notStarted
              ) && "connect",
              clientIsActive && state.context.sendData && "send-to-client",
              serverIsActive && state.context.sendData && "send-to-server",
              state.matches("clientFinishRegistration") &&
                state.context.animationStep >= 2 &&
                "draw-line-paper",
              state.matches("clientFinishRegistration") &&
                state.context.animationStep >= 3 &&
                "seal-paper",
              state.matches("clientFinishRegistration") &&
                state.context.animationStep >= 4 &&
                "enclose",
              state.matches("clientFinishRegistration") &&
                state.context.animationStep === 5 &&
                "send-envelope"
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
          disabled={!loginIsReady || inLogin}
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
            disabled={!showLoginSteps && !inLogin}
            onClick={() => {
              send({ type: "GO_TO_STEP_CLIENT_START_LOGIN" });
            }}
            active={state.matches("clientStartLogin")}
          >
            Step 1
          </NavigationButton>
          <Icon name="arrow-right-s" />
          <NavigationButton
            disabled={!showLoginSteps && !inLogin}
            onClick={() => {
              send({ type: "GO_TO_STEP_SERVER_START_LOGIN" });
            }}
            active={state.matches("serverStartLogin")}
          >
            Step 2
          </NavigationButton>
          <Icon name="arrow-right-s" />
          <NavigationButton
            disabled={!showLoginSteps && !inLogin}
            onClick={() => {
              send({ type: "GO_TO_STEP_CLIENT_FINISH_LOGIN" });
            }}
            active={state.matches("clientFinishLogin")}
          >
            Step 3
          </NavigationButton>
          <Icon name="arrow-right-s" />
          <NavigationButton
            disabled={!showLoginSteps && !inLogin}
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
