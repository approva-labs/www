# Connection Flow

Before an application can request approvals, a user has to link a trusted device once. This document covers that pairing flow in detail.

## Goal

Create a secure, persistent session between a user's trusted device and your application, without requiring the user to re-authenticate on every subsequent request.

## Step by step

**1. Your application initiates connection**
The Web SDK calls `approva.connect()`, which opens the pairing flow. Approva detects the context automatically:

- **On mobile web** — a universal link opens the Approva app directly on the same device, straight to the pairing screen.
- **On desktop web** — a QR code is displayed; the user scans it with the Approva app on their phone.

**2. User confirms pairing on their device**
Whether they arrived via deep link or QR scan, the user lands on the same pairing screen in the Approva app and confirms with biometrics. No separate account sign-in step is required — pairing is device-to-application, not identity-to-application.

**3. Approva creates a session**
Once the user confirms pairing on their device, Approva issues a session scoped to your application (its `clientId`). This session is what future authorization requests will be delivered against.

**4. Confirmation**
- If the user paired via deep link, the app can hand control back to the browser tab automatically where possible.
- Either way, your application's Web SDK is listening for the `connected` event the moment `connect()` was called — so the tab updates the instant pairing completes, whether or not the OS switches focus back to it.

The user's device is now paired and ready to receive authorization requests — no further sign-in is required for subsequent approvals.

## What the session contains

- A reference to the paired trusted device (not raw device credentials)
- The scope of what the session is allowed to approve for this application
- An expiry/revocation state

## Persistence and revocation

Sessions are designed to be **long-lived but never silently permanent**:

- The user is not asked to reconnect for every request — that's the point of connecting once.
- The session can be revoked instantly, from any application the device is paired with, or from the Approva mobile app directly.
- Revoking a session does not affect other applications' sessions with the same device.

## Failure and edge cases

- **Pairing abandoned mid-flow** — no session is created; the application receives no `connected` event and should treat the user as unauthenticated.
- **Deep link opens the app but the app isn't installed** — falls back to an app-store link or a lightweight web-based pairing page, rather than a dead link.
- **Device already paired to another account** — the pairing flow surfaces this explicitly rather than silently overwriting the existing session.
- **QR code expired** — codes are short-lived; the application should regenerate rather than let a user scan a stale code.
- **In-app browsers (e.g., social media webviews)** — some environments restrict deep links or app-switching; the QR path is the reliable fallback in these cases even on mobile.

## Where this leads

Once a device is connected, your application can begin creating authorization requests — see [Authorization Flow](./04-authorization-flow.md).
