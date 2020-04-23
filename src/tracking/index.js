import ReactGA from "react-ga";

export const initGA = (trackingID) => {
  ReactGA.initialize(trackingID, { testMode: process.env.NODE_ENV === "test" });
};

export const PageView = () => {
  ReactGA.pageview(window.location.pathname + window.location.search);
};

/**
 * Event - Add custom tracking event.
 * @param {string} category
 * @param {string} action
 * @param {string} label
 */
export const Event = (category, action, label) => {
  ReactGA.event({
    category: category,
    action: action,
    label: label,
  });
};

/**
 * OutboundLink - Track clicks that are not page links.
 * @param {string} label
 * @param {string} to
 */
export const OutboundLink = (label, to) => {
  ReactGA.OutboundLink({
    eventLabel: label,
    to: to,
    target: "_self",
  });
};
