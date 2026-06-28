type TransitionCallback = (id: string) => void;

let callback: TransitionCallback | null = null;

export function registerTransition(cb: TransitionCallback) {
  callback = cb;
}

export function transitionTo(id: string) {
  callback?.(id);
}