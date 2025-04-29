function sendDiscord(url, text) {
    const options = {
        method: 'post',
        contentType: 'application/json',
        payload: JSON.stringify(payload(text))
    };
    UrlFetchApp.fetch(url, options);
}

function findURL(text, targetDomains) {
    const urlRegex = /(https?:\/\/)([\w.-]+)(\/[\w\/:%#\$&@=\?\+\-]+)?/g;
    let match;

    while ((match = urlRegex.exec(text)) !== null) {
        const protocol = match[1];
        const hostname = match[2];
        const path = match[3] || "";
        const fullURL = protocol + hostname + path;

        if (targetDomains.includes(hostname)) {
            return fullURL;
        }
    }

    return undefined;
}