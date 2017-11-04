# santaHacks
## What it does
Helps communities facilitate secret santa gift exchanges with questions that reflect the interests of the club.
For example a CS community may ask questions about favorite programming language, favorite OS, and if they prefer tabs vs spaces.

## 3 Steps
- Create an organization Secret Santa pool
    - Organization submits:
        - Org name
        - Questions to ask their members
        - Message for members to see when signing up
        - Deadline for signing up
- Collect infomation from organization members
    - Web portal for users to apply for the Secret Santa
    - Members submit:
        - Member Name
        - Mailing address
        - Contact information
        - Answers to questions
- Match up people
    - Connect people who are compatible thanks to algorithmic magic
    - Optimize mailing costs

## How we did it
- Website
    - Hosted in an AWS S3 bucket
    - Domain from domain.com
    - Code adopted from [Slack Secret Santa](https://github.com/jolicode/slack-secret-santa/)
- Database
    - Hosted in AWS DynamoDB