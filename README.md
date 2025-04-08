# DevOps Demo Project 

This is a simple Node.js app containerized using Docker and deployed on an AWS EC2 instance using Ansible.

## Stack Used:
- Node.js + Express
- Docker
- Ansible
- AWS EC2
- Jenkins

## Deployment Steps:
1. Launch EC2 and allow SSH + HTTP
2. Clone this repo on the control node
3. Run the Ansible playbook:
```bash

GitHub – Source code hosting & version control

Jenkins – Continuous Integration server that triggers builds on code changes

Ansible – Automation tool used to configure the EC2 server and deploy the app

Docker – Containerized the app for consistent deployment

EC2 (Ubuntu) – Hosted the production environment
ansible-playbook -i ansible/inventory.ini ansible/playbook.yml
