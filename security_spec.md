# Security Specification: LexPK Firestore Database

## 1. Data Invariants
- **Custom Case Law Invariant**: A custom case law document must have a valid non-empty title, citation, category, and full transcript text.
- **Feedback Invariant**: A feedback review must have a valid display name, a star rating between 1 and 5, a user type, and a non-empty text body.
- **Identity Lock**: All writes (create, update, delete) must belong to the authenticated user who initiated them. Users cannot spoof `userId` or administrative privileges.
- **Temporal Invariant**: Creation and update timestamps (`createdAt` and `updatedAt`) must strictly reflect the official server-side generation timestamp (`request.time`).

---

## 2. The "Dirty Dozen" Payloads

### Test Cases for Custom Cases Collection (`customCases/{caseId}`)
1. **Malicious Empty Ingestion**: Attempt to create a custom case with empty or null fields.
2. **Category Poisoning**: Attempt to ingestion a custom case with an invalid category (e.g., `ShadyCategory`).
3. **Identity Spoofing**: Attempt to insert a custom case with a `userId` belonging to another user.
4. **Denial of Wallet (Huge String Payload)**: Attempt to ingestion an huge boundary-breaking title or ID (e.g., > 128 characters/1MB strings) designed to bloat Firestore storage costs.
5. **Precedent Hijacking (Arbitrary Update)**: A non-owner user attempting to edit or overwrite an existing case uploaded by someone else.
6. **Temporal Spoofing**: Supplying a client-side fake timestamp for `createdAt` instead of a server-side timestamp.

### Test Cases for Feedback Collection (`feedback/{feedbackId}`)
7. **Star Rating Hijack**: Attempt to post feedback with 10 stars or negative stars.
8. **Anoymous Profile Spoofing**: Attempting to upload feedback where the user's name is longer than 100 characters.
9. **Spam Forgery**: Attempt to create a feedback review without being authenticated at all.
10. **Ghost State Update (Gaps)**: Attempting to update a feedback review's core immutable properties (like `name` or `userId` or `createdAt`).
11. **Relational Deletion Strike**: Attempting to delete feedback posted by another legitimate user.
12. **Mass Query Scrape**: Attempting to perform blanket queries without proper query boundaries, or attempting O(n) recursive resource attacks.

---

## 3. Test Cases Draft Verification
We will implement strict validation blocks in our `firestore.rules` matching these invariant vectors to guarantee a rejection with `PERMISSION_DENIED` for all un-authenticated, un-validated, or forged vectors.
