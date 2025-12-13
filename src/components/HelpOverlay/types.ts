export interface HelpContext {
  isRandomized: boolean;
  showSelectionScreen: boolean;
  echoEnabled: boolean;
  hasPlayedChars: boolean;
  hasDisabledChars: boolean;
}

export interface ConditionalContent {
  condition: (context: HelpContext) => boolean;
  content: string;
  isWarning?: boolean;
}

export interface HelpItem {
  id: string;
  title: string;
  icon: string;
  description: string;
  conditionalContent?: ConditionalContent[];
}
