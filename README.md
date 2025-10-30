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

⚙️ DevOps Implementation Flow

<table style="width:100%; border-collapse:collapse; border:1px solid #444; border-radius:10px; background-color:#1e1e1e; color:#ddd; padding:12px;">
  <tr>
    <td style="padding:10px;">
      <strong>🛠️ Created Dockerfile</strong><br/>
      Containerized the application
    </td>
  </tr>

  <tr>
    <td style="padding:10px;">
      <strong>🤖 Built CI Pipeline on Azure DevOps</strong><br/>
      Automated Build & Push process
    </td>
  </tr>

  <tr>
    <td style="padding:10px;">
      <strong>🐳 Used Docker Hub</strong><br/>
      Stored built images
    </td>
  </tr>

  <tr>
    <td style="padding:10px;">
      <strong>📜 Wrote Shell Script in Pipeline</strong><br/>
      Automatically updated image tags in Kubernetes manifests
    </td>
  </tr>

  <tr>
    <td style="padding:10px;">
      <strong>🚀 Configured CD using ArgoCD</strong><br/>
      Continuously monitored Kubernetes manifests
    </td>
  </tr>

  <tr>
    <td style="padding:10px;">
      <strong>💡 On every code change</strong><br/>
      Pipeline triggers automatically → New image deployed on Kubernetes cluster
    </td>
  </tr>
</table>


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

## CI Pipeline

<img width="1138" height="328" alt="image" src="https://github.com/user-attachments/assets/e9b4807a-7273-468f-b65e-63e8454b35a4" />

---

## ArgoCD 

<img width="1276" height="579" alt="image" src="https://github.com/user-attachments/assets/4c1b41aa-df4d-4a36-840c-3e938ec4e16a" />

---

## Web UI After Deployment

<img width="1289" height="670" alt="image" src="https://github.com/user-attachments/assets/ce8be90e-6dc9-4f60-8304-f6272a19f35b" />


---

## 🙌 Closing Thoughts

This project gave me **hands-on exposure** to real-world DevOps workflows, connecting CI/CD automation, Kubernetes orchestration, and GitOps deployment tools.  

I’m continuously improving this setup and learning ways to integrate **cloud-native best practices** in future projects.

---


⭐ *If you liked this project or found it interesting, feel free to star it on GitHub!*
