function execute(url) {
    let response = Http.get(url).html();
    if (response) {
        return Response.success({
            name: response.select("h1, .book-title").text(),
            cover: response.select(".book-img img, .cover img").attr("src"),
            author: response.select(".author, .book-author").text(),
            description: response.select(".intro, .book-summary").html(),
            detail: response.select(".book-info").html(),
            host: "https://talebed.com"
        });
    }
    return null;
}
