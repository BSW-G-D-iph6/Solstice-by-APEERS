## Inspiration
This was inspired by the infamous shop Currys and Spring creator along with other online shops, It serves as an open-source template for others to build their online shop with, heavy customisation on the UI will be appealing to other techies who would wish to sell online, It could be for Bundles, Merchandise (with good Email services it could happen), or perhaps if they are selling tutoring classes, It is no doubt that a techie could make this themselves, although they would want to focus more on the product they are selling rather than developing the website which is a small factor in the production line.

## Stack:
FE: Redux, Next.JS, Apollo Client
BE: SpringBoot, Graphiql, MongoDB Drivers, Rest
DB: MongoDB (no sql)
## What it does

## How we built it
### FE
The frontend basket feature was made with Redux, utilising the Redux persistent Store to add saved basket features.

In order for the Frontend to connect with the GraphQL Backend, we used Apollo Client to send and receive the Queries.

The whole framework was Typescript and in Next.JS (no app router - I tried but it was a pain in the.......)

### BE
The Backend framework was the Java SpringBoot framework, It dealt 2 types of controllers, Graphiql controllers, along with Rest.

It interacted with the MongoDB DataBase VIA it's appropriate drivers.
### DB
We decided to go with a Non-SQL Database due to the data being stored, It would have also worked with a SQL DB although that would've been to complex to make within the short span of time, Hence we chose **MongoDB**

## Challenges we ran into
The whole ride was a rollercoaster, since I found out about the hackathon, I pulled quite a few all-nighters, 

I experienced a phase of "feeling auspicious", Everything was going well first try, this was especially for the frontend and even early backend, but then I started the Graphql..... I hit a brickwall, Errors flowed in like a waterfall, I was stuck in deep mud for a day, but thankfully it worked, 

I was close in time around when GQL worked, it was around 7pm thursday, I took a backup, and worked on the DB, thankfully it went smoothly although i ran into a bug in the night, I dreamt of solutions but forgot all in the morning, I did a quick refactor and thankfully it worked.

## Accomplishments that we're proud of
This is by far one of the largest projects that I've made, let along in such a short period of time, I've learned a lot through this, I've done all of this before but never integrated, EG: I've created a mongoDB app (although that time i did it with Nest.JS), I've done significantly a lot with Nest.JS although this is one of the first times I've used Java.

## What we learned
Hardcore technical skills, Patience, Logical thinking, Planning on paper, Overall thinking.

## What's next for PPZ
Currently I have a plan to release phases with the following:
### Phase 1 - Completed
- Basic framework
- Basket with Redux
- DB inegration
- Graphql
### Phase 2
- Add Place order functionality
- Save orders and link with Clerk obtained Email (unable to order without acc)
- Payment Gateway and Checkout
- Integrate tax calculations per locale
- Setup Currency engine
- Terms & Conditions
### Phase 3
- Categories and Sub-categories
- Migrate to SQL Database
### Phase 4
- Migrate to Miro-Frontend (payment MS, Checkout MS)
- Migrate to Mirco-services
### Phase 5
- Dockerize applications (I've spent quite a lot of time working on K8s, Docker, Helm charts as well as Jenkins)
- Dockerize DB
### Phase 6
- Deploy example frontend to cloud provider + Dockerization
- Deploy example backend to cloud provider + Dockerization
- Deploy example database to cloud provider + Dockerization
### Phase 7 
- Configure Jenkins Pipelines
### Phase 8
- Deploy to GCP Kubernetes Cluster with HELM Charts
- Network Rules to add security
- Ingress rules for routing security