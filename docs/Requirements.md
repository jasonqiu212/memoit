---
layout: page
title: Requirements
---

This page covers the user requirements memoit attempts to meet.

## **User Stories**

Priority levels:

- High (must have) - `* * *`
- Medium (nice to have) - `* *`
- Low (unlikely to have) - `*`

| Priority | As a/an …​             | I can …​                           | So that I can…​                                      |
| -------- | ---------------------- | ---------------------------------- | ---------------------------------------------------- |
| `* * *`  | user                   | create tasks                       | record down my tasks                                 |
| `* * *`  | user                   | create tags                        | categorize my tasks                                  |
| `* * *`  | user with many devices | log into the app through a website | view my tasks across multiple devices                |
| `* * *`  | user                   | view my past completed tasks       | have a record of completed tasks                     |
| `* *`    | mobile user            | use the app on a mobile device     | use the app on my mobile device                      |
| `*`      | tech-savvy user        | use keyboard shortcuts             | use the app more efficiently                         |
| `*`      | aesthetic user         | toggle between light and dark mode | customize the app's visual aesthetics and ergonomics |

## **Use Cases**

For all use cases below, the system is `memoit` and the actor is the `user`, unless specified otherwise.

**Use case: UC1 - Create an Account**

Precondition:

- User is not logged in.
- User has not created an account before.

MSS:

1. User wants to create a new account.
2. memoit requests for new account details.
3. User submits details for new account.
4. memoit creates a new account for user.

Use case ends.

Extensions:

- 3a. memoit detects an error in the entered data.
  - 3a1. memoit requests for the correct data.
  - Use case resumes from step 3.

**Use case: UC2 - Log In**

Precondition:

- User is not logged in.
- User has created an account before.

MSS:

1. User wants to log in.
2. memoit requests for login details.
3. User submits details to log in.
4. memoit logs the user in.

Use case ends.

Extensions:

- 3a. memoit detects an error in the entered credentials.
  - 3a1. memoit requests for the correct credentials.
  - Use case resumes from step 3.

**Use case: UC3 - Create New Tag**

Precondition:

- User is logged in.

MSS:

1. User wants to create a new tag.
2. memoit requests for title of tag.
3. User submits title of tag.
4. memoit creates new tag.

Use case ends.

**Use case: UC4 - Create New Task**

Precondition:

- User is logged in.

MSS:

1. User wants to create a new task.
2. memoit requests for details of task.
3. User submits details of task.
4. memoit creates new task.

Use case ends.

**Use case: UC5 - Update Task Details**

Precondition:

- User is logged in.
- User has an existing task.

MSS:

1. User wants to update details of a task.
2. memoit requests for details to be updated.
3. User submits details to be updated.
4. memoit updates task with updated details.

Use case ends.

**Use case: UC6 - Update Task as Completed**

Precondition:

- User is logged in.
- User has an existing task.

MSS:

1. User wants to mark a task as completed.
2. memoit marks task as completed.

Use case ends.

**Use case: UC7 - View Tasks under Specific Tag**

Precondition:

- User is logged in.
- User has an existing task under a tag.

MSS:

1. User wants to view tasks under a specific tag.
2. memoit returns tasks under specified tag.

Use case ends.

**Use case: UC8 - View Tasks under Specific Tag**

Precondition:

- User is logged in.
- User has an existing task that is marked as completed under a tag.

MSS:

1. User <u>views tasks under a specific tag (UC7)</u>.
2. User wants to view completed tasks under specified tag.
3. memoit returns completed tasks under specified tag.

Use case ends.

**Use case: UC9 - Delete Task**

Preconditions:

- User is logged in.
- User has an existing task.

MSS:

1. User wants to delete a task.
2. memoit deletes the specified task.

Use case ends.

**Use case: UC9 - Delete Task**

Preconditions:

- User is logged in.
- User has an existing tag.

MSS:

1. User wants to delete a tag.
2. memoit requests for confirmation from user.
3. User confirms to delete the tag.
4. memoit deletes the tag and all associated tasks.

Use case ends.

Extensions:

- 3a. User chooses to cancel the deletion.
  - Use case ends.
