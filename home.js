function execute() {
    let response = Http.get("https://talebed.com/").html();
    if (response) {
        let list = [];
        let items = response.select("div.book-item, div.item"); 
        for (let i = 0; i < items.size(); i++) {
            let item = items.get(i);
            list.push({
                name: item.select("a.title, h3").text(),
                link: item.select("a").attr("href"),
                cover: item.select("img").attr("data-src") || item.select("img").attr("src"),
                description: item.select("p.author, div.intro").text(),
                host: "https://talebed.com"
            });
        }
        return Response.success(list);
    }
    return null;
}
