/**
 * Utility to split text into words and wrap them in spans for animation.
 */
export function splitText(element: HTMLElement | string): HTMLElement[] {
  const target = typeof element === 'string' ? document.querySelector(element) as HTMLElement : element;
  
  if (!target) return [];

  // Save original nodes
  const nodes = Array.from(target.childNodes);
  target.innerHTML = "";
  
  const spanElements: HTMLElement[] = [];
  
  nodes.forEach((node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      const words = (node.textContent || "").split(/(\s+)/);
      words.forEach((word) => {
        if (word.trim() === "") {
          target.appendChild(document.createTextNode(word));
          return;
        }

        const wrapper = document.createElement("span");
        wrapper.className = "split-word-wrapper";
        wrapper.style.display = "inline-block";
        wrapper.style.overflow = "hidden";
        wrapper.style.verticalAlign = "top";
        
        const inner = document.createElement("span");
        inner.className = "split-word-inner";
        inner.style.display = "inline-block";
        inner.textContent = word;
        
        wrapper.appendChild(inner);
        target.appendChild(wrapper);
        spanElements.push(inner);
      });
    } else {
      // Keep existing elements like <br />
      target.appendChild(node.cloneNode(true));
    }
  });
  
  return spanElements;
}
