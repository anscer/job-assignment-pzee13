# Back-end Developer Assignment

Hello! This is a hiring project for our Backend Developer position. If you apply, we’ll ask you to complete this project so we can see how you work through a practical example of the type of tasks you’d do at ANSCER Robotics.

## The Job

As a Backend Developer at ANSCER Robotics, you’ll be working on building and maintaining the backend infrastructure that supports our robotics systems. Check out the job post for the detailed responsibilities and qualifications.

## Background Information

Here we are developing a state management system for our robotics platform. This system needs to handle multiple types of states, manage state status, and integrate with other parts of our infrastructure.

In this project, you'll build a part of this state management system.

## What We Want You to Do

Write some code, and write some notes for us.

This project comes with a basic folder structure. We want you to build a state management system that can have the following features:

### State

States are the main entities in the Robotic platform. Each state has the following base properties:

- `name` (string): The name of the state.
- `description` (string): The description of the state.
- `status` (string): The status of the state.
- `createdAt` (Date): The date and time when the state was created.
- `updatedAt` (Date): The date and time when the state was last updated.
- `createdBy` (string): The user who created the state.

### Requirements

- Use Node.js and Express.js to build the API.
- Use MongoDB as the database.
- Implement session-based(you can use passport for easy implementation) user authentication and authorization.
- Implement the API endpoints for creating, reading, updating, and deleting states.
- Only authenticated users can create, update, and delete states.
- Use TypeScript for type safety.
- Implement basic validation for the input data.

### Bonus Points

- Use Docker to containerize the application.
- Write unit tests for the API endpoints.
- Document the API endpoints using a tool like Postman or Swagger.
- Provide a Postman collection or Swagger documentation for testing the API.

We also want to see you query and aggregate states. Add a method to the state model that summarizes state counts and statuses by hours, days and month for multiple years. Think hard about how many states we're dealing with. We want this method to be fast.

## Notes

NOTES.md is a place for you to show us how you think about the problem and what you'd be thinking about if you were in charge of this feature at ANSCER Robotics. Even though this project does not have a UI component, we're especially interested in how you think the state management experience should work for our robots. We want to see you approach the exercise in a way that prioritizes the needs.

Here are some examples of things we love reading in peoples' NOTES.md files:

- What ideas would you focus on to improve the experience around Robot state management?
- How would you stream the data/logs from the robot to the application?
- How would you communicate errors and problems from robot to the application?
- What properties could you add to the state models that you think our application would find helpful?
- Any other comments, questions, or thoughts that came up.

## Don't Do These

We care a lot about scope. You might be tempted to try and solve the whole big problem, but that's not what we want for this exercise. We're asking for relatively focused work. When in doubt, go deeper before you go broader. Blowing out scope is risky (this is true for people who work here, too).

Pro tip: "Background Information" is just that. We want you to understand the problem. We're not asking you to do extra work.

Last, we're looking for user-focused thought. A lot of what you do in code can illustrate this, but this is also why we have the NOTES.md section. Talk about the types of problems our robot and application would care about and maybe how you'd imagine solving them.

There's a lot of extra work you'd do in real life that we don't need to see here. Feel free to skip these things:

- Don't spend time making this perfect or writing tests for every scenario.
- Don't solve every edge case. Rough edges are fine if it helps you move quickly, and you can document your decisions and trade-offs in NOTES.md.
- In real life, there's probably a lot more database schema. Don't worry about real life, just worry about what we're asking for.
- Skip quality-of-life improvements. We're wary of code coverage tools, refactors, testing library changes, etc. We definitely don't want you to spend time on that stuff.
- And last, if you know what you're doing, don't spend more than two-four hours on this. If you are learning, take all the time you need. But if you're experienced with Node.js, databases, and data consistency issues, this should be a quick project.



Docker repository : https://hub.docker.com/repository/docker/aswinpc9/anscer-task/general

Api Documentation UserSide Link :https://documenter.getpostman.com/view/30249828/2sA3kSnNkB

Api Documentation StateSide Link: https://documenter.getpostman.com/view/30249828/2sA3kSnNpc


