// Content container
const div = document.createElement("div");
div.setAttribute("class", "container");
document.body.append(div);

// First paragraph
const firstParagraph = document.createElement("p");
firstParagraph.innerHTML =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit sint atque dolorum fuga ad incidunt voluptatum error fugiat animi amet! Odio temporibus nulla id unde quuerut dignissimos enim nisi rem provident molestias sit tempore omnis recusandae esse sequi officia sapiente.";
div.appendChild(firstParagraph);
firstParagraph.setAttribute("class", "content");

// Quote container
const quoteContainer = document.createElement("div");
quoteContainer.setAttribute("class", "quoteContainer");
div.appendChild(quoteContainer);

// Second paragraph
const secondParagraph = document.createElement("p");
secondParagraph.innerHTML =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit sint atque dolorum fuga ad incidunt voluptatum error fugiat animi amet! Odio temporibus nulla id unde quuerut dignissimos enim nisi rem provident molestias sit tempore omnis recusandae esse sequi officia sapiente.";
div.appendChild(secondParagraph);
secondParagraph.setAttribute("class", "content");

// Dialogue
const dialogue = document.createElement("p");
dialogue.innerHTML = `Teacher: Why are you late? <br> Student: There was a man who lost a hundred dollar bill. <br> Teacher: That's nice. Were you helping him look for it?  <br> Student: No. I was standing on it`;
quoteContainer.appendChild(dialogue);
dialogue.setAttribute("class", "dialogue");

//Creating and positioning a tooltip
function positionAt(anchor, position, text) {
  const tooltip = document.createElement("div");
  tooltip.innerHTML = text;
  tooltip.setAttribute("class", "tooltip");
  document.body.appendChild(tooltip);

  const rect = anchor.getBoundingClientRect();

  if (position === "top") {
    tooltip.style.left = `${rect.left + window.scrollX}px`;
    tooltip.style.top = `${rect.top + window.scrollY - tooltip.offsetHeight}px`;
  } else if (position === "right") {
    tooltip.style.left = `${rect.right + window.scrollX}px`;
    tooltip.style.top = `${rect.top + window.scrollY}px`;
  } else if (position === "bottom") {
    tooltip.style.left = `${rect.left + window.scrollX}px`;
    tooltip.style.top = `${rect.bottom + window.scrollY}px`;
  } else {
    console.error(
      "Invalid position specified. Use 'top', 'right', or 'bottom'."
    );
  }
}

positionAt(dialogue, "top", "Note above");
positionAt(dialogue, "right", "Note at the right");
positionAt(dialogue, "bottom", "Note below");
