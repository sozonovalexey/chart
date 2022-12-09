export interface HasSetStep {
  setStep: (step: number | ((prevStep: number) => number)) => void;
}

export type Coordinates = {
  x: number;
  y: number;
};
