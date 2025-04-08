# DevOps Demo Project – AppSquadz

This is a simple Node.js app containerized using Docker and deployed on an AWS EC2 instance using Ansible.

## Stack Used:
- Node.js + Express
- Docker
- Ansible
- AWS EC2

## Deployment Steps:
1. Launch EC2 and allow SSH + HTTP
2. Clone this repo on the control node
3. Run the Ansible playbook:
```bash
ansible-playbook -i ansible/inventory.ini ansible/playbook.yml