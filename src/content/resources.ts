/**
 * ============================================================================
 * THREAD — SCROLLING RESOURCES RIBBON
 * ============================================================================
 * The ribbon under the hero scrolls real Filigran content: blog posts,
 * customer stories, reports... Each item is clickable and opens in a new tab.
 *
 * To add an item: copy a block { type, title, url } and edit it.
 * `type` is the small badge shown before the title (keep it short):
 * for example "Blog", "Customer story", "Report", "E-book", "Webinar".
 * ============================================================================
 */

export interface Resource {
  /** Small badge displayed before the title. */
  type: string;
  /** Title of the content, displayed as the clickable link. */
  title: string;
  /** Full link to the content on filigran.io. */
  url: string;
}

export const resources: Resource[] = [
  {
    type: "Customer story",
    title: "How Rivian achieves a 95% reduction in response time with OpenCTI",
    url: "https://filigran.io/customer-stories/how-rivian-achieves-a-95-reduction-in-response-time-with-opencti",
  },
  {
    type: "Blog",
    title: "Introducing OpenAEV: the next evolution in proactive security validation",
    url: "https://filigran.io/blog/introducing-openaev-the-next-evolution-in-proactive-security-validation",
  },
  {
    type: "Customer story",
    title: "How Switzerland's FDFA trains smarter with OpenAEV",
    url: "https://filigran.io/customer-stories/how-switzerlands-fdfa-trains-smarter-with-openaev",
  },
  {
    type: "XTM Hub",
    title: "Deploy scenarios, dashboards and content in one click",
    url: "https://hub.filigran.io",
  },
  {
    type: "Customer story",
    title: "From 5 days to a few seconds: ASRG scaled automotive threat management",
    url: "https://filigran.io/customer-stories/asrg-scaled-automotive-threat-management-with-opencti",
  },
  {
    type: "Blog",
    title: "BAS to AEV and a move towards unified exposure management",
    url: "https://filigran.io/blog/bas-to-aev-and-a-move-towards-unified-exposure-management",
  },
  {
    type: "Customer story",
    title: "Intrinsec's enhanced cybersecurity operations with OpenCTI",
    url: "https://filigran.io/customer-stories/intrinsecs-enhanced-cybersecurity-operations-with-opencti",
  },
  {
    type: "Blog",
    title: "How to run a successful cybersecurity tabletop exercise",
    url: "https://filigran.io/blog/how-to-run-a-successful-cybersecurity-tabletop-exercise",
  },
  {
    type: "Customer story",
    title: "How a leading luxury manufacturer strengthens its cyber defense with OpenCTI",
    url: "https://filigran.io/customer-stories/how-a-leading-luxury-manufacturer-strengthens-its-cyber-defense-with-opencti",
  },
  {
    type: "Blog",
    title: "Ask any question to your OpenCTI data with our chatbot",
    url: "https://filigran.io/blog/ask-any-question-to-your-opencti-data-with-our-chatbot",
  },
];
