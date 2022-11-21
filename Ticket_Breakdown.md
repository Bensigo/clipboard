# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here
#### Ticket 1: Create Facility Agent Table
#### Description:
In order for the Facilities to create their custom entry with the agents provided, we need to create a table for the same and use the custom IDs of the agents whenever we get to generate the report.
Table Name: `facility_agent`
Columns: `_id`, `agent_id`, `custom_agent_id`
Index: `facility_id_agent_id_idx` (`_id`, `agent_id`)


#### Ticket 2: Frontend: Accept a custom agent ID while assigning an agent to a Facility  (Single entry)
#### Description:
When assigning a worker, let user be able to add custom agent ID in the form. Create a text field in the form and send the input data  to API as  `customAgentId`.


#### Ticket 3: Backend: Accept a `customAgentId` while assigning an agent to a  Facility (Single entry)
#### Description:
Accept `customAgentId` in a POST  request `/facility/agent` and insert into `facility_agent` with `_id` and `agent_id`.


#### Ticket 4: Frontend: Accept a custom agent ID while assigning an agent to a fascility (Bulk entry)
#### Description:
Accept `custom_agent_id` in the uploaded files and send the same in the API in the key `customAgentId`.


#### Ticket 5: Backend: Accept a custom agent ID while assigning an agent to a fascility (Bulk entry)
#### Description:
Accept `customAgentId` in a POST  request `/fascility/agent/bulk` and insert into `facility_agent` with `_id` and `agent_id`.


#### Ticket 6: Update `getShiftsByFacility` method to capture the custom IDs of the agents provided by the facility
#### Description:
We need to add the custom IDs of the agents assigned to a facility instead of their internal databse IDs.
In `getShiftsByFacility` method, fetch the `custom_agent_id` from `facility_agent` table using the `_id` and `agent_id`. return a response of `customAgentId`