import { Finger, FingerCurl, FingerDirection, GestureDescription } from 'fingerpose';

// describe thumbs up gesture 👍
export const Letter_A = new GestureDescription('A');

// thumb:
// - curl: none (must)
// - direction vertical up (best)
// - direction diagonal up left / right (acceptable)
Letter_A.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
Letter_A.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);
Letter_A.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 0.9);
Letter_A.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 0.9);

// all other fingers:
// - curled (best)
// - half curled (acceptable)
// - pointing down is NOT acceptable
for(let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
  Letter_A.addCurl(finger, FingerCurl.FullCurl, 1.0);
  Letter_A.addCurl(finger, FingerCurl.HalfCurl, 0.9);
  Letter_A.addDirection(finger, FingerDirection.VerticalUp, 1.0);
  Letter_A.addDirection(finger, FingerDirection.DiagonalUpLeft, 0.9);
  Letter_A.addDirection(finger, FingerDirection.DiagonalUpRight, 0.9);
}

/* export default Letter_A; */