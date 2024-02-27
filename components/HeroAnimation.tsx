import { useActor } from "@xstate/react";
import cn from "clsx";
import { assign, setup } from "xstate";
import { ClientServer } from "./ClientServer";

const formMachine = setup({
  guards: {
    hasNextAnimationStep: ({ context }) => {
      return context.animationStep < context.animationStepDelays.length;
    },
    hasAnimationFinished: ({ context }) => {
      return context.animationStep === context.animationStepDelays.length;
    },
  },
  delays: {
    animationStepDelay: ({ context }) => {
      return context.animationStepDelays[context.animationStep];
    },
  },
}).createMachine({
  /** @xstate-layout N4IgpgJg5mDOIC5QAswCcD2BBAdgSwFsBDAFzwxwDoBjAGzzBxIGUSi0SAlMKPWEtKXI4AxAG0ADAF1EoAA4ZYeMhVkgAHogAsARgDslAMwBOPTp3GArFYBMl6wDYANCACeiHZYAclB1r96XsYOXpb6WgC+ES6omLiEQhQ09IwsbBzcvPyCKqLq-KRglEQAZiToABRE+MS5rGByACJgtESuAJQisdg1iVR0DEys7Fw8fAJ9kjJIIApKuWqaCFo2Lu4IXjpGNjbGOoZaxqE6WoY6UTHoPQm5lLDoAG7oAMJoYIWZ4znC3LAKOPdxNI1HNlMJFohjFDfIYHA49CY-F49DYdGsPAjfFC-PDUSt9HoLiBuvFasI7o8Xm8PmNsn1fv9Afk2OVimVKtUbsJ6k0Wm1OiTerd7mgnmhXu9yp86bkGRR7lMQYowaoZksHDYtJQbCZ7KcHMEdA5DOiEMEjHoHBJNnYTjovH4iYKuUkBqkAGJ4fCwZDSia5ETMwps8poKpC7nlXmtDpdK6kvrJQYkT3e320-3CRUzUELNUeGwSByULR6PbWhHGHU603mLYrKuGPSWK06u1RaIgHAYCBwNTOsmq+TKvOgJYAWmcbkQk6d8YjrpSQ3SoyymaHsxH4PzCB0hZL5i0lkLEgkzZMelrhkMlBOZjOBsOR0Mc7iC6oIrFEppa++FDlAJgEq8zbmOiAOJYBiWGegReBIxhNg4Rq1loPgnrsxhaKWxgSDYjqdgOiZukwqZ8Omv59MBKo4BCu42JsRibEee5HAa+i1sa2qWAcuKnnBei4R2ERAA */
  id: "heroAnimation",

  context: {
    autoplay: true,
    opaqueServerSetup: null,
    username: null,
    password: null,
    // animation
    animationStep: 0,
    animationStepDelays: [],
    sendData: false,
  },

  states: {
    clientStartRegistration: {
      entry: assign(({ context, event }) => {
        // notice that animationStepDelays.length + 1 needs to match with
        // the amount of animationSteps for each registration/login state
        // otherwise some steps might never be reached
        // example: steps 0 - 4 => 5 steps => animationStepDelays.length == 4
        return event.type ===
          "xstate.after.animationStepDelay.heroAnimation.clientStartRegistration"
          ? {
              animationStep: context.animationStep + 1,
              sendData: context.animationStep === 3,
            }
          : {
              animationStepDelays: [2500, 1500, 1800, 1500, 1000],
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
        guard: "hasAnimationFinished",
      },
    },
    serverCreateRegistrationResponse: {
      entry: assign(({ context, event }) => {
        const result =
          event.type ===
          "xstate.after.animationStepDelay.heroAnimation.serverCreateRegistrationResponse"
            ? {
                animationStep: context.animationStep + 1,
                sendData: context.animationStep === 3,
              }
            : {
                animationStepDelays: [500, 1500, 1500, 500, 1000],
                animationStep: 0,
                sendData: false,
              };
        return result;
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
        guard: "hasAnimationFinished",
      },
    },
    clientFinishRegistration: {
      entry: assign(({ context, event }) => {
        return event.type ===
          "xstate.after.animationStepDelay.heroAnimation.clientFinishRegistration"
          ? {
              animationStep: context.animationStep + 1,
              sendData: context.animationStep === 4,
            }
          : {
              animationStepDelays: [500, 3000, 2400, 2000, 1000, 3000],
              animationStep: 0,
              sendData: false,
            };
      }),
      after: {
        animationStepDelay: {
          target: "clientFinishRegistration",
          reenter: true,
          guard: "hasNextAnimationStep",
        },
      },
      always: {
        target: "clientStartRegistration",
        guard: "hasAnimationFinished",
      },
    },
  },

  initial: "clientStartRegistration",
});

export const HeroAnimation = () => {
  const [state, send] = useActor(formMachine);

  const clientIsActive =
    state.matches("clientStartRegistration") ||
    state.matches("clientFinishRegistration");
  const serverIsActive = state.matches("serverCreateRegistrationResponse");

  const fadeInGraph =
    (state.matches("clientStartRegistration") &&
      state.context.animationStep >= 1 &&
      state.context.animationStep < 3) ||
    (state.matches("serverCreateRegistrationResponse") &&
      state.context.animationStep >= 1 &&
      state.context.animationStep < 3);

  return (
    <div className="mx-auto max-w-[67.5rem] text-left">
      {/* --- component --- */}
      <div
        id="OpaqueAnimation"
        className={cn(
          "flex flex-col md:flex-row w-full my-6 h-full bg-white dark:bg-gray-200 rounded-2xl overflow-hidden",
          serverIsActive && "server-active",
          clientIsActive && "client-active"
        )}
      >
        {/* --- animation area --- */}
        <div className="h-full px-6 md:py-4 lg:py-10 svg-register flex items-center justify-center grow">
          <ClientServer
            serverActive={serverIsActive}
            clientActive={clientIsActive}
            animateForm={
              state.matches("clientStartRegistration") &&
              state.context.animationStep === 0
            }
            animateServer={
              (serverIsActive && fadeInGraph) ||
              (state.context.animationStep >= 1 &&
                state.context.animationStep <= 2)
            }
            animateElliptical={
              (state.matches("clientStartRegistration") &&
                state.context.animationStep === 2) ||
              (state.matches("serverCreateRegistrationResponse") &&
                state.context.animationStep === 2)
            }
            animateEnvelope={
              state.matches("clientFinishRegistration") &&
              state.context.animationStep >= 1 &&
              state.context.animationStep <= 4
            }
            fadeInGraph={fadeInGraph}
            isFirstStep={state.matches("clientStartRegistration")}
            className={cn(
              !(
                state.matches("clientStartRegistration") &&
                state.context.animationStep < 3
              ) && "connect",
              clientIsActive && state.context.sendData && "send-to-client",
              serverIsActive && state.context.sendData && "send-to-server",
              state.matches("clientFinishRegistration") &&
                state.context.animationStep >= 1 &&
                "draw-line-paper",
              state.matches("clientFinishRegistration") &&
                state.context.animationStep >= 2 &&
                "seal-paper",
              state.matches("clientFinishRegistration") &&
                state.context.animationStep >= 3 &&
                "enclose",
              state.matches("clientFinishRegistration") &&
                state.context.animationStep === 4 &&
                "send-envelope"
            )}
          />
        </div>
      </div>
    </div>
  );
};
