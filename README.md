<div align="center">

# Hi, I'm Ammara Tahir 👋
### AI/ML Engineer · NLP & LLM Systems · Computer Vision · Generative AI
**Islamabad, Pakistan** · Open to remote & on-site roles (PK · UAE · Global)

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=flat&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/ammara-tahir-991258348/)
[![HuggingFace](https://img.shields.io/badge/HuggingFace-FFD21E?style=flat&logo=huggingface&logoColor=black)](https://huggingface.co/tahirammar)
[![Email](https://img.shields.io/badge/Email-EA4335?style=flat&logo=gmail&logoColor=white)](mailto:tahirammara9@gmail.com)

</div>

---

## About me

Applied AI Engineer with hands-on experience designing and shipping **6 production AI systems** across 4 internships — covering the full lifecycle from data preprocessing to live deployment.

I specialise in **LLM systems, RAG pipelines, and multi-agent architectures**, with strong foundations in classical ML, computer vision, and NLP. I care about building things that actually work in production, not just in notebooks.

- 🔭 Currently building: full-stack AI-powered web applications
- 🌱 Learning: PyTorch, Docker/MLOps, AWS Cloud
- 🔬 Researching: shortcut learning and dataset quality in audio deepfake detection
- 💬 Ask me about: LangGraph, RAG pipelines, Whisper ASR, audio deepfake detection, FastAPI, NLP from scratch
- 📫 Reach me: tahirammara9@gmail.com

---

## Research

### 🔊 Acoustic Shortcuts in Audio Deepfake Datasets
> Preprint in preparation · Python · PyTorch · Whisper · scikit-learn · librosa

Audio deepfake detectors often report near-perfect scores on the dataset they were trained on. I audited **ten audio deepfake datasets on Hugging Face** and showed that many of these scores can come from recording artefacts rather than real detection:

- Seven simple non-semantic features (silence, loudness, duration, zero-crossing rate) separate real from fake clips in **6 of 10 datasets**, and adding storage-format features (sampling rate, bandwidth, noise floor) makes **all 10** separable.
- These cues **do not transfer**: a model trained on one dataset averages chance-level AUC (0.50) on the others.
- A frozen Whisper detector scores **≥ 0.996 AUC in-domain** but only **0.57–0.79 on ASVspoof 2019 LA**, and counterfactual tests show it treats loudness as evidence of fakeness.

### 🛠️ [ShortcutScope](https://github.com/Ammaratahir252/shortcutscope) — open-source dataset audit tool
> Python · Hugging Face Datasets · scikit-learn

Checks whether an audio deepfake dataset can be "solved" from simple acoustic properties before you train on it. Runs on a CPU, works with any Hugging Face or folder dataset, prints the label mapping it uses, and reports cross-validated AUCs with confidence intervals. Includes the full, reproducible experiment pipeline behind the paper.

---

## Featured projects

### 🤖 HumSabaq AI — Multi-Agent LLM Platform
> Python · LangGraph · LLaMA 3.2 · Faster-Whisper · Flask · MongoDB Atlas

Production LLM platform with three integrated systems:
- **RAG Document Q&A** — ingests PDF/DOCX/XLSX, answers questions with source grounding
- **4-Agent SmartVoice Pipeline** — noise reduction → diarization → Whisper ASR → LLM summarisation + TTS
- **AI Timetable Manager** — persistent session memory via MongoDB Atlas

---

### 🏥 MedShare — AI Healthcare App
> React Native · Computer Vision · OCR · MongoDB Atlas

Custom CV + OCR models that parse prescription images for medicine names, dosages, and expiry dates. **Eliminated 90% of manual data entry** for healthcare workers.

---

### 📧 Email Spam Classifier
> Python · Flask · TF-IDF · scikit-learn · Naive Bayes / LR / SVM

**94% classification accuracy** using bigram TF-IDF features. Flask-deployed with a live metrics dashboard. End-to-end pipeline: EDA → feature engineering → hyperparameter tuning → deployment.

---

### 💬 AI Customer Support Chatbot
> Python · Flask · NLTK · TF-IDF · Cosine Similarity

Built entirely from scratch — no pre-trained models. 12-category intent recognition via cosine similarity, served via a REST API with session management.

---

### 🌐 Lead Generation Platform
> Python · FastAPI · React · Netlify · HuggingFace Spaces

Full-stack AI-powered lead generation web app. Backend deployed on HuggingFace Spaces, frontend on Netlify. End-to-end ownership from architecture to live deployment.

---

## Tech stack

**Languages**

![Python](https://img.shields.io/badge/Python-3776AB?style=flat&logo=python&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![SQL](https://img.shields.io/badge/SQL-4479A1?style=flat&logo=mysql&logoColor=white)

**ML / AI**

![TensorFlow](https://img.shields.io/badge/TensorFlow-FF6F00?style=flat&logo=tensorflow&logoColor=white)
![Keras](https://img.shields.io/badge/Keras-D00000?style=flat&logo=keras&logoColor=white)
![scikit-learn](https://img.shields.io/badge/scikit--learn-F7931E?style=flat&logo=scikitlearn&logoColor=white)
![OpenCV](https://img.shields.io/badge/OpenCV-5C3EE8?style=flat&logo=opencv&logoColor=white)
![HuggingFace](https://img.shields.io/badge/HuggingFace-FFD21E?style=flat&logo=huggingface&logoColor=black)
![PyTorch](https://img.shields.io/badge/PyTorch-EE4C2C?style=flat&logo=pytorch&logoColor=white)
![librosa](https://img.shields.io/badge/librosa-audio-4B8BBE?style=flat)

**LLM / GenAI**

![LangGraph](https://img.shields.io/badge/LangGraph-1C3C3C?style=flat&logo=langchain&logoColor=white)
![LLaMA](https://img.shields.io/badge/LLaMA_3.2-0467DF?style=flat&logo=meta&logoColor=white)
![Whisper](https://img.shields.io/badge/Whisper_ASR-412991?style=flat&logo=openai&logoColor=white)

**Backend / Deployment**

![Flask](https://img.shields.io/badge/Flask-000000?style=flat&logo=flask&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=flat&logo=fastapi&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat&logo=docker&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=mongodb&logoColor=white)

---

## Stats

![Profile Views](https://komarev.com/ghpvc/?username=Ammaratahir252&color=0e75b6&style=flat&label=Profile+views)
![GitHub followers](https://img.shields.io/github/followers/Ammaratahir252?style=flat&label=Followers)

<div align="center">

*Open to junior AI/ML Engineer, NLP Engineer, ML Developer and research roles.*
*Available for remote work globally and on-site in Pakistan or UAE.*

</div>
