export const scrollToElement = (elementId: string, includeHeaderHeight: boolean) => {
  const element = document.getElementById(elementId);
  if (!element) return;

  // Get fixed header height from CSS var, fallback to 0
  const headerHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-height')) || 0;
  // Get absolute position of target element
  const elementPosition = element.getBoundingClientRect().top + window.scrollY;

  window.scrollTo({
    top: elementPosition - (includeHeaderHeight ? headerHeight : 0),
    behavior: 'smooth',
  });
};
