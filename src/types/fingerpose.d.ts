declare module 'fingerpose' {
  export const Finger: {
    Thumb: number;
    Index: number;
    Middle: number;
    Ring: number;
    Pinky: number;
  };

  export const FingerCurl: {
    NoCurl: number;
    HalfCurl: number;
    FullCurl: number;
  };

  export const FingerDirection: {
    VerticalUp: number;
    VerticalDown: number;
    HorizontalLeft: number;
    HorizontalRight: number;
    DiagonalUpRight: number;
    DiagonalUpLeft: number;
    DiagonalDownRight: number;
    DiagonalDownLeft: number;
  };

  export class GestureDescription {
    constructor(name: string);
    addCurl(finger: number, curl: number, confidence: number): void;
    addDirection(finger: number, direction: number, confidence: number): void;
  }

  export class GestureEstimator {
    constructor(gestures: GestureDescription[]);
    estimate(landmarks: number[][], minConfidence: number): Promise<{
      gestures: Array<{
        name: string;
        confidence: number;
      }>;
      poseData: any;
    }>;
  }

  export const Gestures: {
    ThumbsUpGesture: GestureDescription;
    VictoryGesture: GestureDescription;
  };
}
