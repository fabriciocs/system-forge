export interface StageMenuItem {
  stage: string;
  label: string;
}

export function createStageMenuItem(stage: string, label: string): StageMenuItem {
  return { stage, label };
}
