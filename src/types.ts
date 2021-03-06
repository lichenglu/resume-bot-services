import type { protos } from '@google-cloud/dialogflow-cx';

// https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3beta1/WebhookRequest
export type WebhookRequest =
  protos.google.cloud.dialogflow.cx.v3.WebhookRequest;

export type IValue = protos.google.protobuf.IValue

export enum WebhookResponseRichContextTypes {
  text = 'text',
  button = 'button',
  image = 'image',
  info = 'info',
  description = 'description',
  list = 'list',
  accordion = 'accordion',
  chips = 'chips',
  search = 'search',
}

// https://cloud.google.com/dialogflow/cx/docs/concept/integration/dialogflow-messenger#fulfillment
export interface WebhookResponse {
  fulfillmentResponse: {
    messages: Array<
      | {
          text: { text: string[] };
        }
      | {
          payload: {
            richContent: Array<
              {
                type: WebhookResponseRichContextTypes;
                text?: string | string[];
                [key: string]: any;
              }[]
            >;
          };
        }
    >;
  };
  pageInfo?: protos.google.cloud.dialogflow.cx.v3.IPageInfo | null;

  /** WebhookResponse sessionInfo */
  sessionInfo?: protos.google.cloud.dialogflow.cx.v3.ISessionInfo | null;

  /** WebhookResponse payload */
  payload?: protos.google.protobuf.IStruct | null;

  /** WebhookResponse targetPage */
  targetPage?: string | null;

  /** WebhookResponse targetFlow */
  targetFlow?: string | null;
}

export enum DialogflowCustomEvents {
  endSession = 'custom.end_session'
}

export enum HelpSeekingModes {
  solve = 'solve',
  recommend = 'recommend',
  search = 'search',
  summarize = 'summarize',
  correct = 'correct'
}

export enum HelpSeekingParams {
  helpSeekingMode = 'help_seeking_mode',
  latexEquation = 'latex_equation',
  passageForSummarization = 'passage'
}

export interface PineconeSearchResponse {
  results: any[],
  matches: {
    id: string,
    score: number,
    values: number[],
    metadata: object
  }[]
}