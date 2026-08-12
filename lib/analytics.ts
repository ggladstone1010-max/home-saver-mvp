export type AnalyticsEvent="landing_page_view"|"start_plan"|"onboarding_started"|"onboarding_completed"|"dashboard_view"|"fund_interest"|"property_view"|"property_saved"|"pre_market_interest"|"live_mpg_interest"|"adviser_view"|"adviser_connection_request"|"broker_introduction_request"|"buyers_agent_introduction_request"|"property_enquiry"|"LANDING_PRIMARY_CTA_CLICK"|"LANDING_SIGN_IN_CLICK"|"LANDING_PRIORITY_ACCESS_CLICK"|"LANDING_PROPERTY_EXPLANATION_VIEWED"|"ONBOARDING_STARTED"|"FUND_EDUCATION_VIEWED"|"FUND_EXAMPLE_OPENED"|"FUND_INTEREST_STARTED"|"FUND_INTEREST_COMPLETED"|"FUND_ADVISER_SHARE_CONSENTED"|"FUND_ADVISER_INTRO_REQUESTED"|"TOP_PROPERTY_MATCH_CLICKED"|"HOME_ASSISTANT_INSIGHT_CLICKED";

/** No-op event boundary ready to connect to an approved analytics provider later. */
export function trackEvent(event:AnalyticsEvent):void{
  // Intentionally empty for the local-only MVP.
  void event;
}
