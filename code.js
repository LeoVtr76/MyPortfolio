function filterProjects() {
  var input = document.getElementById("searchInput").value.toLowerCase();
  var projects = document.getElementsByClassName("project-link");

  for (var i = 0; i < projects.length; i++) {
    var tags = projects[i].getElementsByClassName("tag");
    var match = false;

    for (var j = 0; j < tags.length; j++) {
      if (tags[j].innerText.toLowerCase().includes(input)) {
        match = true;
        break;
      }
    }

    projects[i].style.display = match || input === "" ? "" : "none";
  }
}

function collectAllTags() {
  var tagsElements = document.querySelectorAll(".project .tag");
  var tagsSet = new Set();

  tagsElements.forEach((tagElement) => {
    tagsSet.add(tagElement.textContent.toLowerCase());
  });

  return Array.from(tagsSet);
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("searchInput").addEventListener("input", function () {
    var input = this.value.toLowerCase();
    filterProjects(input);
    updateTagSuggestions(input);
  });
});
function updateTagSuggestions(input) {
  var suggestions = document.getElementById("tagSuggestions");
  suggestions.innerHTML = "";

  if (!input) return;

  var allTags = collectAllTags();

  allTags.forEach((tag) => {
    if (tag.toLowerCase().includes(input.toLowerCase())) {
      var option = document.createElement("option");
      option.value = tag;
      suggestions.appendChild(option);
    }
  });
}
