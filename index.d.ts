export interface IOptions {
  root?: HTMLElement;
  skipModifierKeys?: boolean;
  skipDownload?: boolean;
  skipTargetBlank?: boolean;
  skipExternal?: boolean;
  skipMailTo?: boolean;
  skipOtherOrigin?: boolean;
  skipFragment?: boolean;
  preventDefault?: boolean;
  skipFilter?: (link: HTMLAnchorElement) => void;
}

export function unhyjack(): void;

export function hyjack(callback: (link: HTMLAnchorElement, event: MouseEvent) => any): () => void;
export function hyjack(option: IOptions, callback: (link: HTMLAnchorElement, event: MouseEvent) => any): () => void;

export as namespace linkHijacker;
