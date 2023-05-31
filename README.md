# Azure Cloud Resume Challenge
- Build a resume in html/css/javascript
- Host it in azure
- Setup custom domain
- Setup https
- Deploy resources using IaaC
- Deploy code via CI/CD pipeline

### Frontend - Website:<br>
- HTML/CSS<br>
- Blob Storage<br>
- CDN (Domain/DNS)<br><br><br>


### Backend - Visitor Counter:<br>
- CosmosDB (NoSQL database)<br>
- Azure Functions (Powershell)<br>
- JavaScript<br>

![241811320-7f5adbc9-16c8-49e4-90b2-a07c6c76df38](https://github.com/salman-cissp/azure.resume/assets/134168108/694f6cb3-ecd4-46ab-b60d-4dbf5b7ceaef)



## Section 1:
![241811393-746d5b2b-45a0-4adc-8584-05cf82271d80](https://github.com/salman-cissp/azure.resume/assets/134168108/644824a9-1531-4cb6-a464-50782b27f485)


## Section 2:
![241811407-30fdcb76-ecd3-4747-9188-81fe0e63acb3](https://github.com/salman-cissp/azure.resume/assets/134168108/886abfbc-77fd-48b0-a3ee-7a618c38aa37)


## Section 3:
![241811422-8e563489-05bd-4ee1-aa40-c47faf8f3a9d](https://github.com/salman-cissp/azure.resume/assets/134168108/fcd12ecf-f14f-4185-bb14-8679db79f513)

## Section 4:
![241811443-6492d4d0-22c9-4b21-9405-f5817a1fe12f](https://github.com/salman-cissp/azure.resume/assets/134168108/c63eb90b-58e1-43f1-a099-cc3b5894b37d)


# Implementation in Azure
<br><br>
![241811738-e3c89d94-0311-46a3-9962-c2e27def1047](https://github.com/salman-cissp/azure.resume/assets/134168108/fa5e6e09-556c-408f-b64e-c746d7b62cea)


# Exporting the infrastructure 
Export the entire infrastructure using aztfexport tool. It creates terraform files which could be used in the future to redeploy

![image](https://github.com/salman-cissp/azure.resume/assets/134168108/867ad099-55d6-4868-b93a-6394564aed4b)


### Resources

 - #### Front-end (static site with HTML, CSS, and JavaScript. The visitor counter data is via an Azure Function API call)
    - [How to deploy to blog storage](https://learn.microsoft.com/en-us/azure/storage/blobs/storage-blob-static-website-host)

 - #### Back-end resources (HTTP triggered Azure Functions with Cosmos DB input and output binding)
    - [HTTP triggered Azure Functions](https://learn.microsoft.com/en-us/azure/azure-functions/functions-bindings-http-webhook-trigger?tabs=python-v2%2Cin-process%2Cfunctionsv2&pivots=programming-language-powershell)
    - [Prerequisites for developing functions with visual code locally](https://learn.microsoft.com/en-us/azure/azure-functions/create-first-function-vs-code-powershell)

 - #### Testing Resources (using powershell) 
    - [How to setup Pester for powershell testing](https://pester.dev/docs/quick-start)


 - #### CI/CD Resources (using Github Actions Workflows)
    - [How to deploy a blob storage static site with GitHub actions](https://learn.microsoft.com/en-us/azure/storage/blobs/storage-blobs-static-site-github-actions?tabs=userlevel)
    - [Implement Powershell testing in GitHub Actions](https://docs.github.com/en/actions/automating-builds-and-tests/building-and-testing-powershell)








  











 





 





 





 





 



 



 



 



















