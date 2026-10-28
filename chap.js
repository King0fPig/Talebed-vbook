function execute(url) {
    let response = Http.get(url).html();
    if (response) {
        response.select("script, style").remove();
        let content = response.select(".read-content, .chapter-content").html();
        return Response.success(content);
    }
    return null;
}
