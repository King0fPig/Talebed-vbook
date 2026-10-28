function execute(url) {
    let response = Http.get(url).html();
    if (response) {
        let list = [];
        let chapters = response.select(".chapter-list a, .dir-list a");
        for (let i = 0; i < chapters.size(); i++) {
            let element = chapters.get(i);
            list.push({
                name: element.text(),
                url: element.attr("href"),
                host: "https://talebed.com"
            });
        }
        return Response.success(list);
    }
    return null;
}
