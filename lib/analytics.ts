export type AnalyticsEvent="LANDING_PRIMARY_CTA_CLICK"|"LANDING_SIGN_IN_CLICK"|"LANDING_PRIORITY_ACCESS_CLICK"|"LANDING_PROPERTY_EXPLANATION_VIEWED"|"ONBOARDING_STARTED";

/** No-op event boundary ready to connect to an approved analytics provider later. */
export function trackEvent(event:AnalyticsEvent):void{
  // Intentionally empty for the local-only MVP.
  void event;
}
