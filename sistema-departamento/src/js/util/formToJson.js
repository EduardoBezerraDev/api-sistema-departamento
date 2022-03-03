function formToJson(form) {
    const data = new FormData(form)
    let json = {};
    data.forEach(function(value, key) {
        json[key] = value;
    });
    return json
}