# FingerSpell

FingerSpell is an application enabling real-time learning and practice of American Sign Language. It utilizes a model trained on an extensive dataset of hand posture images corresponding to each alphabet. Currently, it achieves 85% accuracy in recognizing all 26 letters.

## Tech Stack

- **React 19** - UI Library
- **Vite 7** - Build Tool & Dev Server
- **TypeScript** - Type Safety
- **TensorFlow.js** - Machine Learning
- **Handpose Model** - Hand Detection
- **Fingerpose** - Gesture Recognition
- **React Webcam** - Camera Access

## Getting Started

### Prerequisites

- Node.js 18+ (LTS recommended)
- npm or yarn

### Installation

```bash
cd fingerspell-vite
npm install
```

### Development

```bash
npm run dev
```

The app will open at `http://localhost:5173`

### Production Build

```bash
npm run build
npm run preview
```

## Deployment

This project is configured for Vercel deployment. Simply connect your repository to Vercel and it will automatically detect the Vite framework.

## Usage

1. Allow camera access when prompted
2. Position your hand clearly in front of the webcam
3. Make ASL letter signs with your hand
4. The app will detect and display the recognized letter

## American Sign Language Reference

The app recognizes all 26 letters of the ASL alphabet (A-Z).

## License

[MIT](https://choosealicense.com/licenses/mit/)
