import { Finger, FingerCurl, FingerDirection, GestureDescription } from 'fingerpose';

export const Letter_B = new GestureDescription('B');

// Thumb:
Letter_B.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
Letter_B.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);

// All other fingers:
for(let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
  Letter_B.addCurl(finger, FingerCurl.NoCurl, 1.0);
  Letter_B.addDirection(finger, FingerDirection.VerticalUp, 1.0);
}