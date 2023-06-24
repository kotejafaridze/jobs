fetch("https://my-json-server.typicode.com/saba1111111/jobss/jobs")
  .then((data) => data.json())
  .then((datas) => {
    const urlParams = new URLSearchParams(window.location.search);
    const jobId = urlParams.get("id");
    const job = datas.filter((d) => d.id == jobId)[0];

    if ((jobId && !job) || !jobId) {
      document.getElementById("noJob").innerText = "Job is not avaliable";
      return;
    }

    document.getElementById("upload-form-container").classList.add("visible");
    document.getElementById("job-container").classList.add("visible");
    detailInfo(job);
  })
  .catch((err) => console.log(err));

const detailInfo = (datas) => {
  document.getElementById("title").innerText = "Title - " + datas.title;
  document.getElementById("company").innerText = "Company - " + datas.company;
  document.getElementById("location").innerText =
    "Location - " + datas.location;
  document.getElementById("description").innerText =
    "Description - " + datas.description;
  document.getElementById("requirements").innerText =
    "Requirements - " + datas.requirements;
  document.getElementById("employment_type").innerText =
    "Employment Type - " + datas.employment_type;
  document.getElementById("salary").innerText = "Salary - " + datas.salary;
  document.getElementById("contact").innerText =
    "Email - " + datas.contact.email + "\n " + "Phone - " + datas.contact.phone;
};

document.getElementById("uploadForm").addEventListener("submit", function (e) {
  e.preventDefault();
  //imitate to send,upload file
  var fileInput = document.getElementById("cv");
  const result = document.getElementById("message");

  if (fileInput.value) {
    fileInput.value = "";
    console.log("upload cv");

    result.innerText = "File uploaded successfully.";
  } else {
    result.innerText = "Choose file to upload first.";
  }

  setTimeout(() => {
    result.innerText = "";
  }, 1000);
});
