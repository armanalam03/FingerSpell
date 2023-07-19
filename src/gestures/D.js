import { Finger, FingerCurl, FingerDirection, GestureDescription } from 'fingerpose';

export const Letter_D = new GestureDescription('D');

// Thumb:
Letter_D.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);

// Index finger:
Letter_D.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
Letter_D.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);
Letter_D.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.8);
Letter_D.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.8);

// Other fingers:
for(let finger of [Finger.Middle, Finger.Ring, Finger.Pinky]) {
  Letter_D.addCurl(finger, FingerCurl.HalfCurl, 1.0);
}