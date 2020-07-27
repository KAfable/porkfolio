---
title: "Mission Control"
date: 1/6/2020
published: true
tech: [Javascript, GraphQL, SQL, Postgres, Docker, React, URQL, Apollo Server, Prisma]
tags: []
template: 'project'
previewImg: preview.png
previewText: "A program management SaaS dashboard for product managers to handle multiple products developed by multiple
project teams. Targeted towards programs with a lot of turnover using Agile sprint methodology, currently in
active production and development by the Labs program managers at Lambda School."
deployment: http://stage.missionctrl.dev/
backend: https://github.com/Lambda-School-Labs/mission-control-be
frontend: https://github.com/Lambda-School-Labs/mission-control-fe
priority: 1
---

## Summary

Mission Control is a program management SaaS dashboard for product managers to handle multiple being simultaneously developed by multiple teams. Targetted towards programs with a lot of turnover but using Agile sprint methodology, it is currently still in active development by the Labs program in Lambda School. 

The project had a unique twist because the stakeholders were the Labs program managers, specifically the Engineering managers Bernie and Jess at Lambda School along with others. The Lambda Labs program is a capstone project where for 2 months, students work together as a team. [Feel free to read more about it here][1]. So right off the bat it feel empowering to be working on a internal solution that my managers were going to be using.

## Technologies

Languages       | Libraries / Frameworks                                | Other
----------------|-------------------------------------------------------| ----
Javascript, SQL | React, Postgres, URQL, Apollo Server, Prisma | Docker, GraphQL



## My Role

My role on the team was split between leading the team and as a full stack developer. I did end up writing a material amount of GraphQL resolvers, lead the AWS deployments, and developed one of the main form components, but those was part of a larger team. My unique responsibilities and contributions on top of the code was leading daily standup, making sure everyone at least knew what was going on in 
other parts of the app, reaching out to stakeholders and communicating issues with them. 

![editor](.\SingleProjectView.png)

## What I Learned

This was my first rough introduction to Docker. In fact the only technology/service that I had experience in the entire tech stack was Javascript and React. I also ended up learning why MacOS seems to dominate the developer industry as a lot of the bash scripts and environment setup just worked perfectly for the developers with UNIX systems on the project. It was a bit ironic that Docker was designed to abstract away the multitude of platform problems associated with developing across different environments, but with no Docker experience, we couldn't even get the platform up and running on Windows 10 (this was before Docker Desktop and WSL2 implemented much easier support).

Also I learned that when you have a really strong developer on your team, just try your best to not get in their way. The other lead on the team was Nick, and Nick was pretty much ahead in terms of frontend and overall javascript knowledge with the rest of the group. We trusted his decisions, tried to pair program whenever possible and always deferred to him for technical conflicts and resolutions.

[1]: https://lambdaschool.com/the-commons/how-lambda-school-labs-works-whiteboard-friday
[2]: .\SingleProjectView.png