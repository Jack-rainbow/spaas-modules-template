// 规定message 格式
export declare class MessageParam {
  type: string;
  message: string;
}

export declare interface Message {
  (messageParam: MessageParam): void
}

declare module '@femessage/element-ui';
declare module '@femessage/element-ui/lib/transitions/collapse-transition';
