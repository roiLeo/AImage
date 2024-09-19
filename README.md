# AImage

A web interface powered by [Replicate](https://replicate.com/) to generate and edit images using AI.

<details>
  <summary>Screenshot</summary>
  
  ![Screenshot 2024-09-19 at 10-35-13 AImage](https://github.com/user-attachments/assets/63ffa9d8-ec69-46e7-b5d6-c481c57771aa)

</details>

## Features

- Generate Image using AI prompt

## Tech Stack

- **Framework**: [Nuxt](https://nuxt.com/)
- **AI**: [Replicate](https://replicate.com/)
- **Gaussian**: [Three.js](https://threejs.org/)
- **UI Library**: [nuxt/ui](https://ui.nuxt.com/)

## Getting Started

Make sure to install the dependencies with [pnpm](https://pnpm.io/installation#using-corepack)

### 1. Clone the Repo

Start by cloning this repo to your local machine and navigating into the directory.

```bash
git clone https://github.com/roiLeo/AImage
cd AImage
```

### 2. Install Dependencies

Then, install the project dependencies:

```bash
pnpm install
```

### 3. Set Environment Variables

Copy the `.env.example` file to `.env`:

```bash
cp .env.example .env
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
pnpm dev
```

## Production

Build the application for production:

```bash
pnpm build
```
