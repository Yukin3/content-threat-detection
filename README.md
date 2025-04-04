# 📖 CyberSentry

## 📌 App Overview

This **Threat Detection Application** leverages an AI model to allows users to:

- **Detect** Quranic text and **Flag** Islamic content.
- Receive **notifications** on involving potential cyberattacks, or threats public safety.
- Accurately scan for threats within **TWEETS**, **TEXTS** and **EMAILS**.

This app was built using **Typescript** for the frontend, **Flask** + **Express** for the backend, and is currently using a custom built Natural Language Processing model.

**Repo stats**
![GitHub deployments](https://img.shields.io/github/deployments/Yukin3/content-threat-detection/production) [![wakatime](https://wakatime.com/badge/github/Yukin3/content-threat-detection.svg)](https://wakatime.com/badge/github/Yukin3/content-threat-detection)
![GitHub contributors](https://img.shields.io/github/contributors/Yukin3/content-threat-detection) ![GitHub commit activity](https://img.shields.io/github/commit-activity/w/Yukin3/content-threat-detection)

---

## 🛠️ Tech Stack

- **Frontend:** React.js, Typescript
- **Backend:** Express, Flask
- **ML Model:** PyTorch, Keras

![GitHub language count](https://img.shields.io/github/languages/count/Yukin3/content-threat-detection) ![GitHub top language](https://img.shields.io/github/languages/top/Yukin3/content-threat-detection)

---

## 🚀 Installation Guide (Local Development)

### **1️⃣ Clone the Repository**

```bash
  git clone https://github.com/Yukin3/content-threat-detection.git
  cd content-threat-detection
```

### **2️⃣ Set Up Environment Variables**

To run the **backend** server for this project, you'll need to configure a few environment variables. CD into the **server** folder and create a `.env` file:

```bash
cd backend
touch .env
```

Copy this `.env.example` snippet to your actual `.env` file. Replace "sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" with your actaul OpenAI API key:

```bash
OPENAI_API_KEY=sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx:
```

Make sure **not to push the `.env` file** to github.

### **3️⃣ Install Dependencies**

#### **Frontend**

```bash
cd client
npm install
```

#### **Backend**

```bash
cd server
npm install
```

### **4️⃣ Start the Development Servers**

#### **Backend (Express Server)**

```bash
cd server
npm run dev
```

#### **Frontend (Vite React App)**

```bash
cd client
npm run dev
```

The frontend should be available at `http://localhost:5173/` and the backend available at `http://localhost:8080/`.

---

## ⚡ Running Generation Scripts

To fetch and populate the **in-memory sample datasets** with data from the full dataset:

```bash
cd scripts
python3 sample_generator.py
```

This script will:

- Load the **Tweets dataset for cyberattack detection** dataset.
- **Create a sample** with a mix of 25 relevant and irrelevant tweets.
- \*Parse text and rewrite in **Javascript-friendly** format.
- Export formated sample dataset as a usable **Typescript** file.

Rerun script if there's a need to increase the size of the sample set. After each run go to the **in-memory sample tweets** by doing:

```bash
cd src
cd data
cd sampleTweets.ts
```

from the `client` directory and appending the newly generated sample to the in the existing one in `sampleTweets.ts`.

---

## 💭 Contributing

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature-name`)
3. **Commit your changes** (`git commit -m "Added new feature"`)
4. **Push to the branch** (`git push origin feature-name`)
5. **Create a Pull Request**

---

## 📝 Notes

> [!NOTE]
> The `OPENAI_API_KEY` environment variable must be set in order for the backend to behave as expected.
> Create an API key [here](https://platform.openai.com/api-keys) and store it in your backend `.env` file.
> Then restart your backend server ensuring the `.env` is configured correctly.

- If you run into thie message- `OpenAI API error 429: "You exceeded your current quota, please check your plan and billing details`- you need to **upgrade** your account to **paid** and **create a NEW** API key. (If you already have a paid account, you may check for insufficient balance and add funds).

📢 **For any issues, reach out via GitHub Issues!** 🚀
