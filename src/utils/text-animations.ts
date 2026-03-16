/**
 * Utility to split text into words and wrap them in spans for animation.
 */
export function splitText(element: HTMLElement | string): HTMLElement[] {
  const target = typeof element === 'string' ? document.querySelector(element) as HTMLElement : element;
  
  if (!target) return [];

  const text = target.textContent || "";
  const words = text.split(/\s+/);
  
  target.innerHTML = "";
  
  const spanElements: HTMLElement[] = [];
  
  words.forEach((word, index) => {
    const wrapper = document.createElement("span");
    wrapper.className = "split-word-wrapper";
    wrapper.style.display = "inline-block";
    wrapper.style.overflow = "hidden";
    wrapper.style.verticalAlign = "top";
    
    const inner = document.createElement("span");
    inner.className = "split-word-inner";
    inner.style.display = "inline-block";
    inner.textContent = word + (index < words.length - 1 ? "\u00A0" : "");
    
    wrapper.appendChild(inner);
    target.appendChild(wrapper);
    spanElements.push(inner);
  });
  
  return spanElements;
}
