# SkillSwap+ Database Schema

## Users
- user_id (PK)
- name
- email
- role (student, employer)
- bio
- avatar
- skill_points

## Listings
- listing_id (PK)
- user_id (FK)
- type (offer, request, job)
- title
- description
- category
- timestamp

## Messages
- message_id (PK)
- from_user (FK)
- to_user (FK)
- content
- timestamp

## Reviews
- review_id (PK)
- reviewer_id (FK)
- target_user_id (FK)
- score (1-5)
- comment
- listing_id (FK)
- timestamp

## Jobs (optional for future phase)
- job_id (PK)
- employer_id (FK)
- title
- description
- deadline
