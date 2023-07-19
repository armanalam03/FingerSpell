import { Finger, FingerCurl, FingerDirection, GestureDescription } from 'fingerpose';

export const Letter_C = new GestureDescription('C');

// Thumb:
Letter_C.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
Letter_C.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 1.0);
Letter_C.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 1.0);

// Index finger:
Letter_C.addCurl(Finger.Index, FingerCurl.HalfCurl, 1.0);
Letter_C.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);

// Other fingers:
for(let finger of [Finger.Middle, Finger.Ring, Finger.Pinky]) {
  Letter_C.addCurl(finger, FingerCurl.HalfCurl, 1.0);
}
