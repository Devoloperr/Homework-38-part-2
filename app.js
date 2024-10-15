fetch("https://content.guardianapis.com/search?q=debate&tag=politics/politics&from-date=2014-01-01&api-key=4d079d9e-fb44-4af8-b696-b73e98629503")
    .then(res => res.json())
    .then(data => {
        console.log(data.response.results);
        data.response.results.map(news => {
            let a = document.createElement("a");
            a.href = news.webUrl;
            a.textContent = news.webTitle;
            document.body.append(a)
        });

    });