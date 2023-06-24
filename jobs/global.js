function renderJobList(jobList, containerId, url) {
  const containerElement = document.getElementById(containerId);

  jobList.forEach((job) => {
    const jobCardElement = document.createElement("div");
    jobCardElement.classList.add("job-list");

    jobCardElement.addEventListener("click", () => {
      window.location.href = `${url}?id=${job.id}`;
    });

    const jobCardHTML = `
      <div class="job-card">
        <div class="job-name">
          <div class="job-detail">
            <h4 class="title">${job.title}</h4>
            <h3 class="heading">${job.company}</h3>
            <p class="description">
              ${job.shortDescription}
            </p>
            <h4 class="salary">${job.salary}</h4>
          </div>
        </div>
        <div class="job-label">
          ${job.skills
            .map(
              (label) =>
                `<a class=${addDifferentStyles()} href="#">${label}</a>`
            )
            .join("")}
        </div>
        <div class="job-posted">${job.posted_date}</div>
      </div>
    `;

    jobCardElement.innerHTML = jobCardHTML;
    containerElement.appendChild(jobCardElement);
  });
}

function addDifferentStyles() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  const style = `label-${randomNumber}`;
  return style;
}
