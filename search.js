function execute(key, page) {
    let url = "https://talebed.com/search?key=" + encodeURIComponent(key);
    let response = Http.get(url).html();
    if (response) {
        let list = [];
        let items = response.select(".search-item, .book-item");
        for (let i = 0; i < items.size(); i++) {
            let item = items.get(i);
            list.push({
                name: item.select("a.title").text(),
                link: item.select("a").attr("href"),
                cover: item.select("img").attr("src"),
                host: "https://talebed.com"
            });
        }
        return Response.success(list);
    }
    return null;
}
