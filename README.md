# 🌐 My First DevOps Project — Fully Handled on Azure DevOps
###  CI/CD | Docker | Kubernetes | ArgoCD | Automation

###  Overview
This is my first **DevOps project**, where I implemented a complete **CI/CD pipeline** using **Azure DevOps** to automate the deployment of a **static HTML & CSS website**.

I created this project **from scratch**, including the entire **DevOps automation, pipeline setup, and deployment process**, from containerization to continuous delivery.

---

## 🧩 Tech Stack & Tools Used

| Category | Tools / Technologies |
|-----------|----------------------|
| **Version Control** | <img src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" width="20" align="center"/> **Git** &nbsp;&nbsp; <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" width="20" align="center"/> **GitHub** |
| **CI/CD Platform** | <img src="https://upload.wikimedia.org/wikipedia/commons/0/0e/Azure_DevOps_Logo.svg" width="20" align="center"/> **Azure DevOps** |
| **Containerization** | <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg" width="25" align="center"/> **Docker** |
| **Container Registry** | <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg" width="25" align="center"/> **Docker Hub** |
| **Infrastructure / Orchestration** | <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/kubernetes/kubernetes-plain.svg" width="25" align="center"/> **Kubernetes (local cluster & Azure AKS)** |
| **Deployment Automation** | <img src="https://argo-cd.readthedocs.io/en/stable/assets/argo.png" width="25" align="center"/> **ArgoCD** |
| **Pipeline Scripting** | <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bash/bash-original.svg" width="25" align="center"/> **Shell Script (Bash)** |
| **Agent Setup** | <img src="https://cdn-icons-png.flaticon.com/512/69/69524.png" width="22" align="center"/> **Self-Hosted Agent Pool (Local Machine)** |

---

## 🔁 Project Workflow

### ⚙️ DevOps Implementation Flow

<div align="center">
⚙️ DevOps Implementation Flow

🛠️ Created Dockerfile
Containerized the application

⬇️

🤖 Built CI Pipeline on Azure DevOps
Automated Build & Push process

⬇️

🐳 Used Docker Hub
Stored built images

⬇️

📜 Wrote Shell Script in Pipeline
Automatically updated image tags in Kubernetes manifests

⬇️

🚀 Configured CD using ArgoCD
Continuously monitored Kubernetes manifests

⬇️

💡 On every code change
Pipeline triggers automatically → New image deployed on Kubernetes cluster

</div>


---

## 🧱 Deployment Details

- **CI (Continuous Integration):**
  - Triggered automatically on changes in the `main` branch.
  - Built the Docker image and pushed it to **Docker Hub**.
  - Shell script updated Kubernetes manifest files (`deployment.yaml`, `service.yaml`) with the new image tag.

- **CD (Continuous Delivery):**
  - **ArgoCD** continuously monitored the Kubernetes manifests.
  - Whenever the image tag changed, ArgoCD automatically pulled and deployed the updated application to the cluster.

---

## 🖥️ Deployment Environments

✅ Local Kubernetes cluster (self-hosted)  
✅ Azure Kubernetes Service (AKS)

Both setups were successfully tested to ensure full automation and reliability.

---

## 💡 What I learned from this project

- Practical understanding of **CI/CD concepts**.  
- Hands-on experience with **Azure DevOps pipelines**, **Docker**, and **ArgoCD**.  
- Learned how to connect the full chain, from **code commit → deployment → auto-sync on Kubernetes**.  
- Gained confidence in setting up end-to-end automation using industry-grade tools.

---

## 🧭 Project Highlights

- 🔄 Fully automated CI/CD pipeline.
- 🧰 Used **self-hosted agents** for builds.
- 🐳 Built and pushed Docker images seamlessly.
- ⚡ Automated manifest updates using **shell scripting**.
- ☸️ Real-time deployments with **ArgoCD**.
- 🧠 Designed with scalability and learning in mind.

---

## 🙌 Closing Thoughts

This project gave me **hands-on exposure** to real-world DevOps workflows, connecting CI/CD automation, Kubernetes orchestration, and GitOps deployment tools.  

I’m continuously improving this setup and learning ways to integrate **cloud-native best practices** in future projects.

---


⭐ *If you liked this project or found it interesting, feel free to star it on GitHub!*
