let newsAccordion = document.getElementById("newsAccordion");
const xhr = new XMLHttpRequest();
xhr.open(
  "GET",
  `https://newsapi.org/v2/top-headlines?country=in&apiKey=889e863655ab40cc9eb4450efea7a05c`,
  true
);

xhr.onload = function () {
  if (this.status == 200) {
    let json = JSON.parse(this.responseText);
    let articles = json.articles;
    console.log(articles);
    let NewsHtml = "";
    articles.forEach(function (element, index) {
      let news = `<div class="card">
                            <div class="card-header" id="heading${index}">
                                <h2 class="mb-0">
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
                                    aria-expanded="false" aria-controls="collapse${index}">
                                   <b>Breaking News ${index + 1}:</b> ${
        element["title"]
      }
                                </button>
                                </h2>
                            </div>

                            <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
                                <div class="card-body"> ${
                                  element["content"]
                                }. <a href="${
        element["url"]
      }" target="_blank" >Read more here</a>  </div>
                            </div>
                        </div>`;
      NewsHtml += news;
    });
    newsAccordion.innerHTML = NewsHtml;
  } else {
    console.log("Some error occured");
  }
};
xhr.send();
