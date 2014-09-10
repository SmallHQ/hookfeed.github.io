---
type: bugfix
---

### Subscription Discount Bug

Fixed a bug in which *subscription discounts* (customer discounts unaffected), created prior to signing up for HookFeed, were excluded from our interface and metric calculations.

All metrics have been re-calculated, and fresh subscription/discount data has been imported from Stripe.

This bug affected a very small set of accounts, and the impact on metrics was very subtle :-)